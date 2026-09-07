import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Pause, i as Play, r as RotateCcw, t as Wind } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CwNef6dZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium select-none transition-[background-color,color,box-shadow,opacity,scale] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			secondary: "bg-elevated text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-elevated/80",
			ghost: "text-muted hover:bg-elevated hover:text-fg",
			outline: "text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.10)] hover:bg-elevated"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted", className),
		...props
	});
}
function Separator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "separator",
		className: cn("h-px w-full bg-border", className),
		...props
	});
}
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex h-11 w-full touch-none items-center select-none", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1 w-full grow overflow-hidden rounded-full bg-elevated shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary/70" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full bg-primary shadow-[0_0_0_1px_rgba(255,255,255,0.16)] transition-[scale] duration-150 ease-out focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(200,204,212,0.28)] active:scale-95" })]
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full", "bg-elevated shadow-[0_0_0_1px_rgba(255,255,255,0.10)]", "transition-[background-color] duration-150 ease-out", "data-[state=checked]:bg-primary", "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(200,204,212,0.28)]", "disabled:cursor-not-allowed disabled:opacity-40", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-fg transition-transform duration-150 ease-out data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-primary-fg" })
	});
}
var CONSTANTS = {
	pi: Math.PI,
	e: Math.E,
	tau: Math.PI * 2
};
var VARS = /* @__PURE__ */ new Set([
	"x",
	"y",
	"t"
]);
var FNS = {
	sin: {
		n: 1,
		f: Math.sin
	},
	cos: {
		n: 1,
		f: Math.cos
	},
	tan: {
		n: 1,
		f: Math.tan
	},
	asin: {
		n: 1,
		f: Math.asin
	},
	acos: {
		n: 1,
		f: Math.acos
	},
	atan: {
		n: 1,
		f: Math.atan
	},
	atan2: {
		n: 2,
		f: Math.atan2
	},
	sinh: {
		n: 1,
		f: Math.sinh
	},
	cosh: {
		n: 1,
		f: Math.cosh
	},
	tanh: {
		n: 1,
		f: Math.tanh
	},
	exp: {
		n: 1,
		f: Math.exp
	},
	log: {
		n: 1,
		f: Math.log
	},
	ln: {
		n: 1,
		f: Math.log
	},
	log10: {
		n: 1,
		f: Math.log10
	},
	log2: {
		n: 1,
		f: Math.log2
	},
	sqrt: {
		n: 1,
		f: Math.sqrt
	},
	abs: {
		n: 1,
		f: Math.abs
	},
	floor: {
		n: 1,
		f: Math.floor
	},
	ceil: {
		n: 1,
		f: Math.ceil
	},
	round: {
		n: 1,
		f: Math.round
	},
	sign: {
		n: 1,
		f: Math.sign
	},
	min: {
		n: 2,
		f: Math.min
	},
	max: {
		n: 2,
		f: Math.max
	},
	hypot: {
		n: 2,
		f: Math.hypot
	},
	pow: {
		n: 2,
		f: Math.pow
	},
	mod: {
		n: 2,
		f: (a, b) => a % b
	}
};
var FN_HINT = "sin, cos, tan, exp, sqrt, abs, log, atan2, min, max";
function normalizeSource(src) {
	return src.replace(/π/g, "pi").replace(/−/g, "-").replace(/×/g, "*").replace(/÷/g, "/").replace(/·/g, "*");
}
function tokenize(src) {
	const s = normalizeSource(src);
	const out = [];
	let i = 0;
	while (i < s.length) {
		const ch = s[i];
		if (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
			i += 1;
			continue;
		}
		if (ch === "*" && s[i + 1] === "*") {
			out.push({
				kind: "op",
				value: "^",
				pos: i
			});
			i += 2;
			continue;
		}
		if ("+-*/^(),".includes(ch)) {
			out.push({
				kind: "op",
				value: ch,
				pos: i
			});
			i += 1;
			continue;
		}
		if (ch === "." || ch >= "0" && ch <= "9") {
			const start = i;
			let seenDot = ch === ".";
			i += 1;
			while (i < s.length) {
				const c = s[i];
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
					const n = s[i + 1];
					if (n === "+" || n === "-" || n >= "0" && n <= "9") {
						i += 2;
						while (i < s.length && s[i] >= "0" && s[i] <= "9") i += 1;
						continue;
					}
				}
				break;
			}
			const raw = s.slice(start, i);
			const value = Number(raw);
			if (!Number.isFinite(value)) throw new ParseError(`Can't read number "${raw}"`, start);
			out.push({
				kind: "num",
				value,
				pos: start
			});
			continue;
		}
		if (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch === "_") {
			const start = i;
			i += 1;
			while (i < s.length) {
				const c = s[i];
				if (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "_") {
					i += 1;
					continue;
				}
				break;
			}
			out.push({
				kind: "id",
				value: s.slice(start, i).toLowerCase(),
				pos: start
			});
			continue;
		}
		throw new ParseError(`Unexpected "${ch}"`, i);
	}
	out.push({
		kind: "eof",
		pos: s.length
	});
	return out;
}
var ParseError = class extends Error {
	pos;
	constructor(message, pos) {
		super(message);
		this.pos = pos;
	}
};
var Parser = class {
	tokens;
	i = 0;
	constructor(tokens) {
		this.tokens = tokens;
	}
	parse() {
		if (this.peek().kind === "eof") throw new ParseError("Enter an expression — try -y or sin(x)", 0);
		const node = this.parseExpr();
		if (this.peek().kind !== "eof") {
			const t = this.peek();
			throw new ParseError(`Unexpected ${describeTok(t)}`, t.pos);
		}
		return node;
	}
	parseExpr() {
		let left = this.parseTerm();
		while (true) {
			const t = this.peek();
			if (t.kind === "op" && (t.value === "+" || t.value === "-")) {
				this.i += 1;
				const right = this.parseTerm();
				left = {
					type: "bin",
					op: t.value,
					left,
					right
				};
				continue;
			}
			break;
		}
		return left;
	}
	parseTerm() {
		let left = this.parsePower();
		while (true) {
			const t = this.peek();
			if (t.kind === "op" && (t.value === "*" || t.value === "/")) {
				this.i += 1;
				const right = this.parsePower();
				left = {
					type: "bin",
					op: t.value,
					left,
					right
				};
				continue;
			}
			if (this.startsPrimary(t)) {
				const right = this.parsePower();
				left = {
					type: "bin",
					op: "*",
					left,
					right
				};
				continue;
			}
			break;
		}
		return left;
	}
	parsePower() {
		const left = this.parseUnary();
		const t = this.peek();
		if (t.kind === "op" && t.value === "^") {
			this.i += 1;
			return {
				type: "bin",
				op: "^",
				left,
				right: this.parsePower()
			};
		}
		return left;
	}
	parseUnary() {
		const t = this.peek();
		if (t.kind === "op" && (t.value === "+" || t.value === "-")) {
			this.i += 1;
			return {
				type: "unary",
				op: t.value,
				arg: this.parseUnary()
			};
		}
		return this.parsePrimary();
	}
	parsePrimary() {
		const t = this.peek();
		if (t.kind === "num") {
			this.i += 1;
			return {
				type: "num",
				value: t.value
			};
		}
		if (t.kind === "id") {
			this.i += 1;
			const name = t.value;
			const next = this.peek();
			if (next.kind === "op" && next.value === "(") {
				this.i += 1;
				const args = [];
				if (!(this.peek().kind === "op" && this.peek().value === ")")) {
					args.push(this.parseExpr());
					while (this.peek().kind === "op" && this.peek().value === ",") {
						this.i += 1;
						args.push(this.parseExpr());
					}
				}
				this.expect(")", t.pos, name);
				return this.makeCall(name, args, t.pos);
			}
			if (name in CONSTANTS) return {
				type: "num",
				value: CONSTANTS[name]
			};
			if (VARS.has(name)) return {
				type: "var",
				name
			};
			if (name in FNS) throw new ParseError(`Use ${name}(...) with parentheses`, t.pos);
			throw new ParseError(unknownName(name), t.pos);
		}
		if (t.kind === "op" && t.value === "(") {
			this.i += 1;
			const inner = this.parseExpr();
			this.expect(")", t.pos);
			return inner;
		}
		if (t.kind === "eof") throw new ParseError("That expression looks unfinished", t.pos);
		throw new ParseError(`Expected a number, x, y, or (`, t.pos);
	}
	makeCall(name, args, pos) {
		const spec = FNS[name];
		if (!spec) throw new ParseError(unknownName(name), pos);
		if (args.length !== spec.n) throw new ParseError(`${name} takes ${spec.n} value${spec.n === 1 ? "" : "s"}, got ${args.length}`, pos);
		return {
			type: "call",
			name,
			args
		};
	}
	expect(op, from, fnName) {
		const t = this.peek();
		if (t.kind === "op" && t.value === op) {
			this.i += 1;
			return;
		}
		if (fnName) throw new ParseError(`Missing ")" for ${fnName}(`, from);
		throw new ParseError(`Missing "${op}"`, from);
	}
	peek() {
		return this.tokens[this.i] ?? {
			kind: "eof",
			pos: 0
		};
	}
	startsPrimary(t) {
		if (t.kind === "num" || t.kind === "id") return true;
		return t.kind === "op" && t.value === "(";
	}
};
function describeTok(t) {
	if (t.kind === "eof") return "end of expression";
	if (t.kind === "num") return String(t.value);
	if (t.kind === "id") return t.value;
	return `"${t.value}"`;
}
function unknownName(name) {
	if (name.length > 1 && (name.startsWith("x") || name.startsWith("y") || name.startsWith("t"))) {
		const rest = name.slice(1);
		if (rest in FNS || rest in CONSTANTS || VARS.has(rest)) return `Unknown "${name}". Try ${name[0]} * ${rest}${rest in FNS ? "()" : ""}`;
	}
	return `Unknown "${name}". Variables are x, y, t. Functions: ${FN_HINT}`;
}
function usesT(node) {
	switch (node.type) {
		case "num": return false;
		case "var": return node.name === "t";
		case "unary": return usesT(node.arg);
		case "bin": return usesT(node.left) || usesT(node.right);
		case "call": return node.args.some(usesT);
	}
}
function compileNode(node) {
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
				case "+": return (x, y, t) => l(x, y, t) + r(x, y, t);
				case "-": return (x, y, t) => l(x, y, t) - r(x, y, t);
				case "*": return (x, y, t) => l(x, y, t) * r(x, y, t);
				case "/": return (x, y, t) => l(x, y, t) / r(x, y, t);
				case "^": return (x, y, t) => Math.pow(l(x, y, t), r(x, y, t));
			}
			break;
		}
		case "call": {
			const spec = FNS[node.name];
			const args = node.args.map(compileNode);
			if (spec.n === 1) {
				const a = args[0];
				return (x, y, t) => spec.f(a(x, y, t));
			}
			const a = args[0];
			const b = args[1];
			return (x, y, t) => spec.f(a(x, y, t), b(x, y, t));
		}
	}
}
function compile(src) {
	try {
		const ast = new Parser(tokenize(src)).parse();
		return {
			ok: true,
			fn: compileNode(ast),
			usesT: usesT(ast)
		};
	} catch (err) {
		if (err instanceof ParseError) return {
			ok: false,
			error: err.message
		};
		return {
			ok: false,
			error: "Couldn't read that expression"
		};
	}
}
function compileField(vxSrc, vySrc) {
	const vx = compile(vxSrc);
	const vy = compile(vySrc);
	if (!vx.ok || !vy.ok) return {
		ok: false,
		vxError: vx.ok ? null : vx.error,
		vyError: vy.ok ? null : vy.error
	};
	const px = vx.fn;
	const py = vy.fn;
	return {
		ok: true,
		usesT: vx.usesT || vy.usesT,
		field: (x, y, t) => ({
			vx: px(x, y, t),
			vy: py(x, y, t)
		})
	};
}
var PRESETS = [
	{
		id: "circle",
		name: "Circle",
		blurb: "Pure rotation around the origin",
		vx: "-y",
		vy: "x"
	},
	{
		id: "source",
		name: "Source",
		blurb: "Flows out from the origin",
		vx: "x",
		vy: "y"
	},
	{
		id: "sink",
		name: "Sink",
		blurb: "Flows in toward the origin",
		vx: "-x",
		vy: "-y"
	},
	{
		id: "saddle",
		name: "Saddle",
		blurb: "In along y, out along x",
		vx: "x",
		vy: "-y"
	},
	{
		id: "spiral-in",
		name: "Spiral in",
		blurb: "Rotation plus attraction",
		vx: "-y - 0.35x",
		vy: "x - 0.35y"
	},
	{
		id: "spiral-out",
		name: "Spiral out",
		blurb: "Rotation plus repulsion",
		vx: "-y + 0.28x",
		vy: "x + 0.28y"
	},
	{
		id: "shear",
		name: "Shear",
		blurb: "Horizontal speed grows with y",
		vx: "y",
		vy: "0"
	},
	{
		id: "uniform",
		name: "Uniform",
		blurb: "Constant flow to the right",
		vx: "1",
		vy: "0"
	},
	{
		id: "pendulum",
		name: "Pendulum",
		blurb: "Phase portrait of a pendulum",
		vx: "y",
		vy: "-sin(x)"
	},
	{
		id: "vanderpol",
		name: "Limit cycle",
		blurb: "van der Pol oscillator",
		vx: "y",
		vy: "1.4*(1 - x^2)*y - x"
	},
	{
		id: "gyre",
		name: "Gyre",
		blurb: "Two counter-rotating cells",
		vx: "-sin(x)*cos(y)",
		vy: "cos(x)*sin(y)"
	},
	{
		id: "lattice",
		name: "Lattice",
		blurb: "A grid of swirls",
		vx: "sin(y)",
		vy: "cos(x)"
	},
	{
		id: "dipole",
		name: "Dipole",
		blurb: "A source glued to a sink",
		vx: "(x^2 - y^2) / (x^2 + y^2 + 0.2)^2",
		vy: "2*x*y / (x^2 + y^2 + 0.2)^2"
	},
	{
		id: "chase",
		name: "Chase",
		blurb: "Predator–prey orbits",
		vx: "x*(1 - y)",
		vy: "y*(x - 1)"
	},
	{
		id: "pulse",
		name: "Pulse",
		blurb: "Source and sink taking turns",
		vx: "x*cos(t)",
		vy: "y*cos(t)"
	},
	{
		id: "mix",
		name: "Mix",
		blurb: "A swirl that breathes with t",
		vx: "-y + 0.45*sin(t)*x",
		vy: "x + 0.45*sin(t)*y"
	}
];
var DEFAULT_PRESET = PRESETS[0];
var defaultCompiled = compileField(DEFAULT_PRESET.vx, DEFAULT_PRESET.vy);
if (!defaultCompiled.ok) throw new Error("Default field failed to compile");
var ZERO_PROBE = {
	x: 0,
	y: 0,
	vx: 0,
	vy: 0,
	mag: 0,
	theta: 0,
	active: false
};
function applyExpressions(vxText, vyText, presetId) {
	const compiled = compileField(vxText, vyText);
	if (!compiled.ok) return {
		vxText,
		vyText,
		vxError: compiled.vxError,
		vyError: compiled.vyError,
		presetId
	};
	return {
		vxText,
		vyText,
		vxError: null,
		vyError: null,
		field: compiled.field,
		usesT: compiled.usesT,
		presetId
	};
}
var useFieldStore = create()(persist((set, get) => ({
	vxText: DEFAULT_PRESET.vx,
	vyText: DEFAULT_PRESET.vy,
	vxError: null,
	vyError: null,
	field: defaultCompiled.field,
	usesT: defaultCompiled.usesT,
	presetId: DEFAULT_PRESET.id,
	playing: true,
	density: 16,
	arrowScale: 1,
	normalize: true,
	showArrows: true,
	showGrid: true,
	particlesOn: true,
	particleCount: 700,
	flowSpeed: 1,
	trail: .08,
	span: 4,
	cx: 0,
	cy: 0,
	colorMode: "direction",
	simT: 0,
	probe: ZERO_PROBE,
	seedNonce: 0,
	seedX: 0,
	seedY: 0,
	clearNonce: 0,
	setVx: (text) => {
		set(applyExpressions(text, get().vyText, null));
	},
	setVy: (text) => {
		set(applyExpressions(get().vxText, text, null));
	},
	applyPreset: (id) => {
		const preset = PRESETS.find((p) => p.id === id);
		if (!preset) return;
		set({
			...applyExpressions(preset.vx, preset.vy, preset.id),
			simT: 0,
			cx: 0,
			cy: 0,
			span: 4,
			clearNonce: get().clearNonce + 1
		});
	},
	setPlaying: (playing) => set({ playing }),
	togglePlaying: () => set({ playing: !get().playing }),
	setDensity: (density) => set({ density }),
	setArrowScale: (arrowScale) => set({ arrowScale }),
	setNormalize: (normalize) => set({ normalize }),
	setShowArrows: (showArrows) => set({ showArrows }),
	setShowGrid: (showGrid) => set({ showGrid }),
	setParticlesOn: (particlesOn) => set({ particlesOn }),
	setParticleCount: (particleCount) => set({ particleCount }),
	setFlowSpeed: (flowSpeed) => set({ flowSpeed }),
	setTrail: (trail) => set({ trail }),
	setSpan: (span) => set({ span }),
	setView: (cx, cy, span) => set({
		cx,
		cy,
		span
	}),
	resetView: () => set({
		cx: 0,
		cy: 0,
		span: 4
	}),
	setColorMode: (colorMode) => set({ colorMode }),
	setSimT: (simT) => set({ simT }),
	setProbe: (probe) => set({ probe }),
	seedAt: (x, y) => set({
		seedX: x,
		seedY: y,
		seedNonce: get().seedNonce + 1
	}),
	clearTrails: () => set({ clearNonce: get().clearNonce + 1 })
}), {
	name: "flux-field-v1",
	skipHydration: true,
	partialize: (s) => ({
		vxText: s.vxText,
		vyText: s.vyText,
		presetId: s.presetId,
		playing: s.playing,
		density: s.density,
		arrowScale: s.arrowScale,
		normalize: s.normalize,
		showArrows: s.showArrows,
		showGrid: s.showGrid,
		particlesOn: s.particlesOn,
		particleCount: s.particleCount,
		flowSpeed: s.flowSpeed,
		trail: s.trail,
		span: s.span,
		colorMode: s.colorMode
	}),
	merge: (persisted, current) => {
		const p = persisted ?? {};
		const next = {
			...current,
			...p
		};
		const compiled = compileField(next.vxText, next.vyText);
		if (compiled.ok) {
			next.field = compiled.field;
			next.usesT = compiled.usesT;
			next.vxError = null;
			next.vyError = null;
		} else {
			next.vxError = compiled.vxError;
			next.vyError = compiled.vyError;
		}
		return next;
	}
}));
function Row({ label, value, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs tabular-nums text-subtle",
				children: value
			}) : null]
		}), children]
	});
}
function ToggleRow({ label, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-11 items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange
		})]
	});
}
var COLOR_MODES = [
	{
		id: "direction",
		label: "Angle"
	},
	{
		id: "speed",
		label: "Speed"
	},
	{
		id: "ink",
		label: "Ink"
	}
];
function ControlPanel() {
	const playing = useFieldStore((s) => s.playing);
	const density = useFieldStore((s) => s.density);
	const arrowScale = useFieldStore((s) => s.arrowScale);
	const normalize = useFieldStore((s) => s.normalize);
	const showArrows = useFieldStore((s) => s.showArrows);
	const showGrid = useFieldStore((s) => s.showGrid);
	const particlesOn = useFieldStore((s) => s.particlesOn);
	const particleCount = useFieldStore((s) => s.particleCount);
	const flowSpeed = useFieldStore((s) => s.flowSpeed);
	const trail = useFieldStore((s) => s.trail);
	const span = useFieldStore((s) => s.span);
	const colorMode = useFieldStore((s) => s.colorMode);
	const togglePlaying = useFieldStore((s) => s.togglePlaying);
	const setDensity = useFieldStore((s) => s.setDensity);
	const setArrowScale = useFieldStore((s) => s.setArrowScale);
	const setNormalize = useFieldStore((s) => s.setNormalize);
	const setShowArrows = useFieldStore((s) => s.setShowArrows);
	const setShowGrid = useFieldStore((s) => s.setShowGrid);
	const setParticlesOn = useFieldStore((s) => s.setParticlesOn);
	const setParticleCount = useFieldStore((s) => s.setParticleCount);
	const setFlowSpeed = useFieldStore((s) => s.setFlowSpeed);
	const setTrail = useFieldStore((s) => s.setTrail);
	const setSpan = useFieldStore((s) => s.setSpan);
	const resetView = useFieldStore((s) => s.resetView);
	const setColorMode = useFieldStore((s) => s.setColorMode);
	const clearTrails = useFieldStore((s) => s.clearTrails);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex flex-col gap-3 rounded-2xl bg-surface p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] sm:p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						onClick: togglePlaying,
						className: "flex-1",
						"aria-label": playing ? "Pause flow" : "Play flow",
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 translate-x-px" }), playing ? "Pause" : "Play"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						size: "icon",
						onClick: clearTrails,
						"aria-label": "Clear trails and respawn",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						size: "icon",
						onClick: resetView,
						"aria-label": "Reset view",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Flow speed",
				value: flowSpeed.toFixed(1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: .15,
					max: 3.5,
					step: .05,
					value: [flowSpeed],
					onValueChange: ([v]) => setFlowSpeed(v ?? flowSpeed),
					"aria-label": "Flow speed"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Arrow density",
				value: String(Math.round(density)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: 6,
					max: 32,
					step: 1,
					value: [density],
					onValueChange: ([v]) => setDensity(v ?? density),
					"aria-label": "Arrow density"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Arrow size",
				value: arrowScale.toFixed(1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: .4,
					max: 2,
					step: .05,
					value: [arrowScale],
					onValueChange: ([v]) => setArrowScale(v ?? arrowScale),
					"aria-label": "Arrow size"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Zoom",
				value: `${span.toFixed(1)} u`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: .6,
					max: 16,
					step: .1,
					value: [span],
					onValueChange: ([v]) => setSpan(v ?? span),
					"aria-label": "Zoom span"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "mb-2 block",
				children: "Color"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-1 rounded-lg bg-elevated p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
				children: COLOR_MODES.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setColorMode(mode.id),
					className: cn("h-9 rounded-md text-xs font-medium transition-[background-color,color] duration-150 ease-out", colorMode === mode.id ? "bg-primary text-primary-fg" : "text-muted hover:text-fg"),
					children: mode.label
				}, mode.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-x-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: "Arrows",
						checked: showArrows,
						onCheckedChange: setShowArrows
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: "Grid",
						checked: showGrid,
						onCheckedChange: setShowGrid
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: "Uniform",
						checked: normalize,
						onCheckedChange: setNormalize
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: "Particles",
						checked: particlesOn,
						onCheckedChange: setParticlesOn
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Particle count",
				value: String(Math.round(particleCount)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: 80,
					max: 2200,
					step: 20,
					value: [particleCount],
					onValueChange: ([v]) => setParticleCount(v ?? particleCount),
					"aria-label": "Particle count",
					disabled: !particlesOn
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				label: "Trail fade",
				value: trail.toFixed(2),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: .02,
					max: .22,
					step: .01,
					value: [trail],
					onValueChange: ([v]) => setTrail(v ?? trail),
					"aria-label": "Trail fade",
					disabled: !particlesOn
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-subtle",
				children: "Drag to pan, scroll to zoom. Click the field to drop a streak of particles."
			})
		]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md bg-elevated px-3 text-sm text-fg tabular-nums", "shadow-[0_0_0_1px_rgba(255,255,255,0.08)] placeholder:text-subtle", "transition-[box-shadow,background-color] duration-150 ease-out", "focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgba(200,204,212,0.55)]", "disabled:opacity-40", className),
		...props
	});
}
var CHIPS = [
	{
		label: "sin",
		insert: "sin()"
	},
	{
		label: "cos",
		insert: "cos()"
	},
	{
		label: "exp",
		insert: "exp()"
	},
	{
		label: "sqrt",
		insert: "sqrt()"
	},
	{
		label: "x²",
		insert: "x^2"
	},
	{
		label: "t",
		insert: "t"
	}
];
function EquationBar() {
	const vxText = useFieldStore((s) => s.vxText);
	const vyText = useFieldStore((s) => s.vyText);
	const vxError = useFieldStore((s) => s.vxError);
	const vyError = useFieldStore((s) => s.vyError);
	const setVx = useFieldStore((s) => s.setVx);
	const setVy = useFieldStore((s) => s.setVy);
	const usesT = useFieldStore((s) => s.usesT);
	const vxRef = (0, import_react.useRef)(null);
	const vyRef = (0, import_react.useRef)(null);
	const [focus, setFocus] = (0, import_react.useState)("vx");
	const insert = (snippet) => {
		const isVx = focus === "vx";
		const el = isVx ? vxRef.current : vyRef.current;
		const current = isVx ? vxText : vyText;
		const start = el?.selectionStart ?? current.length;
		const end = el?.selectionEnd ?? current.length;
		const next = current.slice(0, start) + snippet + current.slice(end);
		if (isVx) setVx(next);
		else setVy(next);
		requestAnimationFrame(() => {
			const caret = start + (snippet.endsWith("()") ? snippet.length - 1 : snippet.length);
			el?.focus();
			el?.setSelectionRange(caret, caret);
		});
	};
	const onKey = (e) => {
		if (e.key === "Enter") e.currentTarget.blur();
	};
	const error = vxError || vyError;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl bg-surface px-3 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] sm:px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex shrink-0 items-baseline gap-2 text-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl italic leading-none",
						children: "F"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-lg italic text-muted",
						children: [
							"(x, y",
							usesT ? ", t" : "",
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "="
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-display text-xl text-subtle sm:inline",
						children: "("
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "vx-input",
							children: "x-component of the field"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "vx-input",
							ref: vxRef,
							value: vxText,
							autoComplete: "off",
							autoCorrect: "off",
							spellCheck: false,
							"aria-invalid": Boolean(vxError),
							placeholder: "-y",
							onFocus: () => setFocus("vx"),
							onChange: (e) => setVx(e.target.value),
							onKeyDown: onKey,
							className: cn("font-medium tracking-tight", vxError && "shadow-[0_0_0_1px_rgba(217,114,114,0.7)]")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-muted sm:inline",
						children: ","
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "sr-only",
							htmlFor: "vy-input",
							children: "y-component of the field"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "vy-input",
							ref: vyRef,
							value: vyText,
							autoComplete: "off",
							autoCorrect: "off",
							spellCheck: false,
							"aria-invalid": Boolean(vyError),
							placeholder: "x",
							onFocus: () => setFocus("vy"),
							onChange: (e) => setVy(e.target.value),
							onKeyDown: onKey,
							className: cn("font-medium tracking-tight", vyError && "shadow-[0_0_0_1px_rgba(217,114,114,0.7)]")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-display text-xl text-subtle sm:inline",
						children: ")"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-wrap items-center gap-1.5",
			children: [CHIPS.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => insert(chip.insert),
				className: "h-8 rounded-full px-3 text-xs text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-[background-color,color] duration-150 ease-out hover:bg-elevated hover:text-fg",
				children: chip.label
			}, chip.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("ml-auto text-xs", error ? "text-danger" : "text-subtle"),
				role: error ? "alert" : void 0,
				children: error ?? "x and y are position. t runs while playing."
			})]
		})]
	});
}
var BG = {
	r: 10,
	g: 11,
	b: 13
};
function niceStep(span) {
	const raw = span / 4;
	const exp = 10 ** Math.floor(Math.log10(raw));
	const n = raw / exp;
	if (n < 1.5) return exp;
	if (n < 3.5) return 2 * exp;
	if (n < 7.5) return 5 * exp;
	return 10 * exp;
}
function formatTick(v, step) {
	if (Math.abs(v) < 1e-10) return "0";
	if (step >= 1) return String(Math.round(v));
	const digits = Math.min(4, Math.max(0, Math.ceil(-Math.log10(step)) + 1));
	return v.toFixed(digits).replace(/\.?0+$/, "");
}
function fieldColor(vx, vy, mag, magScale, mode, alpha) {
	if (mode === "ink") return `rgba(200, 204, 212, ${alpha})`;
	if (mode === "direction") {
		const hue = (Math.atan2(vy, vx) * 180 / Math.PI + 360) % 360;
		const light = 58 + 10 * Math.min(1, mag / (magScale || 1));
		return `hsla(${hue.toFixed(1)}, 32%, ${light.toFixed(1)}%, ${alpha})`;
	}
	return `hsla(210, 22%, ${(42 + Math.min(1, mag / (magScale || 1)) * 28).toFixed(1)}%, ${alpha})`;
}
function spawnParticle(view, rng) {
	const x = view.cx + (rng() * 2 - 1) * view.span * 1.05;
	const y = view.cy + (rng() * 2 - 1) * view.span * 1.05;
	return {
		x,
		y,
		px: x,
		py: y,
		life: rng()
	};
}
function drawArrow(ctx, x0, y0, x1, y1, color, width) {
	const dx = x1 - x0;
	const dy = y1 - y0;
	const len = Math.hypot(dx, dy);
	if (len < .8) return;
	const ux = dx / len;
	const uy = dy / len;
	const head = Math.min(7, Math.max(3.5, len * .32));
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1 - ux * head * .35, y1 - uy * head * .35);
	ctx.moveTo(x1 - ux * head - uy * head * .52, y1 - uy * head + ux * head * .52);
	ctx.lineTo(x1, y1);
	ctx.lineTo(x1 - ux * head + uy * head * .52, y1 - uy * head - ux * head * .52);
	ctx.strokeStyle = color;
	ctx.lineWidth = width;
	ctx.lineJoin = "round";
	ctx.lineCap = "round";
	ctx.stroke();
}
function FieldCanvas() {
	const wrapRef = (0, import_react.useRef)(null);
	const arrowsRef = (0, import_react.useRef)(null);
	const flowRef = (0, import_react.useRef)(null);
	const overlayRef = (0, import_react.useRef)(null);
	const pointerRef = (0, import_react.useRef)(null);
	const dragRef = (0, import_react.useRef)(null);
	const lastSeed = (0, import_react.useRef)(0);
	const lastClear = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const wrap = wrapRef.current;
		const arrows = arrowsRef.current;
		const flow = flowRef.current;
		const overlay = overlayRef.current;
		if (!wrap || !arrows || !flow || !overlay) return;
		const ctxA = arrows.getContext("2d");
		const ctxF = flow.getContext("2d");
		const ctxO = overlay.getContext("2d");
		if (!ctxA || !ctxF || !ctxO) return;
		let w = 0;
		let h = 0;
		let dpr = 1;
		let cssW = 1;
		let cssH = 1;
		let running = true;
		let last = performance.now();
		let lastHud = 0;
		let t = 0;
		let magScale = 1;
		let arrowsDirty = true;
		let lastArrowKey = "";
		let lastViewKey = "";
		const particles = [];
		let rngs = 1;
		const rng = () => {
			rngs = rngs * 16807 % 2147483647;
			return (rngs - 1) / 2147483646;
		};
		const worldToScreen = (x, y, view) => {
			const scale = Math.min(cssW, cssH) / (2 * view.span);
			return {
				sx: (x - view.cx) * scale + cssW / 2,
				sy: -(y - view.cy) * scale + cssH / 2,
				scale
			};
		};
		const screenToWorld = (sx, sy, view) => {
			const scale = Math.min(cssW, cssH) / (2 * view.span);
			return {
				x: view.cx + (sx - cssW / 2) / scale,
				y: view.cy - (sy - cssH / 2) / scale
			};
		};
		const resize = () => {
			const rect = wrap.getBoundingClientRect();
			cssW = Math.max(1, rect.width);
			cssH = Math.max(1, rect.height);
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = Math.floor(cssW * dpr);
			h = Math.floor(cssH * dpr);
			for (const c of [
				arrows,
				flow,
				overlay
			]) {
				c.width = w;
				c.height = h;
				c.style.width = `${cssW}px`;
				c.style.height = `${cssH}px`;
			}
			ctxA.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctxF.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctxO.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctxF.clearRect(0, 0, cssW, cssH);
			arrowsDirty = true;
		};
		const syncCount = (n, view) => {
			if (particles.length > n) particles.length = n;
			while (particles.length < n) particles.push(spawnParticle(view, rng));
		};
		const drawGrid = (view, showGrid) => {
			ctxA.fillStyle = `rgb(${BG.r}, ${BG.g}, ${BG.b})`;
			ctxA.fillRect(0, 0, cssW, cssH);
			if (!showGrid) return;
			const step = niceStep(view.span);
			const scale = Math.min(cssW, cssH) / (2 * view.span);
			const x0 = view.cx - cssW / 2 / scale;
			const x1 = view.cx + cssW / 2 / scale;
			const y0 = view.cy - cssH / 2 / scale;
			const y1 = view.cy + cssH / 2 / scale;
			const startX = Math.floor(x0 / step) * step;
			const startY = Math.floor(y0 / step) * step;
			ctxA.lineWidth = 1;
			for (let x = startX; x <= x1 + step * .5; x += step) {
				const { sx } = worldToScreen(x, 0, view);
				const axis = Math.abs(x) < step * 1e-6;
				ctxA.strokeStyle = axis ? "rgba(232, 236, 241, 0.22)" : "rgba(232, 236, 241, 0.06)";
				ctxA.beginPath();
				ctxA.moveTo(sx, 0);
				ctxA.lineTo(sx, cssH);
				ctxA.stroke();
			}
			for (let y = startY; y <= y1 + step * .5; y += step) {
				const { sy } = worldToScreen(0, y, view);
				const axis = Math.abs(y) < step * 1e-6;
				ctxA.strokeStyle = axis ? "rgba(232, 236, 241, 0.22)" : "rgba(232, 236, 241, 0.06)";
				ctxA.beginPath();
				ctxA.moveTo(0, sy);
				ctxA.lineTo(cssW, sy);
				ctxA.stroke();
			}
			ctxA.fillStyle = "rgba(139, 144, 154, 0.9)";
			ctxA.font = "11px 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif";
			ctxA.textAlign = "left";
			ctxA.textBaseline = "top";
			for (let x = startX; x <= x1 + step * .5; x += step) {
				if (Math.abs(x) < step * 1e-6) continue;
				const { sx } = worldToScreen(x, 0, view);
				const { sy } = worldToScreen(0, 0, view);
				const label = formatTick(x, step);
				const ly = Math.min(cssH - 16, Math.max(6, sy + 6));
				ctxA.fillText(label, sx + 4, ly);
			}
			ctxA.textAlign = "right";
			for (let y = startY; y <= y1 + step * .5; y += step) {
				if (Math.abs(y) < step * 1e-6) continue;
				const { sy } = worldToScreen(0, y, view);
				const { sx } = worldToScreen(0, 0, view);
				const label = formatTick(y, step);
				const lx = Math.min(cssW - 6, Math.max(28, sx - 6));
				ctxA.fillText(label, lx, sy + 4);
			}
			ctxA.textAlign = "left";
			const origin = worldToScreen(0, 0, view);
			ctxA.fillText("0", origin.sx + 4, origin.sy + 6);
		};
		const drawArrows = (field, view, density, arrowScale, normalize, colorMode, showArrows, showGrid, time) => {
			drawGrid(view, showGrid);
			if (!showArrows) return;
			const n = Math.round(density);
			const mags = [];
			const samples = [];
			for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
				const x = view.cx + ((i + .5) / n - .5) * 2 * view.span * (cssW / Math.min(cssW, cssH));
				const y = view.cy + ((j + .5) / n - .5) * 2 * view.span * (cssH / Math.min(cssW, cssH));
				const { vx, vy } = field(x, y, time);
				if (!Number.isFinite(vx) || !Number.isFinite(vy)) continue;
				const mag = Math.hypot(vx, vy);
				if (!Number.isFinite(mag)) continue;
				samples.push({
					x,
					y,
					vx,
					vy,
					mag
				});
				mags.push(mag);
			}
			mags.sort((a, b) => a - b);
			magScale = mags[Math.floor(mags.length * .9)] || 1;
			const baseLen = Math.min(cssW, cssH) / n * .42 * arrowScale;
			for (const s of samples) {
				const { sx, sy } = worldToScreen(s.x, s.y, view);
				let ux = s.vx;
				let uy = s.vy;
				const mag = s.mag;
				if (mag < 1e-9) continue;
				ux /= mag;
				uy /= mag;
				const len = normalize ? baseLen : baseLen * Math.min(1.8, mag / magScale);
				const x0 = sx - ux * len * .5;
				const y0 = sy + uy * len * .5;
				const x1 = sx + ux * len * .5;
				const y1 = sy - uy * len * .5;
				const color = fieldColor(s.vx, s.vy, mag, magScale, colorMode, .82);
				drawArrow(ctxA, x0, y0, x1, y1, color, 1.15);
			}
		};
		const integrate = (field, view, dt, speed) => {
			const maxStep = view.span * .05;
			const margin = view.span * 1.15;
			for (const p of particles) {
				p.px = p.x;
				p.py = p.y;
				const a = field(p.x, p.y, t);
				if (!Number.isFinite(a.vx) || !Number.isFinite(a.vy)) {
					Object.assign(p, spawnParticle(view, rng));
					continue;
				}
				let step = dt * speed;
				const mag = Math.hypot(a.vx, a.vy);
				if (mag * step > maxStep) step = maxStep / Math.max(mag, 1e-9);
				const b = field(p.x + a.vx * step, p.y + a.vy * step, t);
				if (!Number.isFinite(b.vx) || !Number.isFinite(b.vy)) {
					Object.assign(p, spawnParticle(view, rng));
					continue;
				}
				p.x += .5 * (a.vx + b.vx) * step;
				p.y += .5 * (a.vy + b.vy) * step;
				p.life += dt;
				if (Math.abs(p.x - view.cx) > margin * (cssW / Math.min(cssW, cssH)) || Math.abs(p.y - view.cy) > margin * (cssH / Math.min(cssW, cssH)) || p.life > 12 + rng() * 8 || mag < 1e-5) Object.assign(p, spawnParticle(view, rng));
			}
		};
		const drawFlow = (field, view, colorMode, fade) => {
			ctxF.save();
			ctxF.globalCompositeOperation = "destination-out";
			ctxF.fillStyle = `rgba(0,0,0,${Math.min(.35, Math.max(.02, fade))})`;
			ctxF.fillRect(0, 0, cssW, cssH);
			ctxF.restore();
			ctxF.lineCap = "round";
			ctxF.lineJoin = "round";
			for (const p of particles) {
				const a = worldToScreen(p.px, p.py, view);
				const b = worldToScreen(p.x, p.y, view);
				const dx = b.sx - a.sx;
				const dy = b.sy - a.sy;
				if (dx * dx + dy * dy < .15) continue;
				const { vx, vy } = field(p.x, p.y, t);
				ctxF.strokeStyle = fieldColor(vx, vy, Math.hypot(vx, vy), magScale, colorMode, .55);
				ctxF.lineWidth = 1.35;
				ctxF.beginPath();
				ctxF.moveTo(a.sx, a.sy);
				ctxF.lineTo(b.sx, b.sy);
				ctxF.stroke();
			}
		};
		const drawOverlay = (field, view, colorMode) => {
			ctxO.clearRect(0, 0, cssW, cssH);
			const ptr = pointerRef.current;
			if (!ptr?.inside) return;
			const world = screenToWorld(ptr.x, ptr.y, view);
			const { vx, vy } = field(world.x, world.y, t);
			const mag = Math.hypot(vx, vy);
			const { sx, sy } = worldToScreen(world.x, world.y, view);
			ctxO.beginPath();
			ctxO.arc(sx, sy, 5, 0, Math.PI * 2);
			ctxO.strokeStyle = "rgba(236, 238, 241, 0.9)";
			ctxO.lineWidth = 1.25;
			ctxO.stroke();
			ctxO.beginPath();
			ctxO.arc(sx, sy, 1.6, 0, Math.PI * 2);
			ctxO.fillStyle = "rgba(236, 238, 241, 0.95)";
			ctxO.fill();
			if (Number.isFinite(vx) && Number.isFinite(vy) && mag > 1e-9) {
				const len = Math.min(cssW, cssH) * .12;
				const ux = vx / mag;
				const uy = vy / mag;
				const x1 = sx + ux * len;
				const y1 = sy - uy * len;
				drawArrow(ctxO, sx, sy, x1, y1, fieldColor(vx, vy, mag, magScale, colorMode, 1), 2);
			}
		};
		const seedStreak = (field, view, x, y) => {
			const { vx, vy } = field(x, y, t);
			const mag = Math.hypot(vx, vy) || 1;
			const nx = -vy / mag;
			const ny = vx / mag;
			const spacing = view.span * .04;
			for (let i = -7; i <= 7; i++) {
				const px = x + nx * i * spacing;
				const py = y + ny * i * spacing;
				const idx = Math.floor(rng() * particles.length);
				if (particles[idx]) particles[idx] = {
					x: px,
					y: py,
					px,
					py,
					life: 0
				};
				else particles.push({
					x: px,
					y: py,
					px,
					py,
					life: 0
				});
			}
		};
		const tick = (now) => {
			if (!running) return;
			const rawDt = (now - last) / 1e3;
			last = now;
			const dt = Math.min(rawDt, .05);
			const state = useFieldStore.getState();
			const view = {
				cx: state.cx,
				cy: state.cy,
				span: state.span
			};
			if (state.clearNonce !== lastClear.current) {
				lastClear.current = state.clearNonce;
				ctxF.clearRect(0, 0, cssW, cssH);
				t = state.simT === 0 ? 0 : t;
				if (state.simT === 0) t = 0;
				particles.length = 0;
			}
			if (state.particlesOn) syncCount(state.particleCount, view);
			else particles.length = 0;
			if (state.seedNonce !== lastSeed.current) {
				lastSeed.current = state.seedNonce;
				seedStreak(state.field, view, state.seedX, state.seedY);
			}
			if (state.playing) {
				t += dt;
				if (state.particlesOn) integrate(state.field, view, dt, state.flowSpeed);
			}
			const viewKey = `${view.cx}|${view.cy}|${view.span}|${cssW}|${cssH}`;
			if (viewKey !== lastViewKey) {
				lastViewKey = viewKey;
				ctxF.clearRect(0, 0, cssW, cssH);
				arrowsDirty = true;
			}
			const arrowKey = [
				state.density,
				state.arrowScale,
				state.normalize,
				state.showArrows,
				state.showGrid,
				state.colorMode,
				state.cx,
				state.cy,
				state.span,
				state.usesT && state.playing ? Math.floor(t * 12) : 0,
				state.vxText,
				state.vyText,
				cssW,
				cssH
			].join("|");
			if (arrowKey !== lastArrowKey) {
				lastArrowKey = arrowKey;
				arrowsDirty = true;
			}
			if (arrowsDirty) {
				drawArrows(state.field, view, state.density, state.arrowScale, state.normalize, state.colorMode, state.showArrows, state.showGrid, t);
				arrowsDirty = false;
			}
			if (state.playing && state.particlesOn) drawFlow(state.field, view, state.colorMode, state.trail);
			drawOverlay(state.field, view, state.colorMode);
			if (now - lastHud > 80) {
				lastHud = now;
				const ptr = pointerRef.current;
				let probe;
				if (ptr?.inside) {
					const world = screenToWorld(ptr.x, ptr.y, view);
					const { vx, vy } = state.field(world.x, world.y, t);
					const mag = Math.hypot(vx, vy);
					probe = {
						x: world.x,
						y: world.y,
						vx,
						vy,
						mag,
						theta: Math.atan2(vy, vx),
						active: true
					};
				} else probe = {
					...state.probe,
					active: false
				};
				if (state.simT !== t || probe.active !== state.probe.active || probe.active) useFieldStore.setState({
					simT: t,
					probe
				});
			}
			requestAnimationFrame(tick);
		};
		const onPointerMove = (e) => {
			const rect = wrap.getBoundingClientRect();
			const sx = e.clientX - rect.left;
			const sy = e.clientY - rect.top;
			pointerRef.current = {
				x: sx,
				y: sy,
				inside: true
			};
			const drag = dragRef.current;
			if (drag && e.pointerId === drag.id) {
				const state = useFieldStore.getState();
				const scale = Math.min(cssW, cssH) / (2 * state.span);
				const dx = (e.clientX - drag.sx) / scale;
				const dy = (e.clientY - drag.sy) / scale;
				if (Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 4) drag.moved = true;
				useFieldStore.getState().setView(drag.cx - dx, drag.cy + dy, state.span);
			}
		};
		const onPointerDown = (e) => {
			if (e.button !== 0) return;
			const state = useFieldStore.getState();
			wrap.setPointerCapture(e.pointerId);
			dragRef.current = {
				id: e.pointerId,
				sx: e.clientX,
				sy: e.clientY,
				cx: state.cx,
				cy: state.cy,
				moved: false
			};
		};
		const onPointerUp = (e) => {
			const drag = dragRef.current;
			if (drag && e.pointerId === drag.id) {
				if (!drag.moved) {
					const rect = wrap.getBoundingClientRect();
					const world = screenToWorld(e.clientX - rect.left, e.clientY - rect.top, {
						cx: useFieldStore.getState().cx,
						cy: useFieldStore.getState().cy,
						span: useFieldStore.getState().span
					});
					useFieldStore.getState().seedAt(world.x, world.y);
				}
				dragRef.current = null;
			}
		};
		const onPointerLeave = () => {
			if (pointerRef.current) pointerRef.current.inside = false;
		};
		const onWheel = (e) => {
			e.preventDefault();
			const state = useFieldStore.getState();
			const factor = e.deltaY > 0 ? 1.08 : 1 / 1.08;
			const next = Math.min(40, Math.max(.4, state.span * factor));
			const rect = wrap.getBoundingClientRect();
			const world = screenToWorld(e.clientX - rect.left, e.clientY - rect.top, {
				cx: state.cx,
				cy: state.cy,
				span: state.span
			});
			const tZoom = 1 - next / state.span;
			useFieldStore.getState().setView(state.cx + (world.x - state.cx) * tZoom, state.cy + (world.y - state.cy) * tZoom, next);
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(wrap);
		wrap.addEventListener("pointermove", onPointerMove);
		wrap.addEventListener("pointerdown", onPointerDown);
		wrap.addEventListener("pointerup", onPointerUp);
		wrap.addEventListener("pointercancel", onPointerUp);
		wrap.addEventListener("pointerleave", onPointerLeave);
		wrap.addEventListener("wheel", onWheel, { passive: false });
		requestAnimationFrame(tick);
		return () => {
			running = false;
			ro.disconnect();
			wrap.removeEventListener("pointermove", onPointerMove);
			wrap.removeEventListener("pointerdown", onPointerDown);
			wrap.removeEventListener("pointerup", onPointerUp);
			wrap.removeEventListener("pointercancel", onPointerUp);
			wrap.removeEventListener("pointerleave", onPointerLeave);
			wrap.removeEventListener("wheel", onWheel);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: "relative h-full min-h-[240px] w-full touch-none overflow-hidden rounded-lg bg-bg",
		style: { cursor: "crosshair" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: arrowsRef,
				className: "absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: flowRef,
				className: "absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: overlayRef,
				className: "absolute inset-0"
			})
		]
	});
}
function PresetRail() {
	const presetId = useFieldStore((s) => s.presetId);
	const applyPreset = useFieldStore((s) => s.applyPreset);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
		children: PRESETS.map((preset) => {
			const active = preset.id === presetId;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				title: preset.blurb,
				onClick: () => applyPreset(preset.id),
				className: cn("h-9 shrink-0 rounded-full px-3.5 text-sm transition-[background-color,color,box-shadow] duration-150 ease-out", active ? "bg-primary text-primary-fg" : "text-muted shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-elevated hover:text-fg"),
				children: preset.name
			}, preset.id);
		})
	});
}
function fmt(n, digits = 2) {
	if (!Number.isFinite(n)) return "—";
	const abs = Math.abs(n);
	if (abs >= 1e3 || abs !== 0 && abs < .005) return n.toExponential(2);
	return n.toFixed(digits);
}
function deg(rad) {
	if (!Number.isFinite(rad)) return "—";
	let d = rad * 180 / Math.PI;
	if (d < 0) d += 360;
	return `${d.toFixed(0)}°`;
}
function ProbeHud() {
	const probe = useFieldStore((s) => s.probe);
	const simT = useFieldStore((s) => s.simT);
	const usesT = useFieldStore((s) => s.usesT);
	const dim = !probe.active;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute top-3 left-3 z-10 rounded-xl bg-surface/90 px-3 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-[2px]",
		style: { opacity: dim ? .72 : 1 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "grid grid-cols-[auto_auto] gap-x-3 gap-y-1 text-xs tabular-nums",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "x"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-fg",
						children: fmt(probe.x)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "y"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-fg",
						children: fmt(probe.y)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "vx"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-fg",
						children: fmt(probe.vx)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "vy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-fg",
						children: fmt(probe.vy)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "|v|"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-fg",
						children: fmt(probe.mag)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "θ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-fg",
						children: deg(probe.theta)
					})]
				}),
				usesT ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "t"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-fg",
						children: fmt(simT)
					})]
				}) : null
			]
		})
	});
}
var TooltipProvider = Provider;
function AppShell() {
	const playing = useFieldStore((s) => s.playing);
	const togglePlaying = useFieldStore((s) => s.togglePlaying);
	const presetId = useFieldStore((s) => s.presetId);
	(0, import_react.useEffect)(() => {
		useFieldStore.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.code === "Space") {
				e.preventDefault();
				useFieldStore.getState().togglePlaying();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 250,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col bg-bg text-fg lg:h-dvh lg:overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between gap-4 px-4 pt-4 pb-3 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl leading-none font-medium tracking-tight italic",
							children: "Flux"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Vector field plotter"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "secondary",
						className: "lg:hidden",
						onClick: togglePlaying,
						"aria-label": playing ? "Pause flow" : "Play flow",
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 translate-x-px" }), playing ? "Pause" : "Play"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 px-3 pb-3 sm:px-4 lg:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquationBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetRail, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-x-hidden px-3 pb-4 sm:px-4 lg:grid-cols-[minmax(0,1fr)_20rem] lg:overflow-hidden lg:px-5 lg:pb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-[52vh] overflow-hidden rounded-2xl p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] lg:min-h-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldCanvas, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProbeHud, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pointer-events-none absolute right-3 bottom-3 text-[11px] tracking-wide text-subtle",
								children: presetId ? presetId.replace("-", " ") : "custom"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:min-h-0 lg:overflow-y-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlPanel, {})
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
