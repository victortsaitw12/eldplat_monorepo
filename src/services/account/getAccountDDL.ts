import { I_KeyValue } from "./getOneAccount";
import { DUMMY_ORG_LIST } from "@services/account/getOneAccount";
export const getDDL = async (uk: string, reqBody: I_ReqBody) => {
  // return DUMMY_DATA;

  const apiName = "getOneAccount";
  const reqMethod = "POST";
  const reqHeaders = { UK: uk };
  const requestBody = reqBody;

  const res = await fetch(`/api/getData?url=${apiName}`, {
    method: reqMethod,
    headers: reqHeaders,
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data;
};

// ------- TYPING ------- //
export interface I_ResBody {
  StatusCode: string;
  Message: string;
  ResultList: I_AccountDDLItem[];
  Result: boolean;
  ResultString: string;
  ResultInt: number;
}

export interface I_ReqBody {
  service: string; //placeholder
  creorgno: string;
}

export interface I_AccountDDLItem {
  org_no: I_KeyValue[];
}

// ------- MOCK DATA ------- //
export const DUMMY_ACC_DDL = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  ResultList: [
    {
      org_no: Array.from(DUMMY_ORG_LIST, ([key, value]) => {
        return { value: key, label: value };
      })
    }
  ],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};
