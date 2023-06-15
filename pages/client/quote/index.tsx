import { BodySTY } from "./style";
import Flow from "@components/Flow";
import ServerEntry from "@components/ServiceEntry";
import { useRouter } from "next/router";
const FlowListData = [
  {
    imageUrl: "/icons/Document.svg",
    label: "填寫詢價單"
  },
  {
    imageUrl: "/icons/Reply.svg",
    label: "回復報價"
  },
  {
    imageUrl: "/icons/Car.svg",
    label: "確認訂單"
  },
  {
    imageUrl: "/icons/Wallet.svg",
    label: "繳款確認"
  },
  {
    imageUrl: "/icons/Reminder.svg",
    label: "行前提醒"
  }
];
const Page = () => {
  const router = useRouter();
  return (
    <BodySTY>
      <div className="header">
        <div className="header-container">
          <div className="header-title">訂車流程</div>
          <Flow dataLists={FlowListData} />
        </div>
      </div>
      <div className="content-container">
        <div className="content-title">請選擇你想要的服務：</div>
        <div className="content-entry">
          <ServerEntry
            label="客製包車"
            imageUrl="/icons/Custom-bus-pickup.svg"
            onClick={() => {
              router.push({
                pathname: "/client/quote/confirm",
                query: {
                  type: "custom"
                }
              });
            }}
          />
          <ServerEntry
            label="機場接送"
            imageUrl="/icons/Airport-pickup.svg"
            onClick={() => {
              router.push({
                pathname: "/client/quote/confirm",
                query: {
                  type: "airport"
                }
              });
            }}
          />
        </div>
      </div>
    </BodySTY>
  );
};
export default Page;
