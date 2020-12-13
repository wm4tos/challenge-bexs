export const divideLines = (text: string): string[] => text.split(/\r?\n/);

export const divideKeys = (lines: string[]): string[][] => lines.map((line) => line.split(/,/));

export const getPathFromKeys = (lines: string[][]): unknown => lines.reduce(
  (acc, [from, to, value]) => Object.assign(
    acc, { [from]: Object.assign(acc?.[from] || {}, { [to]: Number.parseInt(value) }) },
  ), {},
);
