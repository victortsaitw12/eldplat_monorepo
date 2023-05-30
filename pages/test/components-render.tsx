import FlowList from "@components/Flow";
import ServerEntry from "@components/ServiceEntry";
import NavigationList from "@components/NavigationList";
import ProgressList from "@components/ProgressList";
const DummyFlowListData = [
  {
    imageUrl: "/icons/page-edit.png",
    label: "label 1"
  },
  {
    imageUrl: "/icons/page-edit.png",
    label: "label 2"
  },
  {
    imageUrl: "/icons/page-edit.png",
    label: "label 3"
  }
];

const DummyNavigationListData = [
  {
    label: "選擇日期"
  },
  {
    label: "行程資訊"
  },
  {
    label: "乘車資訊"
  },
  {
    label: "特殊需求"
  },
  {
    label: "聯絡人資料"
  },
  {
    label: "詢價完成"
  }
];

const DummyProgressListData: Array<{
  label: string;
  status: "ok" | "pending" | "error";
  date?: string;
}> = [
  {
    label: "送出詢價",
    status: "ok",
    date: "05/04 10:00"
  },
  {
    label: "收到報價",
    status: "ok",
    date: "05/04 10:00"
  },
  {
    label: "接受報價",
    status: "ok",
    date: "05/04 10:00"
  },
  {
    label: "尾款逾期",
    status: "error",
    date: "05/04 10:00"
  },
  {
    label: "訂單成立",
    status: "pending"
  },
  {
    label: "完成",
    status: "pending"
  }
];

const componentsRender = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100vw",
        border: "1px solid",
        background: "#D5E2F1"
      }}
    >
      <div
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <FlowList dataLists={DummyFlowListData} />
      </div>
      <div style={{ background: "white" }}>
        <NavigationList dataLists={DummyNavigationListData} currentStep={2} />
      </div>
      <div style={{ background: "white" }}>
        <ProgressList dataLists={DummyProgressListData} />
      </div>
      <ServerEntry
        imageUrl="/icons/page-edit.png"
        label="客製包車"
        onClick={() => {
          alert("客製包車");
        }}
      />
    </div>
  );
};

export default componentsRender;
