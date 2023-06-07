import dayjs from "dayjs";
function formatDateToString(date: Date) {
  const formatedString = dayjs(date).format("YYYY-MM-DD");
  console.log("formatedString", formatedString);
  return formatedString;
}

function shiftDate(date: Date, shiftDate: number) {
  const shiftedDate = dayjs(date).add(shiftDate, "day").format("YYYY-MM-DD");
  return shiftedDate;
}

function calculateDuration(startDate: string, endDate: string) {
  const duration = dayjs(endDate).diff(startDate, "day");
  return duration;
}

export { formatDateToString, shiftDate, calculateDuration };
