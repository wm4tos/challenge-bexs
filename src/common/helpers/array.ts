export const sortByProperty = (arr: any[]) => (property: string): any[] => arr.sort(
  (a, b) => a[property] - b[property],
);
