import API_Path from "./apiPath";
export const getCreateBusOptions = async () => {
  //
  const url = new URL(API_Path["getCreateBusOptions"]);
  //
  const res = await fetch(url.href, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  const data = await res.json();
  console.log("getCreateBusOptions", data);
  return data;
};
