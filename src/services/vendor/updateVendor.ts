import API_Path from "./apiPath";
// 更新供應商資料
export const updateVendor = async (
    vendor_No: string,
    vendorData: any
) => {
    // handle vendor_Contact_List
    for (let i = 0; i < vendorData.vendor_Contact_List.length; i++) {
        if (i !== 0) {
            vendorData.vendor_Contact_List[i]["contact_sort"] = "2";
        } else {
            vendorData.vendor_Contact_List[i]["contact_sort"] = "1";
        }
    }
    const filteredNullData: { [key: string]: string | null } = {};
    for (const key in vendorData) {
        if (vendorData[key] !== null) {
            if (typeof vendorData[key] == "string" && vendorData[key].trim() !== "") {
                filteredNullData[key] = vendorData[key];
            } else {
                filteredNullData[key] = vendorData[key];
            }
        }
    }
    filteredNullData["vendor_No"] = vendor_No;
    const res = await fetch(
        API_Path["UpdateVendor"],
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAyMDIwMDAxIiwiTmFtZSI6Iua4rOippuW4s-iZnyIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi566h55CG5ZOhIiwiZXhwIjoxNjg1MDA0OTEzLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.WTz2erASC-m1Q2CXyGd6L4seUiei5mlxCbWzekdfx3M"
            },
            body: JSON.stringify(filteredNullData)
        }
    );
    return res.json();
};
