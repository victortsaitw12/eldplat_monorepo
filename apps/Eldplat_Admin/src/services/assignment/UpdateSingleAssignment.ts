import API_Path from "./apiPath";

export const UpdateSingleAssignment = async (editData: any) => {
  const res = await fetch(API_Path["UpdateSingleAssignment"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(editData)
  });
  console.log("res for updating an assignment : ", res);
  return res.json();
};
