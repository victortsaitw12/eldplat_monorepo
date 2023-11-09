import API_Path from "./apiPath";

export const createOrg = async ({ data }: I_CreateOrgReq) => {
  return DUMMY_ARR;

  //   const res = await fetch(`${API_Path["getOrg"]}?driver_no=${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //     }
  //   });
  //   return await res.json();
};

// ------- typing ------- //
export interface I_CreateOrgReq {
  org_no: string;
  org_name: string;
  org_tp: string;
  org_lvl: number;
}
