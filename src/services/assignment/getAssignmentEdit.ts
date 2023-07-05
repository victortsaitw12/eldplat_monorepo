import API_Path from "./apiPath";

export const getBusAssignmentInfo = async (assignment_no: string) => {
  const res = await fetch(
    `${API_Path["GetBusAssignInfo"]}?assignment_no=${assignment_no}`,
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
    `${API_Path["GetDriverAssignInfo"]}?assignment_no=${assignment_no}`,
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
