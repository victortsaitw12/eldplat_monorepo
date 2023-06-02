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

const mock_progressdata: Array<{
    label: string;
    status: "ok" | "pending" | "error";
    date?: string;
}> = [
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

const order_sepcial = [
    {
        title: "舉牌：Andy Welcome",
        value: "NT$200"
    },
    {
        title: "司導",
        value: "NT$200"
    },
    {
        title: "指定車齡 3年",
        value: "NT$1,000"
    },
    {
        title: "兒童座椅 由店家提供 1",
        value: "免費"
    },
    {
        title: "兒童座椅 自備 1",
        value: "免費"
    },
    {
        title: "嬰兒座椅 自備 1",
        value: "免費"
    }
]

const order_shuttleList = [
    {
        date: "2023-06-01",
    },
    {
        date: "2023-06-02",
    },
    {
        date: "2023-06-03",
    },
    {
        date: "2023-06-04",
    },
]

const order_flight = [
    {
        title: "航班日期",
        value: "2023-05-05"
    },
    {
        title: "航班編號",
        value: "C123"
    },
    {
        title: "機場",
        value: "桃園國際機場"
    },
    {
        title: "航廈",
        value: "第二航廈"
    },
    {
        title: "航班抵達時間",
        value: "10:30"
    },
    {
        title: "航空公司",
        value: "樂桃"
    },
]
export {
    data,
    mock_subFilter,
    mock_adminOrdersList,
    mock_orderData,
    mock_progressdata,
    order_contact,
    order_represent,
    order_shuttleList,
    order_sepcial,
    order_flight
};