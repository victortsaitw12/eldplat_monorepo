// 把取回不好看的日期變成 => 2023/6/14
export const convertDateFormat = (date: string) => {
  // const dateString = "06/05/2023 11:38:34";
  const newDate = new Date(date);

  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
};

// 把取回不好看的日期&時間變成 => 2023/6/14 10:00AM
export const convertDateAndTimeFormat = (date: string) => {
  const newDate = new Date(date);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  };

  const formattedDate = newDate.toLocaleString("en-US", options);
  return formattedDate;
};

// 把2023-06-18T00:00:00 變成=> 2023-06-18
export const onlyDate = (date: string) => {
  return date?.substring(0, 10);
};
