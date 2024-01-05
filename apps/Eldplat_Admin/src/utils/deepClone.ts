export const deepClone = (obj: { [key: string]: any }) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const copy = obj.constructor();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
};
