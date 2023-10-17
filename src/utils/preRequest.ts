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

export function preRequest(apiKey: any, apiSecret: any, salt: any) {
  //guid().toString().replace('-','');
  // TODO: ask Rebo if this is an assigned constant string?

  // Access your env variables like this
  //   const now = new Date();
  //   const datestr =
  //     padLeft(now.getUTCHours().toString(), 2, "0") +
  //     padLeft(now.getUTCMinutes().toString(), 2, "0") +
  //     padLeft(now.getUTCSeconds().toString(), 2, "0");
  dayjs.extend(utc);
  const dateStr = dayjs.utc().format("HHmmss");
  // TODO: ask Rebo/Jamie if this can just use dayjs

  const computeStr = salt + apiKey + apiSecret + dateStr;
  // Use the CryptoJS script you imported
  const hash = CryptoJS.MD5(computeStr).toString();
  // TODO: ask Rebo, cryptojs' last publish is 12 years ago, can I use "node-object-hash"?

  const checksum = hash + salt;
  return checksum;
}
