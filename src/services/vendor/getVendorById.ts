import API_Path from "./apiPath";
// 取得供應商資料(單筆)
export const getVendorById = async (vendor_No: string) => {
    const response = await fetch(
        API_Path["GetOneVendor"] + vendor_No,
        {
            method: "POST",
            // body: JSON.stringify({
            //     vendor_no: vendor_No
            // }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX05vIjoiVVNSMjAyMzAyMDIwMDAxIiwiTmFtZSI6Iua4rOippuW4s-iZnyIsIkNvbXBhbnlfTm8iOiJCSDQ5MjAyMzAyMDIwMDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi566h55CG5ZOhIiwiZXhwIjoxNjg1MDA0OTEzLCJpc3MiOiJsb2NhbGhvc3Q6NzA3NiIsImF1ZCI6ImxvY2FsaG9zdDo3MDc2In0.WTz2erASC-m1Q2CXyGd6L4seUiei5mlxCbWzekdfx3M"
            }
        }
    );
    const data = await response.json();
    return data.data;
};