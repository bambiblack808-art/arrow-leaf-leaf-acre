export type Preset = {
  id: string;
  name: string;
  blurb: string;
  vx: string;
  vy: string;
};

export const PRESETS: Preset[] = [
  {
    id: "circle",
    name: "Circle",
    blurb: "Pure rotation around the origin",
    vx: "-y",
    vy: "x",
  },
  {
    id: "source",
    name: "Source",
    blurb: "Flows out from the origin",
    vx: "x",
    vy: "y",
  },
  {
    id: "sink",
    name: "Sink",
    blurb: "Flows in toward the origin",
    vx: "-x",
    vy: "-y",
  },
  {
    id: "saddle",
    name: "Saddle",
    blurb: "In along y, out along x",
    vx: "x",
    vy: "-y",
  },
  {
    id: "spiral-in",
    name: "Spiral in",
    blurb: "Rotation plus attraction",
    vx: "-y - 0.35x",
    vy: "x - 0.35y",
  },
  {
    id: "spiral-out",
    name: "Spiral out",
    blurb: "Rotation plus repulsion",
    vx: "-y + 0.28x",
    vy: "x + 0.28y",
  },
  {
    id: "shear",
    name: "Shear",
    blurb: "Horizontal speed grows with y",
    vx: "y",
    vy: "0",
  },
  {
    id: "uniform",
    name: "Uniform",
    blurb: "Constant flow to the right",
    vx: "1",
    vy: "0",
  },
  {
    id: "pendulum",
    name: "Pendulum",
    blurb: "Phase portrait of a pendulum",
    vx: "y",
    vy: "-sin(x)",
  },
  {
    id: "vanderpol",
    name: "Limit cycle",
    blurb: "van der Pol oscillator",
    vx: "y",
    vy: "1.4*(1 - x^2)*y - x",
  },
  {
    id: "gyre",
    name: "Gyre",
    blurb: "Two counter-rotating cells",
    vx: "-sin(x)*cos(y)",
    vy: "cos(x)*sin(y)",
  },
  {
    id: "lattice",
    name: "Lattice",
    blurb: "A grid of swirls",
    vx: "sin(y)",
    vy: "cos(x)",
  },
  {
    id: "dipole",
    name: "Dipole",
    blurb: "A source glued to a sink",
    vx: "(x^2 - y^2) / (x^2 + y^2 + 0.2)^2",
    vy: "2*x*y / (x^2 + y^2 + 0.2)^2",
  },
  {
    id: "chase",
    name: "Chase",
    blurb: "Predator–prey orbits",
    vx: "x*(1 - y)",
    vy: "y*(x - 1)",
  },
  {
    id: "pulse",
    name: "Pulse",
    blurb: "Source and sink taking turns",
    vx: "x*cos(t)",
    vy: "y*cos(t)",
  },
  {
    id: "mix",
    name: "Mix",
    blurb: "A swirl that breathes with t",
    vx: "-y + 0.45*sin(t)*x",
    vy: "x + 0.45*sin(t)*y",
  },
];

export const DEFAULT_PRESET = PRESETS[0]!;
