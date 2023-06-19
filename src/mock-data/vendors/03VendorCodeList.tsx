//供應商分類列表
export const vedor_code_text: { [key: string]: string } = {
    "01": "外部車隊",
    "02": "設備庫存",
    "03": "維修廠",
    "04": "保險",
    "05": "燃料",
    "06": "其他",
    "07": "Etag",
};
//供應商分類列表（中文部分）
export const vendor_code_list = [
    {
        vendor_code: "01",
        vendor_code_name: "外部車隊"
    },
    {
        vendor_code: "02",
        vendor_code_name: "設備庫存"
    },
    {
        vendor_code: "03",
        vendor_code_name: "維修廠"
    },
    {
        vendor_code: "04",
        vendor_code_name: "保險"
    },
    {
        vendor_code: "05",
        vendor_code_name: "燃料"
    },
    {
        vendor_code: "06",
        vendor_code_name: "其他"
    },
    {
        vendor_code: "07",
        vendor_code_name: "Etag"
    }
]
//
export const vendor_label_option = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
];