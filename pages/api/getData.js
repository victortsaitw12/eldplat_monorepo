import API_Path from "@services/org/apiPath";
import { preRequest } from "@utils/preRequest";
import { ContentList } from "@services/org/getOrgList";

export default async function handler(req, res) {
  const TK = preRequest();
  const apiName = req.url.split("?url=").at(-1);
  const options = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `basic ${TK}`,
      TK: TK
    },
    body: req.body
  };

  try {
    const response = await fetch(API_Path[apiName], options);
    const result = await response.json();
    // console.log("🍅 >>>>>>>>>>>>>> DEBUG 1 :", result);
    // console.log("🍅 >>>>>>>>>>>>>> DEBUG 2 res:", response);

    const errMessage = "Failed to fetch data";

    // const debugMsg = getDebugMsg(response);
    if (response.status === 200) {
      const errLog = getErrLog(req, response);
      throw new Error(errMessage, {
        cause: errLog
      });
    }
    res.status(200).json({ data: ContentList });
  } catch (err) {
    res.status(500).send({ error: err.message, cause: err.cause });
  }
}

const getErrLog = (req, res) => {
  const errLog = {
    status: res.status,
    method: req.method,
    reqHeaders: {
      port: req.headers["origin"],
      host: req.headers["uk"]
    },
    url: res.url,
    resHeaders: res.headers
  };
  return errLog;
};
