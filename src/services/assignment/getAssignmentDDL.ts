import API_Path from "./apiPath";

export const getAssignBusDDL = async (bus_group?: string) => {
  const res = await fetch(
    `${API_Path["GetAssignBusDDL"]}?bus_group=${bus_group}`,
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
    `${API_Path["GetAssignDriverDDL"]}?bus_group=${bus_group}`,
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
