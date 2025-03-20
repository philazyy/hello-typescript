import { isTriplet } from "./pythagoras";

test('valid Pythagorean triplet', () => {
  expect(isTriplet(3, 4, 5)).toBe(true);
});

test('invalid Pythagorean triplet', () => {
  expect(isTriplet(1, 2, 3)).toBe(false);
});
