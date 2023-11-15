import API_Path from "./apiPath";

export const updateOrg = async (userId: string) => {
  return DUMMY_DATA;

  const requestBody = {};
  const res = await fetch("/api/getData?url=getOrgList", {
    method: "POST",
    headers: {
      UK: userId
    },
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data;
};

// ------- typing ------- //

export interface I_EditOrgReq {
  org_no: string;
  org_name: string;
  org_enb: boolean;
}

const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "用戶端要求成功",
  ResultInt: 0
};
