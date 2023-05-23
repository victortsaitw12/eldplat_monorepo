export const deleteBus = async (bus_No: string): Promise<void> => {
  console.log("bus_No", bus_No);
  try {
    const response = await fetch(
      `https://localhost:7088/CAR/DeleteBus/${bus_No}`,
      {
        method: "POST",
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