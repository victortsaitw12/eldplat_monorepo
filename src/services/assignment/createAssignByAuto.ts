import API_Path from "./apiPath";

export const createAssignmentByAuto = async (assignmentData: any) => {
  const res = await fetch(API_Path["CreateAssignmentByAuto"], {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(assignmentData)
  });
  return res.json();
};
