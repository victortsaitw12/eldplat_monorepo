import dayjs from "dayjs";

// 把取回不好看的日期&時間變成 => 6/14/2023 10:00AM
export const convertDateAndTimeFormat = (date: string) => {
  return dayjs(date).format("YYYY/MM/DD hh:mm A");
};

// 把2023-06-18T00:00:00 變成=> 2023-06-18
export const dashDate = (date: string) => {
  // return date?.substring(0, 10);
  console.log("date", date);
  return dayjs(date).format("YYYY-MM-DD");
};

// 把凌亂日期變成 YYYY/MM/DD
export const slashDate = (date: string) => {
  return dayjs(date).format("YYYY/MM/DD");
};

// 把凌亂日期改成時間格式 08:50 AM
export const timeWithAPM = (date: string) => {
  return dayjs(date).format("hh:mm A");
};

export const dateDiff = (start_date: string | any, end_date: string | any) => {
  return dayjs(end_date).diff(start_date, "day");
};
