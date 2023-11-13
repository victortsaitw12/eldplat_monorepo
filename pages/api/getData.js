import API_Path from "@services/org/apiPath";
import { preRequest } from "@utils/preRequest";
import { ContentList } from "@services/org/getOrgList";

export default async function handler(req, res) {
  const TK = preRequest();
  const apiName = req.url.split("?url=").at(-1);
  const options = {
    method: req.method,
    headers: {
      // ...req.headers,
      "Content-Type": "application/json",
      Authorization: `basic ${TK}`,
      TK: TK
    },
    body: req.body
  };

  try {
    const response = await fetch(API_Path[apiName], options);
    const ressult = await response.json();
    console.log("🍅 >>>>>>>>>>>>>> DEBUG :", ressult);

    // const debugMsg = getDebugMsg(response);
    // throw new Error(result.msg);

    res.status(200).json({ data: ContentList });
  } catch (err) {
    res.status(500).send({ error: "failed to fetch dataaaaa" });
  }
}

const getDebugMsg = (res) => {
  const debugMsg = {
    statusCode: res.status,
    apiUrl: res.url,
    reqHeadeer: res.headers
  };
  return debugMsg;
};
