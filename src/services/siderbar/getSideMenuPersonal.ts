// import API_Path from "./apiPath";
export const getSideMenuPersonal = async () => {
  const res = await fetch(
    // API_Path.GetSideMenuPersonal,
    "/api/getsidemenupersonal"
    // ,
    // {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    //   }
    // }
  );
  return res.json();
};
