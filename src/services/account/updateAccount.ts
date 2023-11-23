export const updateAccount = async (uk: string, data: I_requestBody) => {
  return DUMMY_DATA.DataList;

  const apiName = "CreateAccount";
  const reqMethod = "POST";
  const reqHeaders = { UK: uk };
  const requestBody = data;

  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data.ContentList;
};

// ------- MOCK DATA ------- //
const DUMMY_DATA: I_responseBody = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};

// ------- TYPING ------- //
export interface I_responseBody {
  StatusCode: string;
  Message: string;
  DataList: any[];
  Result: true;
  ResultString: string;
  ResultInt: number;
}
export interface I_requestBody {
  account_fname: string;
  account_lname: string;
  org_no: string;
  creorgno: string;
  content_phone_tel_country_code1: string;
  content_phone_tel1: string;
  content_priv_email: string;
  account_role: string[];
}
