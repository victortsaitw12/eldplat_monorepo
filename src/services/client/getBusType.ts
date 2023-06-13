export async function getBusType() {
  const res = await fetch("https://localhost:7088/CAR/GetBusType", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  const result = await res.json();
  return result["dataList"];
}
