import { convertValueToText } from "@utils/convertValueToText";
export type PatternType = { [key: string]: boolean };
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
