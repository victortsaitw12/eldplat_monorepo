import API_Path from "@services/org/apiPath";
import { ContentList } from "@services/org/getOrgList";

// TODO MONDAY
export default async function handler(req, res) {
  const apiName = req.url.split("?url=").at(-1);
  console.log("🍅 >>>>>>>>>>>>>> req :", req.url);
  console.log("🍅 >>>>>>>>>>>>>> API_Path :", API_Path[apiName]);

  try {
    const response = await fetch(API_Path[apiName], {
      method: "POST",
      headers: req.headers,
      body: req.body,
      ...req
    });
    console.log("🍅 >>>>>>>>>>>>>> response :", response.url);

    // console.log("🍅🍅🍅 >>>>>>>>>>>>>>reponse:", response);
    // const ressult = await response.json();
    // console.log("🍅🍅🍅 >>>>>>>>>>>>>>ressult:", ressult);
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
