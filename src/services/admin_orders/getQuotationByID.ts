import API_Path from "./apiPath";
// 創建詢價/報價單
export const getQuotationByID = async (data: any) => {
    const filteredNullData: { [key: string]: string | null } = {};
    for (const key in data) {
        console.log("key", key);
        if (data[key].data !== 0) {
            filteredNullData[key] = data[key];
        } else if (data[key] !== null && data[key].trim() !== "") {
            filteredNullData[key] = data[key];
        }
    }
    //
    const res = await fetch(
        API_Path["GetQuotationByID"],
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + process.env.NEXT_PUBLIC_ACCESS_TOKEN
            },
            body: JSON.stringify(filteredNullData)
        }
    );
    return res.json();
};
