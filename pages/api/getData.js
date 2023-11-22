import API_Path from "@services/apiPath";
import { preRequest } from "@utils/preRequest";

export default async function handler(req, res) {
  const UK = req.headers.uk || null;
  const TK = await preRequest();
  const apiName = req.url.split("?url=").at(-1);
  const getOptions = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `basic ${TK}`,
      UK: UK,
      TK: TK
    }
  };
  const options =
    req.method === "GET" && req.body
      ? getOptions
      : { ...getOptions, body: req.body };

  try {
    const response = await fetch(API_Path[apiName], options);
    const result = await response.json();
    console.log("🍅 req:", req.body);

    if (
      response.status !== 200 ||
      !result.StatusCode ||
      result?.StatusCode !== "200"
    ) {
      const errMsg = result.Message;
      const errLog = await getErrLog(req, response, result);
      throw new Error(errMsg, { data: result, cause: errLog });
    }
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
    reqBody: req.body,
    url: res.url,
    resHeaders: res.headers,
    resBody: result
  };
  return errLog;
};
