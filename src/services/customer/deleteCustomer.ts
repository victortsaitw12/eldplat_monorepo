import API_Path from "./apiPath";
export const deleteCustomer = async (customer_No: string): Promise<void> => {
  const url = new URL(API_Path["deleteCustomer"]);
  try {
    const response = await fetch(`${url.href}/${customer_No}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    });
    const data = await response.json();
    if (data.result === true) {
      console.log("Delete success!");
    }
  } catch (err) {
    console.log(err);
  }
};
