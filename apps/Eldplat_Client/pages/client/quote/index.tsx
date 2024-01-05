import { BodySTY } from "./style";
import Flow from "@components/Flow";
import ServerEntry from "@components/ServiceEntry";
import { useRouter } from "next/router";
import { getLayout } from "@layout/ClientLayout";
import { ReactNode } from "react";
import Section from "@contents/Client/Quote/Section";
import ServiceList from "@contents/Client/Quote/ServiceList";
import NoticeMessage from "@components/NoticeMessage";
import { Pane } from "evergreen-ui";
import Breadcrumbs from "@components/Breadcrumbs";

const FlowListData = [
  {
    imageUrl: "/image/svg-icons/document.svg",
    label: "填寫詢價單"
  },
  {
    imageUrl: "/image/svg-icons/reply.svg",
    label: "回覆報價"
  },
  {
    imageUrl: "/image/svg-icons/car.svg",
    label: "確認訂單"
  },
  {
    imageUrl: "/image/svg-icons/wallet.svg",
    label: "繳款確認"
  },
  {
    imageUrl: "/image/svg-icons/reminder.svg",
    label: "行前提醒"
  }
];

const DUMMY_ServiceList = [
  {
    title: "服務一",
    value: "介紹",
  },
  {
    title: "服務二",
    value: "介紹介紹",
  },
  {
    title: "服務三",
    value: "介紹介紹介紹",
  },
]

const Page = () => {
  const router = useRouter();
  return (
    <BodySTY>
      <div className="header">
        <div className="header_container">
          <div className="header_title">服務介紹</div>
          <div className="service_wrap">
            <Section title="服務項目">
              <ServiceList listArray={DUMMY_ServiceList} />
              <Pane
                style={{ 
                  padding: "20px 0", 
                  borderTop: "1px solid #DFE1E6",
                  marginTop: "20px"
                }}
              >
                <NoticeMessage message="注意事項注意事項注意事項注意事項注意事項注意事項" />
              </Pane>
            </Section>
            <Section title="訂車流程">
              <Flow dataLists={FlowListData} />
            </Section>
          </div>
        </div>
      </div>
      <div className="content_container">
        <div className="content_title">請選擇你想要的服務：</div>
        <div className="content_entry">
        <ServerEntry
            label="機場接送"
            imageUrl="/image/svg-icons/airport-pickup2.svg"
            onClick={() => {
              router.push({
                pathname: "/client/quote/confirm",
                query: {
                  type: "airport"
                }
              });
            }}
          />
          <ServerEntry
            label="客製包車"
            imageUrl="/image/svg-icons/custom-bus-pickup2.svg"
            onClick={() => {
              router.push({
                pathname: "/client/quote/confirm",
                query: {
                  type: "custom"
                }
              });
            }}
          />
        </div>
      </div>
    </BodySTY>
  );
};

// Page.getLayout = getLayout;
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps, title: "EldPlat 前台" });
export default Page;
