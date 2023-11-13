import API_Path from "./apiPath";

export const updateOrg = async () => {
  return true;

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

export interface I_EditOrgReq {
  org_no: string;
  org_name: string;
  org_enb: boolean;
}
