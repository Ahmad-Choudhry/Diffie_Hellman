
export type Point = [number, number] | null;

const p = 17;
const a = 2;
export const G: Point = [5, 1]; // Base point

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function modInverse(a: number, m: number): number {
  let [t, newT] = [0, 1];
  let [r, newR] = [m, mod(a, m)];
  while (newR !== 0) {
    const quotient = Math.floor(r / newR);
    [t, newT] = [newT, t - quotient * newT];
    [r, newR] = [newR, r - quotient * newR];
  }
  if (r > 1) throw new Error(`${a} has no inverse mod ${m}`);
  return mod(t, m);
}

export function pointAdd(P: Point, Q: Point): Point {
  if (P === null) return Q;
  if (Q === null) return P;

  const [x1, y1] = P;
  const [x2, y2] = Q;

  if (x1 === x2 && y1 === mod(-y2, p)) return null;

  let m: number;
  if (x1 === x2 && y1 === y2) {
    const num = mod(3 * x1 * x1 + a, p);
    const den = modInverse(2 * y1, p);
    m = mod(num * den, p);
  } else {
    const num = mod(y2 - y1, p);
    const den = modInverse(x2 - x1, p);
    m = mod(num * den, p);
  }

  const x3 = mod(m * m - x1 - x2, p);
  const y3 = mod(m * (x1 - x3) - y1, p);
  return [x3, y3];
}

export function scalarMultiply(k: number, P: Point): Point {
  let result: Point = null;
  let addend: Point = P;

  while (k > 0) {
    if (k % 2 === 1) {
      result = pointAdd(result, addend);
    }
    addend = pointAdd(addend, addend);
    k = Math.floor(k / 2);
  }

  return result;
}

export function runECDH(a: number, b: number) {
  const A = scalarMultiply(a, G);
  const B = scalarMultiply(b, G);
  const shared1 = scalarMultiply(a, B);
  const shared2 = scalarMultiply(b, A);

  return {
    curve: `y² ≡ x³ + ${a}x + ${b} mod ${p}`,
    G,
    a,
    b,
    A,
    B,
    shared1,
    shared2,
    match: JSON.stringify(shared1) === JSON.stringify(shared2),
  };
}
