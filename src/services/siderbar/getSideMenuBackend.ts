// import API_Path from "./apiPath";
export const getSideMenuBackend = async () => {
  const res = await fetch("/api/getsidemenubackend", {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res.json();
};
