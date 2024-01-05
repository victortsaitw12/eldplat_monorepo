import API_Path from "./apiPath";

export const getGroupsList = async () => {
  const response = await fetch(API_Path["getGroupsList"], {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  const data = await response.json();
  return data;
};
