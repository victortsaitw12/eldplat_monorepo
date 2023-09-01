import API_Path from "@services/siderbar/apiPath";

export default async function handler(req, res) {
  try {
    const result = await fetch(
      API_Path.GetSideMenuBackend,
      // "http://uvehicle-api.eldplat.com/COM/api/DownStream/GetSideMenuBackend",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
        }
      }
    );
    const data = await result.json();
    res.status(200).json({ ...data });
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
