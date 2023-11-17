import API_Path from "@services/apiPath";
import { preRequest } from "@utils/preRequest";

export default async function handler(req, res) {
  const TK = await preRequest();
  const apiName = req.url.split("?url=").at(-1);
  const getOptions = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `basic ${TK}`,
      TK: TK
    }
  };
  const options =
    req.method === "GET" ? getOptions : { ...getOptions, body: req.body };

  try {
    const response = await fetch(API_Path[apiName], options);
    const result = await response.json();

    if (
      response.status !== 200 ||
      !result.StatusCode ||
      result?.StatusCode !== "200"
    ) {
      const errMsg = result.Message;
      const errLog = getErrLog(req, response, result);
      throw new Error(errMsg, { data: result, cause: errLog });
    }

    // TODO return result when backend API is available
    res.status(200).json({ data: result });
  } catch (err) {
    res.status(500).send({
      cause: err.cause
    });
  }
}

const getErrLog = (req, res, result) => {
  const errLog = {
    time: new Date().toTimeString(),
    status: res.status,
    method: req.method,
    reqHeaders: {
      port: req.headers["origin"],
      host: req.headers["uk"]
    },
    url: res.url,
    resHeaders: res.headers,
    resBody: result
  };
  return errLog;
};
