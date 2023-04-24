export const department_DATA = ["多元發展部", "創新發展部", "資通部", "營運部"];
export const class_DATA = [
  "應用專案管理組",
  "前端互動應用組",
  "商業互動設計組",
  "通運應用整合組"
];

export function formatDate(date: string | number | Date) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join("-");
}
