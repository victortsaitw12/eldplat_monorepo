export const licenseCate_DATA = [
  { value: "01", label: "小型車普通駕駛執照" },
  { value: "02", label: "大貨車普通駕駛執照" },
  { value: "03", label: "大客車普通駕駛執照" },
  { value: "04", label: "聯結車普通駕駛執照" }
];

export const licn_type_DATA = [
  { value: "00", label: "" },
  { value: "01", label: "職業駕駛執照" },
  { value: "02", label: "領隊證照" },
  { value: "03", label: "導遊證照" },
  { value: "04", label: "語言證照" }
];

export const licn_type_MAP = new Map([
  ["01", { label: "職業駕駛執照" }],
  ["02", { label: "領隊證照" }],
  ["03", { label: "導遊證照" }],
  ["04", { label: "語言證照" }]
]);

// {Array.from(licn_type_MAP).map(([key, value]) => (
//   <option key={`$licn-{key}`} value={key}>{value.label}</option>
// ))}
