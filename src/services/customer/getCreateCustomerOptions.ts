import API_Path from "./apiPath";
export const getCreateCustomerOptions = async () => {
  //
  const url = new URL(API_Path["getOneDDL"]);
  //
  async function getCustomerOptions() {
    const res = await fetch(url.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
      },
      body: JSON.stringify({
        ddl_column: "customer_typ",
        ddl_type: "customer"
      })
    });
    const data = await res.json();
    return {
      optionName: "customer_typ",
      options: data.dataList
    };
  }
  // use promise.all to async fecth together
  const optionsMap: { [key: string]: any } = {};
  await Promise.all([getCustomerOptions()]).then((responses) =>
    responses.map((response) => {
      optionsMap[response.optionName] = response.options;
    })
  );
  return optionsMap;
};
