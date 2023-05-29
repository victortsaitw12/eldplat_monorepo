export const updateEmployee = async (user_No: string, userData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  console.log("❗userData", userData);
  for (const key in userData) {
    filteredNullData[key] = userData[key];
  }
  filteredNullData["user_No"] = user_No;
  console.log("filteredNullData", filteredNullData);
  const res = await fetch(
    `https://localhost:7088/ATR/UpdateAccount?user_no=${user_No}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      },
      body: JSON.stringify(filteredNullData)
    }
  );
  return res.json();
};
