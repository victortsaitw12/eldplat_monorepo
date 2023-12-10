import { I_KeyValue } from "./getOneAccount";

export const createAccount = async (uk: string, data: I_ReqBody) => {
  return DUMMY_DATA.DataList;

  const apiName = "CreateAccount";
  const reqMethod = "POST";
  const reqHeaders = { UK: uk };
  const requestBody = data || {
    account_fname: "ttt",
    account_lname: "est",
    org_no: "sya2",
    creorgno: "o-0001",
    content_phone_tel_country_code1: "+886",
    content_phone_tel1: "0987654321",
    content_priv_email: "test123@gmail.com",
    account_role: ["r-auth01", "r-bus01", "r-bus02"]
  };

  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data.ContentList;
};

// ------- MOCK DATA ------- //
const DUMMY_DATA: I_ResBody = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};

// ------- TYPING ------- //
export interface I_ResBody {
  StatusCode: string;
  Message: string;
  DataList: any[];
  Result: true;
  ResultString: string;
  ResultInt: number;
}
export interface I_ReqBody {
  account_fname: string;
  account_lname: string;
  org_no: string[];
  creorgno: string;
  content_phone_tel_country_code1: string;
  content_phone_tel1: string;
  content_priv_email: string;
  account_role: string[];
}
