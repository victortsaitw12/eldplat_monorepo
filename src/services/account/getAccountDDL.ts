import { I_KeyValue } from "./getOneAccount";
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
      org_no: [
        {
          value: "o-01",
          label: "雄獅資訊"
        },
        {
          value: "o-0101",
          label: "多元發展部"
        },
        {
          value: "o-0102",
          label: "資通規畫部"
        },
        {
          value: "o-010101",
          label: "通運應用整合組"
        },
        {
          value: "o-010102",
          label: "電商應用整合組"
        },
        {
          value: "o-010103",
          label: "傳媒整合應用組"
        }
      ]
    }
  ],
  Result: true,
  ResultString: "BaseDomain",
  ResultInt: 0
};
