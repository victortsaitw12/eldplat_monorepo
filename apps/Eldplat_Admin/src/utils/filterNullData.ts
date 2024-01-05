export function filterNullData(tragetData: { [key: string]: any }) {
  const filteredData: { [key: string]: any } = {};
  for (const key in tragetData) {
    // console.log("key", key, busData[key]);
    if (!!tragetData[key] && tragetData[key].trim() !== "") {
      filteredData[key] = tragetData[key];
    }
  }
  return filteredData;
}
