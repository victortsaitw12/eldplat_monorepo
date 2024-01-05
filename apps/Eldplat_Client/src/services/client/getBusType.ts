import API_Path from "./apiPath";
export async function getBusType() {
  const url = new URL(API_Path["getBusType"]);
  const res = await fetch(url.href, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  });
  const result = await res.json();
  return result["dataList"];
}
