import API_Path from "./apiPath";
export const getSideMenuBackend = async () => {
  const res = await fetch(API_Path.GetSideMenuBackend, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  return res.json();
};
