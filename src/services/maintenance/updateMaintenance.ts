import API_Path from "./apiPath";

// export const updateMaintenance = async (MaintenanceData: any) => {
//   // for (const key in MaintenanceData) {
//   //   if (MaintenanceData[key] === "") {
//   //     delete MaintenanceData[key];
//   //   }
//   // }

//   //
//   const res = await fetch(API_Path["UpdateMaintenance"], {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
//     },
//     body: JSON.stringify(MaintenanceData)
//   });
//   const result = await res.json();
//   return result;
// };
export const updateMaintenance = async (MaintenanceData: any, files: any) => {
  // for (const key in MaintenanceData) {
  //   if (MaintenanceData[key] === "") {
  //     delete MaintenanceData[key];
  //   }
  // }
  const formData = new FormData();

  const newDts = MaintenanceData["maintenanceDts"].map((v: any) => {
    return {
      no: v.no,
      price: v.price,
      receipt_number: v.receipt_number,
      service_remark: v.service_remark
    };
  });
  const newMaintenanceDts = {
    maintenanceDts: newDts,
    driver_name: MaintenanceData["driver_name"],
    driver_no: MaintenanceData["driver_no"],
    maintenance_no: MaintenanceData["maintenance_no"],
    maintenance_type: MaintenanceData["maintenance_type"],
    meter: MaintenanceData["meter"],
    package_code: MaintenanceData["package_code"],
    service_start_date: MaintenanceData["service_start_date"],
    service_end_date: MaintenanceData["service_end_date"],
    vendor_no: MaintenanceData["vendor_no"]
  };
  // formData.append("MaintenanceInput", JSON.stringify(newMaintenanceDts));

  formData.append("driver_name", MaintenanceData["driver_name"]);
  formData.append("driver_no", MaintenanceData["driver_no"]);
  formData.append("maintenanceDts", JSON.stringify(newDts));
  formData.append("maintenance_no", MaintenanceData["maintenance_no"]);
  formData.append("maintenance_type", MaintenanceData["maintenance_type"]);
  formData.append("meter", MaintenanceData["meter"]);
  formData.append("package_code", MaintenanceData["package_code"]);
  formData.append("service_start_date", MaintenanceData["service_start_date"]);
  formData.append("service_end_date", MaintenanceData["service_end_date"]);
  formData.append("vendor_no", MaintenanceData["vendor_no"]);

  const newFiles = files.map((v: any) => {
    return {
      name: v.name,
      lastModified: v.lastModified,
      lastModifiedDate: v.lastModifiedDate,
      type: v.type,
      webkitRelativePath: v.webkitRelativePath
    };
  });
  // formData.append("files", JSON.stringify(newFiles));
  files.forEach((file: any) => {
    formData.append("files", file);
  });

  // files.forEach((item: any, index: any) => {
  //   formData.append(`items[${index}].name`, item.name);
  //   formData.append(`items[${index}].lastModified`, item.lastModified);
  //   formData.append(`items[${index}].lastModifiedDate`, item.lastModifiedDate);
  //   formData.append(`items[${index}].type`, item.type);
  //   formData.append(
  //     `items[${index}].webkitRelativePath`,
  //     item.webkitRelativePath
  //   );
  // });
  // formData.append("name", files[0].name);
  // formData.append("lastModified", files[0].lastModified);
  // formData.append("lastModifiedDate", files[0].lastModifiedDate);
  // formData.append("type", files[0].type);
  // formData.append("webkitRelativePath", files[0].webkitRelativePath);

  // console.log("🎅formData", formData.get("maintenanceInput"));
  console.log("🤐formData", formData);

  //
  const res = await fetch(API_Path["UpdateMaintenance"], {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    // body: JSON.stringify(MaintenanceData)
    // body:  formData
    body: formData
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
