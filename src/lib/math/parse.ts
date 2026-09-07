export type ExprNode =
  | { type: "num"; value: number }
  | { type: "var"; name: "x" | "y" | "t" }
  | { type: "unary"; op: "+" | "-"; arg: ExprNode }
  | { type: "bin"; op: "+" | "-" | "*" | "/" | "^"; left: ExprNode; right: ExprNode }
  | { type: "call"; name: string; args: ExprNode[] };

export type CompileOk = {
  ok: true;
  fn: (x: number, y: number, t: number) => number;
  usesT: boolean;
};

export type CompileErr = { ok: false; error: string };

export type CompileResult = CompileOk | CompileErr;

type Tok =
  | { kind: "num"; value: number; pos: number }
  | { kind: "id"; value: string; pos: number }
  | { kind: "op"; value: string; pos: number }
  | { kind: "eof"; pos: number };

const CONSTANTS: Record<string, number> = {
  pi: Math.PI,
  e: Math.E,
  tau: Math.PI * 2,
};

const VARS = new Set(["x", "y", "t"]);

type MathFn = { n: number; f: (...args: number[]) => number };

const FNS: Record<string, MathFn> = {
  sin: { n: 1, f: Math.sin },
  cos: { n: 1, f: Math.cos },
  tan: { n: 1, f: Math.tan },
  asin: { n: 1, f: Math.asin },
  acos: { n: 1, f: Math.acos },
  atan: { n: 1, f: Math.atan },
  atan2: { n: 2, f: Math.atan2 },
  sinh: { n: 1, f: Math.sinh },
  cosh: { n: 1, f: Math.cosh },
  tanh: { n: 1, f: Math.tanh },
  exp: { n: 1, f: Math.exp },
  log: { n: 1, f: Math.log },
  ln: { n: 1, f: Math.log },
  log10: { n: 1, f: Math.log10 },
  log2: { n: 1, f: Math.log2 },
  sqrt: { n: 1, f: Math.sqrt },
  abs: { n: 1, f: Math.abs },
  floor: { n: 1, f: Math.floor },
  ceil: { n: 1, f: Math.ceil },
  round: { n: 1, f: Math.round },
  sign: { n: 1, f: Math.sign },
  min: { n: 2, f: Math.min },
  max: { n: 2, f: Math.max },
  hypot: { n: 2, f: Math.hypot },
  pow: { n: 2, f: Math.pow },
  mod: { n: 2, f: (a, b) => a % b },
};

const FN_HINT = "sin, cos, tan, exp, sqrt, abs, log, atan2, min, max";

function normalizeSource(src: string): string {
  return src
    .replace(/π/g, "pi")
    .replace(/−/g, "-")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/·/g, "*");
}

function tokenize(src: string): Tok[] {
  const s = normalizeSource(src);
  const out: Tok[] = [];
  let i = 0;
  while (i < s.length) {
    const ch = s[i]!;
    if (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") {
      i += 1;
      continue;
    }
    if (ch === "*" && s[i + 1] === "*") {
      out.push({ kind: "op", value: "^", pos: i });
      i += 2;
      continue;
    }
    if ("+-*/^(),".includes(ch)) {
      out.push({ kind: "op", value: ch, pos: i });
      i += 1;
      continue;
    }
    if (ch === "." || (ch >= "0" && ch <= "9")) {
      const start = i;
      let seenDot = ch === ".";
      i += 1;
      while (i < s.length) {
        const c = s[i]!;
        if (c >= "0" && c <= "9") {
          i += 1;
          continue;
        }
        if (c === "." && !seenDot) {
          seenDot = true;
          i += 1;
          continue;
        }
        if ((c === "e" || c === "E") && i + 1 < s.length) {
          const n = s[i + 1]!;
          if (n === "+" || n === "-" || (n >= "0" && n <= "9")) {
            i += 2;
            while (i < s.length && s[i]! >= "0" && s[i]! <= "9") i += 1;
            continue;
          }
        }
        break;
      }
      const raw = s.slice(start, i);
      const value = Number(raw);
      if (!Number.isFinite(value)) {
        throw new ParseError(`Can't read number "${raw}"`, start);
      }
      out.push({ kind: "num", value, pos: start });
      continue;
    }
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || ch === "_") {
      const start = i;
      i += 1;
      while (i < s.length) {
        const c = s[i]!;
        if (
          (c >= "a" && c <= "z") ||
          (c >= "A" && c <= "Z") ||
          (c >= "0" && c <= "9") ||
          c === "_"
        ) {
          i += 1;
          continue;
        }
        break;
      }
      out.push({ kind: "id", value: s.slice(start, i).toLowerCase(), pos: start });
      continue;
    }
    throw new ParseError(`Unexpected "${ch}"`, i);
  }
  out.push({ kind: "eof", pos: s.length });
  return out;
}

class ParseError extends Error {
  pos: number;
  constructor(message: string, pos: number) {
    super(message);
    this.pos = pos;
  }
}

class Parser {
  private i = 0;
  constructor(private tokens: Tok[]) {}

  parse(): ExprNode {
    if (this.peek().kind === "eof") {
      throw new ParseError("Enter an expression — try -y or sin(x)", 0);
    }
    const node = this.parseExpr();
    if (this.peek().kind !== "eof") {
      const t = this.peek();
      throw new ParseError(`Unexpected ${describeTok(t)}`, t.pos);
    }
    return node;
  }

  private parseExpr(): ExprNode {
    let left = this.parseTerm();
    while (true) {
      const t = this.peek();
      if (t.kind === "op" && (t.value === "+" || t.value === "-")) {
        this.i += 1;
        const right = this.parseTerm();
        left = { type: "bin", op: t.value, left, right };
        continue;
      }
      break;
    }
    return left;
  }

  private parseTerm(): ExprNode {
    let left = this.parsePower();
    while (true) {
      const t = this.peek();
      if (t.kind === "op" && (t.value === "*" || t.value === "/")) {
        this.i += 1;
        const right = this.parsePower();
        left = { type: "bin", op: t.value, left, right };
        continue;
      }
      if (this.startsPrimary(t)) {
        const right = this.parsePower();
        left = { type: "bin", op: "*", left, right };
        continue;
      }
      break;
    }
    return left;
  }

  private parsePower(): ExprNode {
    const left = this.parseUnary();
    const t = this.peek();
    if (t.kind === "op" && t.value === "^") {
      this.i += 1;
      const right = this.parsePower();
      return { type: "bin", op: "^", left, right };
    }
    return left;
  }

  private parseUnary(): ExprNode {
    const t = this.peek();
    if (t.kind === "op" && (t.value === "+" || t.value === "-")) {
      this.i += 1;
      return { type: "unary", op: t.value, arg: this.parseUnary() };
    }
    return this.parsePrimary();
  }

  private parsePrimary(): ExprNode {
    const t = this.peek();
    if (t.kind === "num") {
      this.i += 1;
      return { type: "num", value: t.value };
    }
    if (t.kind === "id") {
      this.i += 1;
      const name = t.value;
      const next = this.peek();
      if (next.kind === "op" && next.value === "(") {
        this.i += 1;
        const args: ExprNode[] = [];
        if (!(this.peek().kind === "op" && (this.peek() as { value: string }).value === ")")) {
          args.push(this.parseExpr());
          while (this.peek().kind === "op" && (this.peek() as { value: string }).value === ",") {
            this.i += 1;
            args.push(this.parseExpr());
          }
        }
        this.expect(")", t.pos, name);
        return this.makeCall(name, args, t.pos);
      }
      if (name in CONSTANTS) {
        return { type: "num", value: CONSTANTS[name]! };
      }
      if (VARS.has(name)) {
        return { type: "var", name: name as "x" | "y" | "t" };
      }
      if (name in FNS) {
        throw new ParseError(`Use ${name}(...) with parentheses`, t.pos);
      }
      throw new ParseError(unknownName(name), t.pos);
    }
    if (t.kind === "op" && t.value === "(") {
      this.i += 1;
      const inner = this.parseExpr();
      this.expect(")", t.pos);
      return inner;
    }
    if (t.kind === "eof") {
      throw new ParseError("That expression looks unfinished", t.pos);
    }
    throw new ParseError(`Expected a number, x, y, or (`, t.pos);
  }

  private makeCall(name: string, args: ExprNode[], pos: number): ExprNode {
    const spec = FNS[name];
    if (!spec) {
      throw new ParseError(unknownName(name), pos);
    }
    if (args.length !== spec.n) {
      throw new ParseError(
        `${name} takes ${spec.n} value${spec.n === 1 ? "" : "s"}, got ${args.length}`,
        pos,
      );
    }
    return { type: "call", name, args };
  }

  private expect(op: string, from: number, fnName?: string) {
    const t = this.peek();
    if (t.kind === "op" && t.value === op) {
      this.i += 1;
      return;
    }
    if (fnName) {
      throw new ParseError(`Missing ")" for ${fnName}(`, from);
    }
    throw new ParseError(`Missing "${op}"`, from);
  }

  private peek(): Tok {
    return this.tokens[this.i] ?? { kind: "eof", pos: 0 };
  }

  private startsPrimary(t: Tok): boolean {
    if (t.kind === "num" || t.kind === "id") return true;
    return t.kind === "op" && t.value === "(";
  }
}

function describeTok(t: Tok): string {
  if (t.kind === "eof") return "end of expression";
  if (t.kind === "num") return String(t.value);
  if (t.kind === "id") return t.value;
  return `"${t.value}"`;
}

function unknownName(name: string): string {
  if (name.length > 1 && (name.startsWith("x") || name.startsWith("y") || name.startsWith("t"))) {
    const rest = name.slice(1);
    if (rest in FNS || rest in CONSTANTS || VARS.has(rest)) {
      return `Unknown "${name}". Try ${name[0]} * ${rest}${rest in FNS ? "()" : ""}`;
    }
  }
  return `Unknown "${name}". Variables are x, y, t. Functions: ${FN_HINT}`;
}

export function usesT(node: ExprNode): boolean {
  switch (node.type) {
    case "num":
      return false;
    case "var":
      return node.name === "t";
    case "unary":
      return usesT(node.arg);
    case "bin":
      return usesT(node.left) || usesT(node.right);
    case "call":
      return node.args.some(usesT);
  }
}

function compileNode(node: ExprNode): (x: number, y: number, t: number) => number {
  switch (node.type) {
    case "num": {
      const v = node.value;
      return () => v;
    }
    case "var":
      if (node.name === "x") return (x) => x;
      if (node.name === "y") return (_x, y) => y;
      return (_x, _y, t) => t;
    case "unary": {
      const arg = compileNode(node.arg);
      return node.op === "-" ? (x, y, t) => -arg(x, y, t) : arg;
    }
    case "bin": {
      const l = compileNode(node.left);
      const r = compileNode(node.right);
      switch (node.op) {
        case "+":
          return (x, y, t) => l(x, y, t) + r(x, y, t);
        case "-":
          return (x, y, t) => l(x, y, t) - r(x, y, t);
        case "*":
          return (x, y, t) => l(x, y, t) * r(x, y, t);
        case "/":
          return (x, y, t) => l(x, y, t) / r(x, y, t);
        case "^":
          return (x, y, t) => Math.pow(l(x, y, t), r(x, y, t));
      }
      break;
    }
    case "call": {
      const spec = FNS[node.name]!;
      const args = node.args.map(compileNode);
      if (spec.n === 1) {
        const a = args[0]!;
        return (x, y, t) => spec.f(a(x, y, t));
      }
      const a = args[0]!;
      const b = args[1]!;
      return (x, y, t) => spec.f(a(x, y, t), b(x, y, t));
    }
  }
}

export function compile(src: string): CompileResult {
  try {
    const ast = new Parser(tokenize(src)).parse();
    return { ok: true, fn: compileNode(ast), usesT: usesT(ast) };
  } catch (err) {
    if (err instanceof ParseError) {
      return { ok: false, error: err.message };
    }
    return { ok: false, error: "Couldn't read that expression" };
  }
}

export type FieldFn = (x: number, y: number, t: number) => { vx: number; vy: number };

export function compileField(
  vxSrc: string,
  vySrc: string,
):
  | { ok: true; field: FieldFn; usesT: boolean }
  | { ok: false; vxError: string | null; vyError: string | null } {
  const vx = compile(vxSrc);
  const vy = compile(vySrc);
  if (!vx.ok || !vy.ok) {
    return {
      ok: false,
      vxError: vx.ok ? null : vx.error,
      vyError: vy.ok ? null : vy.error,
    };
  }
  const px = vx.fn;
  const py = vy.fn;
  return {
    ok: true,
    usesT: vx.usesT || vy.usesT,
    field: (x, y, t) => ({ vx: px(x, y, t), vy: py(x, y, t) }),
  };
}
