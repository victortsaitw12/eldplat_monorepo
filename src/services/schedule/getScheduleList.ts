// 檢視個別駕駛所有排休
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAzMTUwMDAxIiwiTmFtZSI6Iua4rOippi3lkI01IiwiQ29tcGFueV9ObyI6IkJINDkyMDIzMDIwMjAwMDEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsi6aCQ6Kit6KeA55yL6ICFIiwi566h55CG5ZOhIl0sImV4cCI6MTY4NjQ2MjA4MiwiaXNzIjoibG9jYWxob3N0OjcwNzYiLCJhdWQiOiJsb2NhbGhvc3Q6NzA3NiJ9.5G2BGys7Wl2B6ZmoA1XZHcGtSTPg8gEVm5Dh1qoAGWg";

export const getScheduleList = async (id: any) => {
  const res = await fetch(
    `https://localhost:7188/Gateway_AccountDriver/GetDriverScheduleList?driver_no=${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );
  return await res.json();
};
