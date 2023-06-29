export const getBusAssignmentInfo = async (assignment_no: string) => {
  const res = await fetch(
    `https://localhost:7088/ANV/Assignment_GetBusInfo?assignment_no=${assignment_no}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );

  return res.json();
};

export const getDriverAssignmentInfo = async (assignment_no: string) => {
  const res = await fetch(
    `https://localhost:7088/ANV/Assignment_GetDriverInfo?assignment_no=${assignment_no}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );

  return res.json();
};
