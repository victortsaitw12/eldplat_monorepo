import API_Path from "@services/org/apiPath";
import { preRequest } from "@utils/preRequest";
import { ContentList } from "@services/org/getOrgList";

// sample url call this api:
//

export default async function handler(req, res) {
  // TODO 11/16 make sure UK can be passed down
  // console.log("🍅 >>>>>>>>>>>>>> DEBUG:", req.getHeader("UK"));

  const TK = preRequest();
  const apiName = req.url.split("?url=").at(-1);
  const basicOptions = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `basic ${TK}`,
      TK: TK
    }
  };
  const options =
    req.method === "GET" ? basicOptions : { ...basicOptions, body: req.body };

  try {
    const response = await fetch(API_Path[apiName], options);
    const data = await response.json();
    const resault = Response.json({ data });

    if (response.status !== 200) {
      const errMsg = "Failed to fetch data";
      const errLog = getErrLog(req, response);
      throw new Error(errMsg, { cause: errLog });
    }

    // TODO return result when backend API is available
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
