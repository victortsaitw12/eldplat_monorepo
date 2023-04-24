import { convertValueToText } from "@utils/convertValueToText";
type PatternType = { [key: string]: boolean };
export const mappingQueryData = (
  data: { [key: string]: any }[],
  pattern: PatternType,
  parser: (data: any, key: string) => { label: any; value: any }
) => {
  const result: { [key: string]: any }[] = [];
  for (const item of data) {
    const mappedItem: { [key: string]: any } = {};
    for (const key in pattern) {
      mappedItem[key] = parser(item, key);
    }
    result.push(mappedItem);
  }
  return convertValueToText(result, "ch");
};

export const customerPattern: PatternType = {
  id: true,
  customer_No: true,
  customer_Name: true,
  customer_Typ: true,
  contact_Phone: true,
  contact_Email: true
};

export const customerParser = (
  data: any,
  key: string
): { label: any; value: any } => {
  if (key === "id") {
    return {
      label: data["customer_No"] || null,
      value: data["customer_No"] || null
    };
  }
  return {
    label: data[key] || null,
    value: data[key] || null
  };
};
