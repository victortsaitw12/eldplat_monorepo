// import API_Path from "./apiPath";
export const getSideMenuBackend = async () => {
  const res = await fetch("/api/getsidemenubackend");
  return res.json();
};
