export const hours = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];

export const minutes = () => {
  const result = [];
  for (let i = 0; i < 60; i++) {
    if (i < 10) {
      result.push(`0${i}`);
    } else {
      result.push(`${i}`);
    }
  }
  return result;
};
