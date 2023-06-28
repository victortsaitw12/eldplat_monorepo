export const createAssignmentByManual = async (assignmentData: any) => {
  const res = await fetch(
    "https://localhost:7088/ANV/CreateAssignmentByManual",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      },
      body: JSON.stringify(assignmentData)
    }
  );
  return res.json();
};
