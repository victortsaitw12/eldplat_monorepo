export const convertDateFormat = (date: string) => {
  // const dateString = "06/05/2023 11:38:34";
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}/${month}/${day}`;
  console.log("formattedDate", formattedDate);
  return formattedDate;
};
