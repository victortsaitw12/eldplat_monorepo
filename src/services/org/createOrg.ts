import API_Path from "./apiPath";
import { useSession } from "next-auth/react";

export const createOrg = async ({ userID, data }: I_CreateOrgReq) => {
  return DUMMY_DATA;

  const { data: session } = useSession();
  const requestBody = {};
  const res = await fetch("/api/getData?url=getOrgList", {
    method: "POST",
    headers: {
      UK: userID
    },
    body: JSON.stringify(requestBody)
  });
  const result = await res.json();
  return result.data;
};

// ------- typing ------- //
export interface I_CreateOrgReq {
  org_no: string;
  org_name: string;
  org_tp: string;
  org_lvl: number;
}

const DUMMY_DATA = {
  StatusCode: "200",
  Message: "用戶端要求成功",
  DataList: [],
  Result: true,
  ResultString: "用戶端要求成功",
  ResultInt: 0
};
