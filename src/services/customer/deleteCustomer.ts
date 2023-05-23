export const deleteCustomer = async (customer_No: string): Promise<void> => {
  console.log("customer_No", customer_No);
  try {
    const response = await fetch(
      `https://localhost:7088/CTR/DeleteCustomer/${customer_No}`,
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
