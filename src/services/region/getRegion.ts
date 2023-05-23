export const getAllRegions = async (area_no: string, level_num: string) => {
  const res = await fetch("https://localhost:7088/COM/GetAreaDDL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAyMDIwMDAyIiwiTmFtZSI6IuWwj-Wuoui7iiIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi5bCP5a6i6LuK6aeV6aeb576kIiwiZXhwIjoxNjg2NTUzNTQzLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.mbBwUGUwANCCcfiyND5drSJd-NBrDa6JPJ5KEyhlCeE"
    },
    body: JSON.stringify({
      area_No: area_no,
      level_Num: level_num,
      default_Needed: true
    })
  });
  return res.json();
};
