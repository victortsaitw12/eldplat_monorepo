const domain = {
    dev: "https://localhost:7088",
    prod: "https://localhost:7088",
}

const path = {
    dev: {
        GetVendor: domain["dev"] + "/VNR/GetVendorList",//查詢供應商（多筆資料）
        CreateVendor: domain["dev"] + "/VNR/CreateVendor", //新增供應商
        GetOneVendor: domain["dev"] + "/VNR/GetVendorUpdateInfo?vendor_no=", //查詢供應商（單筆）
        UpdateVendor: domain["dev"] + "/VNR/UpdateVendor", //修改供應商
        DeleteVendor: domain["dev"] + "/VNR/DeleteVendor", //刪除供應商
    },
    prod: {
        GetVendor: domain["dev"] + "/VNR/GetVendorList",//查詢供應商（多筆資料）
        CreateVendor: domain["dev"] + "/VNR/CreateVendor", //新增供應商
        GetOneVendor: domain["dev"] + "/VNR/GetVendorUpdateInfo?vendor_no=", //查詢供應商（單筆）
        UpdateVendor: domain["dev"] + "/VNR/UpdateVendor", //修改供應商
        DeleteVendor: domain["dev"] + "/VNR/DeleteVendor", //刪除供應商
    }
}
const API_Path = path["dev"];
export default API_Path;