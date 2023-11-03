import API_Path from "./apiPath";

export const getUser = async () => {
  console.log("called");
  return DUMMY_DATA;

  //   const res = await fetch(`${API_Path["getOrg"]}?driver_no=${id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //     }
  //   });
  //   return await res.json();
};

// ------- MOCK DATA ------- //
export const DUMMY_DATA = {
  userData: {
    userID: "o-001",
    name: "王鈞樺 V2",
    role: "最高管理員 V2",
    username: "王鈞樺 V2",
    email: "atrain@example.com"
  },
  authData: [
    { org: { org_no: "1234", org_name: "Liontravel" } },
    { elems: { elem_id: "btn", elem_stat: "hide" } }
  ]
};
