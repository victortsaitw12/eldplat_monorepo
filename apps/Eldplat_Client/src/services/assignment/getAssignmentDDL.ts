import API_Path from "./apiPath";

export const getAssignBusDDL = async (bus_group?: string) => {
  const res = await fetch(
    `${API_Path["GetAssignBusDDL"]}?bus_group=${bus_group}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};

export const getAssignDriverDDL = async (bus_group?: string) => {
  const res = await fetch(
    `${API_Path["GetAssignDriverDDL"]}?bus_group=${bus_group}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    }
  );
  return res.json();
};

export const getAssignDateDDL = async (
  departure_date: string,
  return_date: string
) => {
  const requestBody = {
    departure_date: departure_date,
    return_date: return_date
  };
  const res = await fetch(`${API_Path["GetAssignDateDDL"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(requestBody)
  });
  return res.json();
};

export const getDayDriverNameDDL = async (
  quote_no: string,
  order_date: string,
  bus_group?: string
) => {
  const requestBody = {
    quote_no: quote_no,
    order_date: order_date,
    bus_group: bus_group
  };
  const res = await fetch(`${API_Path["GetDayDriverNameDDL"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(requestBody)
  });
  return res.json();
};

export const getDayBusNameDDL = async (
  quote_no: string,
  order_date: string,
  bus_group?: string
) => {
  const requestBody = {
    quote_no: quote_no,
    order_date: order_date,
    bus_group: bus_group
  };
  const res = await fetch(`${API_Path["GetDayBusNameDDL"]}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
    },
    body: JSON.stringify(requestBody)
  });
  return res.json();
};
