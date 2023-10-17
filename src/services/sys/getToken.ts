import API_Path from "./apiPath";
import { preRequest } from "@utils/preRequest";

const apiKey = process.env.API_KEY;
const apiSecret = process.env.APU_SECRET;
// TODO: ask Rebo if this guid_1 changes
const guid_1 = "ee382d9d92f04b6d82d8e3d4c5cac2ff";

export const getToken = async () => {
  const checkSum = preRequest(apiKey, apiSecret, guid_1);
  const requestBody = {
    ApiKey: apiKey,
    ApiSecret: apiSecret,
    Checksum: checkSum
  };
  const res = await fetch(API_Path.getToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(requestBody)
  });
  return res.json();
  // TODO: ask Rebo about the sample code in Postman
};
