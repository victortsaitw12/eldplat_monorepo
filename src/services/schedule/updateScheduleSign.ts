// 修改簽核
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAzMTUwMDAxIiwiTmFtZSI6Iua4rOippi3lkI01IiwiQ29tcGFueV9ObyI6IkJINDkyMDIzMDIwMjAwMDEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsi6aCQ6Kit6KeA55yL6ICFIiwi566h55CG5ZOhIl0sImV4cCI6MTY4NjQ2MjA4MiwiaXNzIjoibG9jYWxob3N0OjcwNzYiLCJhdWQiOiJsb2NhbGhvc3Q6NzA3NiJ9.5G2BGys7Wl2B6ZmoA1XZHcGtSTPg8gEVm5Dh1qoAGWg";

export const updateScheduleSign = async (data: any) => {
  console.log(JSON.stringify(data));
  const res = await fetch(
    "https://localhost:7188/Gateway_AccountDriver/UpdateScheduleSign",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }
  );
  return await res.json();
};
