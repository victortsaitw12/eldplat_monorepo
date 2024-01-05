export const countActiveFilter = (filter: any) => {
  let count = 0;
  if (!filter) return count;
  for (const key in filter) {
    if (filter[key].value !== null && filter[key].value.trim() !== "") {
      count++;
    }
  }
  return count;
};
