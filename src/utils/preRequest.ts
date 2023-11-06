import CryptoJS from "crypto-js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// function padLeft(ori: string, length: number, str: string) {
//   str = str || " ";
//   return ori.length >= length
//     ? ori
//     : new Array(Math.ceil((length - ori.length) / str.length) + 1)
//         .join(str)
//         .substr(0, length - ori.length) + ori;
// }

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_API_SECRET;
const salt = process.env.NEXT_PUBLIC_GUID_1;

export function preRequest() {
  //guid().toString().replace('-','');
  // TODO: ask Rebo if this is an assigned constant string?

  dayjs.extend(utc);
  const dateStr = dayjs.utc().format("HHmmss");
  // TODO: ask Rebo/Jamie if this can just use dayjs

  if (!salt || !apiKey) return null;

  const computeStr = salt + apiKey + apiSecret + dateStr;
  // Use the CryptoJS script you imported
  const hash = CryptoJS.MD5(computeStr).toString();

  const checksum = hash + salt;
  return checksum;
}
