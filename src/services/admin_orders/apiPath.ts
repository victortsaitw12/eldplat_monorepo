const path = {
    dev: {
        GetVendor: "https://localhost:7088/VNR/GetVendorList",//查詢供應商（多筆資料）
        CreateVendor: "https://localhost:7088/VNR/CreateVendor", //新增供應商
        GetOneVendor: "https://localhost:7088/VNR/GetVendorUpdateInfo?vendor_no=", //查詢供應商（單筆）
        UpdateVendor: "https://localhost:7088/VNR/UpdateVendor", //修改供應商
        DeleteVendor: "https://localhost:7088/VNR/DeleteVendor", //刪除供應商
    },
    prod: {
        GetVendor: "https://localhost:7088/VNR/GetVendorList",//查詢供應商（多筆資料）
        CreateVendor: "https://localhost:7088/VNR/CreateVendor", //新增供應商
        GetOneVendor: "https://localhost:7088/VNR/GetVendorUpdateInfo?vendor_no=", //查詢供應商（單筆）
        UpdateVendor: "https://localhost:7088/VNR/UpdateVendor", //修改供應商
        DeleteVendor: "https://localhost:7088/VNR/DeleteVendor", //刪除供應商
    }
}
const API_Path = path["dev"];
export default API_Path;