import Link from "next/link";

// 駕駛資訊頁
export const DETAIL_TITLE = "駕駛履歷";

export const DETAIL_BASIC = {
  姓名: "王鈞樺",
  EMAIL: "test@liontravel.com",
  手機: "0912-345-678"
};

export const DETAIL_RESUME_DATA = {
  加入日期: "2022/12/01",
  使用者編號: "USR202303150001",
  駕駛編號: "DRI202303230015",
  駕照號碼: "L123456789",
  駕駛國家: "臺灣",
  牌照等級: "大客車駕照",
  駕駛資歷: "8",
  派遣區域: "臺灣",
  派遣都市: "臺北",
  黑名單註記: "",
  備註: "",
  使用者狀態: "活躍",
  修改時間: "2023/01/01"
};

// 歷史紀錄頁
export const HISTORY_TITLE = ["異動日期", "異動項目", "編輯者", "備註"];

export const HISTORY_DATA = [
  {
    id: "1",
    alter_date: "2022/01/01",
    異動項目: (
      <>
        <Link
          href={{
            pathname: "/driver/create/[id]",
            query: { id: "123" }
          }}
        >
          駕駛履歷
        </Link>
        <span>{" , "}</span>
        <Link
          href={{
            pathname: "/driver/create/[id]",
            query: { id: "123" }
          }}
        >
          駕駛證照
        </Link>
        <span>{" , "}</span>
        <Link
          href={{
            pathname: "/driver/create/[id]",
            query: { id: "123" }
          }}
        >
          語言能力
        </Link>
      </>
    ),
    編輯者: "王鈞樺",
    備註: ""
  },
  {
    id: "0",
    alter_date: "2020/12/01",
    異動項目: (
      <Link
        href={{
          pathname: "/driver/create/[id]",
          query: { id: "123" }
        }}
      >
        駕駛履歷
      </Link>
    ),
    編輯者: "張晶晶",
    備註: "新增駕駛"
  }
];
