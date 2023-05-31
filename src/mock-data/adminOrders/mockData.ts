const data = {};

const mock_subFilter = [
    {
        "field_Name": "customer_name",
        "arrayConditions": [
            "like",
            "equal"
        ],
        "displayType": "search",
        "dataType": "string",
        "label": "名稱"
    },
    {
        "field_Name": "customer_no",
        "arrayConditions": [
            "like",
            "equal"
        ],
        "displayType": "fix",
        "dataType": "string",
        "label": "客戶號碼",
        "value": ""
    }
]

const mock_adminOrdersList = [
    {
        "quote_no": "ORD202302020001",
        "order_type": "客製包車",
        "contact_name": "林山水",
        "contact_phone_code": "86",
        "contact_phone": "0922999000",
        "contact_tel_code": "886",
        "contact_tel": "0299939999",
        "contact_mail": "test@gamil.com",
        "order_status": "收到詢價",
        "person_name": "許宇如",
        "label": "大官"
    },
    {
        "quote_no": "ORD202302020001",
        "order_type": "接機",
        "contact_name": "林山水",
        "contact_phone_code": "86",
        "contact_phone": "0922999000",
        "contact_tel_code": "886",
        "contact_tel": "0299939999",
        "contact_mail": "test@gamil.com",
        "order_status": "完成詢價",
        "person_name": "許宇如",
        "label": "大官"
    }
]

const mock_progressdata = [
    {
        label: "收到詢價",
        status: "ok",
        date: "2022/03/22"
    },
    {
        label: "送出報價",
        status: "pending",
    },
    {
        label: "接受報價",
        status: "pending",
    },
    {
        label: "已付訂金",
        status: "pending",
    },
    {
        label: "已付尾款",
        status: "pending",
    },
    {
        label: "完成報價",
        status: "pending",
    }
]

const mock_orderData = {
    test: "測試的資料",
};

const order_contact = [
    {
        title: "姓",
        value: "李"
    },
    {
        title: "名",
        value: "婷華"
    },
    {
        title: "手機",
        value: "+886 968-746-163"
    },
    {
        title: "電話",
        value: "+886 (06)123-4567"
    },
    {
        title: "信箱",
        value: "123456@liontravel.com"
    },
    {
        title: "通訊軟體",
        value: "Line：test12345"
    }
]

const order_represent = [
    {
        title: "姓",
        value: "李"
    },
    {
        title: "名",
        value: "婷華"
    },
    {
        title: "手機",
        value: "+886 968-746-163"
    },
    {
        title: "電話",
        value: "+886 (06)123-4567"
    },
    {
        title: "信箱",
        value: "123456@liontravel.com"
    },
    {
        title: "通訊軟體",
        value: "Line：test12345"
    },
]

export {
    data,
    mock_subFilter,
    mock_adminOrdersList,
    mock_orderData,
    mock_progressdata,
    order_contact,
    order_represent
};