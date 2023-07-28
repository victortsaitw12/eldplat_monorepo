export function replaceKeysInArray(
  arrayOfObjects: any[],
  keyReplacements: { oldKey: any; newKey: any }[]
) {
  return arrayOfObjects.map((obj) => {
    const newObj = { ...obj };

    keyReplacements.forEach(({ oldKey, newKey }) => {
      // Check if the oldKey exists in the object
      if (!newObj.hasOwnProperty(oldKey)) {
        throw new Error(`Object does not have the key '${oldKey}'`);
      }

      // Copy the value of oldKey to newKey
      newObj[newKey] = newObj[oldKey];

      // Delete the old key if needed
      if (oldKey !== newKey) {
        delete newObj[oldKey];
      }
    });

    return newObj;
  });
}
