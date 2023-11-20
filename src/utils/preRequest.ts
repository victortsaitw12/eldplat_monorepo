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

export async function preRequest() {
  dayjs.extend(utc);
  const dateStr = dayjs.utc().format("HHmmss");

  if (!salt || !apiKey) return null;

  const computeStr = salt + apiKey + apiSecret + dateStr;

  // Use the CryptoJS script you imported
  const hash = CryptoJS.MD5(computeStr).toString();

  const checksum = hash + salt;

  const getTocken = async () => {
    const url = "https://uauth.api.liontravel.com/v2/token/generator";
    const requestBody = {
      ApiKey: apiKey,
      ApiSecret: apiSecret,
      Checksum: checksum
    };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
      const result = await res.json();
      if (!result.Data) throw new Error(result.rDesc);
      return result.Data.AccessToken.split(" ")[1];
    } catch (err: any) {
      // TODO error handling
      console.log(err.message);
    }
  };

  const accessToken = await getTocken();
  return accessToken;
}
