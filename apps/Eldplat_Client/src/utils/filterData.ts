export const createFilteredData = (
  data: any[],
  filters: { [key: string]: any }
) => {
  let filterData = data;
  for (const key in filters) {
    if (filters[key].value === null || filters[key].value.trim() === "") {
      continue;
    }
    filterData = filterData.filter((item) => {
      if (item[key] === null || item[key].trim() === "") return false;
      return isPrefix(item[key], filters[key].value);
    });
  }
  return filterData;
};

const isPrefix = (targetString: string, prefix: string) => {
  console.log(targetString, prefix);
  if (prefix.length > targetString.length) return false;
  for (let i = 0; i < prefix.length; i++) {
    if (targetString[i] !== prefix[i]) return false;
  }
  return true;
};
