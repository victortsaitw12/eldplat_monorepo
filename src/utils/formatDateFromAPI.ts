function formatDateFromAPI(dateString: string) {
  if (!dateString || dateString.trim() === "") return "";
  return dateString.split("T")[0];
}

function deepCloneWithDateFormat(obj: { [key: string]: any }) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const copy = obj.constructor();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key.includes("date")) {
        copy[key] = formatDateFromAPI(obj[key]);
      } else {
        copy[key] = deepCloneWithDateFormat(obj[key]);
      }
    }
  }
  return copy;
}

export { formatDateFromAPI, deepCloneWithDateFormat };
