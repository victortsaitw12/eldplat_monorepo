import dayjs from "dayjs";
const mappingProgressInfo = (list: any[]) => {
  return list.map((item) => ({
    label: item.name,
    status: item.status,
    date: item.date ? dayjs(item.date).format("MM/DD HH:MM") : ""
  }));
};
export default mappingProgressInfo;
