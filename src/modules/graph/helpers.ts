export const objectToMap = (source: unknown): Map<string, Map<string, unknown>> => {
  const map = new Map();
  const keys = Object.keys(source);

  keys.forEach((key) => {
    const val = source[key];

    if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      return map.set(key, objectToMap(val));
    }

    return map.set(key, Number(val));
  });

  return map;
};
