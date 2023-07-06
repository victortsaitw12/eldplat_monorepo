import API_Path from "./apiPath";

export const deleteEmployee = async (user_no: string): Promise<void> => {
  console.log("user_no", user_no);
  try {
    const response = await fetch(
      `${API_Path["DeleteEmployee"]}?user_no=${user_no}`,
      {
        method: "POST",
        body: JSON.stringify({
          user_no: user_no
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
      }
    );
    const data = await response.json();
    if (data.result === true) {
      console.log("Delete success!");
    }
  } catch (err) {
    console.log(err);
  }
};
