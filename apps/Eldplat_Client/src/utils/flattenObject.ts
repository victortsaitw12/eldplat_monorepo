export function flattenObject(
  targetObj: { [key: string]: any },
  resultObj: { [key: string]: any } = {}
) {
  for (const key in targetObj) {
    if (typeof targetObj[key] === "object") {
      flattenObject(targetObj[key], resultObj);
    } else {
      resultObj[key] = targetObj[key];
    }
  }
  return resultObj;
}
