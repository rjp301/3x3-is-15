export type Chosen = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  g: number;
  h: number;
  i: number;
};

export const defaultChosen: Chosen = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
};

export const winningChosen = (chosen: Chosen): boolean => {
  const { a, b, c, d, e, f, g, h, i } = chosen;
  return (
    a + b + c === 15 &&
    d + e + f === 15 &&
    g + h + i === 15 &&
    a + d + g === 15 &&
    b + e + h === 15 &&
    c + f + i === 15 &&
    a + e + i === 15
  );
};
