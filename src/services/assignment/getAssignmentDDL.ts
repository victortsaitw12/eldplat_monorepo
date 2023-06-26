export const getAssignBusDDL = async (bus_group?: string) => {
  const res = await fetch(
    `https://localhost:7088/ANV/AssignmentByManual_GetBusDDL?bus_group=${bus_group}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};

export const getAssignDriverDDL = async (bus_group?: string) => {
  const res = await fetch(
    `https://localhost:7088/ANV/AssignmentByManual_GetDriverDDL?bus_group=${bus_group}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};
