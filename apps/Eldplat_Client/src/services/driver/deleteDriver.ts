import API_Path from "./apiPath";

// 停用駕駛
export const deleteDriver = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${API_Path["deleteDriver"]}?driverNo=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    });
    const data = await response.json();
    if (data.result === true) {
      console.log("SUCCESS:", id);
    }
  } catch (err) {
    console.log("ERR:", err);
  }
};
