import API_Path from "./apiPath";

export const getUser = async () => {
  console.log("called");
  return DUMMY_DATA.ContentList;

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
  StatusCode: "200",
  Message: "用戶端要求成功",
  ContentList: [],
  ConditionList: [],
  PageInfo: {
    Page_Index: 1,
    Page_Size: 100,
    Orderby: "org_no",
    Arrangement: "ASC",
    Total: 14,
    Last_Page: 1
  }
};
