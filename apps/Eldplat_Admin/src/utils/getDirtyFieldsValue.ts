import { deepClone } from "./deepClone";

export function getDirtyFieldsValue(formData: any, dirtyFields: any) {
  const dirtyFieldsValue = deepClone(dirtyFields);
  replaceDirtyFieldWithValue(formData, dirtyFieldsValue);
  return dirtyFieldsValue;
}

function replaceDirtyFieldWithValue(
  data: any,
  dirtyFieldsValue: any,
  key = "",
  parent: { [key: string]: any } = {}
) {
  if (typeof data === "object") {
    for (const key in dirtyFieldsValue) {
      replaceDirtyFieldWithValue(
        data[key],
        dirtyFieldsValue[key],
        key,
        dirtyFieldsValue
      );
    }
  } else {
    console.log("dirtyFieldsValue", dirtyFieldsValue);
    if (dirtyFieldsValue === true) {
      parent[key] = data;
    } else {
      delete parent[key];
    }
    return;
  }
}

/**
 * This is just flattern the object, not the final result
 * flattern to 1 layer object
function getDirtyFieldByPath(
  data: any,
  callback: any,
  path = "",
  result: { [key: string]: any } = {}
) {
  if (typeof data === "object") {
    for (const key in data) {
      getDirtyFieldByPath(data[key], callback, path + key + ".", result);
    }
  } else if (Array.isArray(data)) {
    console.log("Is array");
    for (let i = 0; i < data.length; i++) {
      getDirtyFieldByPath(data[i], callback, path + "[" + i + "]", result);
    }
  } else {
    console.log("total path", path);
    console.log("data", callback(path));
    result[path.slice(0, path.length - 1)] = callback(path);
    console.log("result", result);
    return result;
  }
}
 */
