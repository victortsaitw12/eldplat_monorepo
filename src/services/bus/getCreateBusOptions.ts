import API_Path from "./apiPath";
export const getCreateBusOptions = async (dsph_group?: string) => {

  const url = new URL(
    `${API_Path["getCreateBusOptions"]}${
      dsph_group ? "?dsph_group=" + dsph_group : ""
    }`
  );
  
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
