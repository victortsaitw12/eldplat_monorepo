export const updateEmployee = async (user_No: string, userData: any) => {
  const filteredNullData: { [key: string]: string | null } = {};
  console.log("userData", userData);
  for (const key in userData) {
    filteredNullData[key] = userData[key];
  }
  filteredNullData["user_No"] = user_No;
  console.log("filteredNullData", filteredNullData);
  const res = await fetch(
    `https://localhost:7088/ATR/UpdateAccount/api/UpdateAccount/1?user_no=${user_No}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzA0MTIwMDAxIiwiTmFtZSI6IlNob2hlaSIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi6Kq_5bqm576k57WEIiwiZXhwIjoxNjg0NDg5MjczLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.BbFT4yOL9o_sieeujOJnrw-e-kns8GPFWC0R32eh3Ok"
      },
      body: JSON.stringify(filteredNullData)
    }
  );
  return res.json();
};