import API_Path from "./apiPath";

export const updateMaintenance = async (MaintenanceData: any) => {
  // for (const key in MaintenanceData) {
  //   if (MaintenanceData[key] === "") {
  //     delete MaintenanceData[key];
  //   }
  // }

  //
  const res = await fetch(API_Path["UpdateMaintenance"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(MaintenanceData)
  });
  const result = await res.json();
  return result;
};

export const CloseAssignment = async (
  maintenance_quote_no: string,
  status: string
) => {
  const res = await fetch(
    `${API_Path["AssignmentClose"]}?maintenance_quote_no=${maintenance_quote_no}&status=${status}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};
