import { DUMMY_MENU } from "@services/sys/getMenu";
import { fullPreRequest } from "@utils/preRequest";

export const loginV2 = async (email: string, password: string) => {
  const token = await fullPreRequest();
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_PROD_ENDPOINT
      // process.env.NODE_ENV === "production"
      //   ? process.env.NEXT_PUBLIC_PROD_ENDPOINT
      //   : process.env.NEXT_PUBLIC_DEV_ENDPOINT
    }/sys/api/V2/Account/Login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        content_priv_email: email,
        account_pw: password
      })
    }
  );
  const result = await res.json();
  return {
    StatusCode: result.StatusCode,
    Message: result.Message,
    DataList: result.ResultList,
    Result: result.Result,
    ResultString: result.ResultString,
    ResultInt: result.ResultInt
  };
};

export const login = async (email: string, password: string) => {
  // return DUMMY_DATA;
  const apiName = "login";
  const reqMethod = "POST";
  const reqHeaders = { UK: null };
  const requestBody = {
    content_priv_email: email,
    account_pw: password
  };
  const res = await fetch(
    `${
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_PROD_ENDPOINT
        : process.env.NEXT_PUBLIC_DEV_ENDPOINT
    }/api/getData?url=${apiName}`,
    {
      method: reqMethod,
      body: JSON.stringify(requestBody)
    }
  );
  const result = await res.json();
  return result.data;
};

// response
const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [
    {
      account_no: "USR202302020002",
      account_name: "王鈞樺",
      invt_sts: "03",
      orgs: [
        {
          org_no: "o-00020101",
          org_name: "平台"
        }
      ]
    }
  ],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};

// for 2023/11/28 Demo, directly return the following data for session
export const DUMMY_USER = {
  account_no: "USR202302020002",
  account_name: "王鈞樺",
  role: "--role--",
  org_no: "o-00020101",
  menuData: DUMMY_MENU
};
