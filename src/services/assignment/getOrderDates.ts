export const getOrderDates = async (
  departure_date: string,
  return_date: string
) => {
  const res = await fetch(
    "https://localhost:7088/ANV/ReplaceAssignment_OrderDateDDL",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      },
      body: JSON.stringify({
        departure_date,
        return_date
      })
    }
  );
  return res.json();
};
