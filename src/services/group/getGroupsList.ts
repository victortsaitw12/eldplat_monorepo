export const getGroupsList = async () => {
  const response = await fetch("https://localhost:7088/ATR/GetGroupList", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    }
  });
  const data = await response.json();
  return data;
};
