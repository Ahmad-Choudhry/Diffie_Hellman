// ellipticCurve.test.ts
import { G, pointAdd, scalarMultiply, runECDH, modInverse } from '../ellipticCurve';
import type { Point } from '../ellipticCurve';

describe('Elliptic Curve Arithmetic', () => {
  test('modular inverse', () => {
    expect(modInverse(3, 17)).toBe(6); // 3 * 6 ≡ 1 mod 17
    expect(modInverse(5, 17)).toBe(7); // 5 * 7 ≡ 35 ≡ 1 mod 17
  });

  test('point addition', () => {
    const P: Point = [5, 1];
    const Q: Point = [6, 3];
    const R = pointAdd(P, Q);
    expect(R).toEqual([10, 6]);
  });

  test('scalar multiplication', () => {
    const P: Point = G;
    expect(scalarMultiply(1, P)).toEqual([5, 1]);
    expect(scalarMultiply(2, P)).toEqual([6, 3]);
    expect(scalarMultiply(3, P)).toEqual([10, 6]);
    expect(scalarMultiply(19, P)).toBeNull(); // 19G = point at infinity
  });

  test('ECDH shared secret consistency', () => {
    const result = runECDH(7, 13);
    expect(result.match).toBe(true);
    expect(result.shared1).toEqual(result.shared2);
  });
});
