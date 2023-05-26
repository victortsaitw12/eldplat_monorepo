export const deleteDriver = async (id: string): Promise<void> => {
  console.log("id:", id);
  try {
    const response = await fetch(
      `https://localhost:7088/ATR/DeleteDriver?driverNo=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
        }
      }
    );
    const data = await response.json();
    if (data.result === true) {
      console.log("SUCCESS:", id);
    }
  } catch (err) {
    console.log("ERR:", err);
  }
};
