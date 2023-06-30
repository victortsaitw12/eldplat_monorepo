import { BodySTY } from "./style";
import ServerEntry from "@components/ServiceEntry";
import { useRouter } from "next/router";
import { getLayout } from "@layout/ClientLayout";
import { ReactNode } from "react";
const Page = () => {
  const router = useRouter();
  return (
    <BodySTY>
      <div className="content-container">
        <div className="content-title">請選擇你想要的服務：</div>
        <div className="content-entry">
          <ServerEntry
            label="前往詢價"
            imageUrl="/image/svg-icons/document.svg"
            onClick={() => {
              router.push({
                pathname: "/client/quote"
              });
            }}
          />
          <ServerEntry
            label="查看訂單"
            imageUrl="/image/svg-icons/wallet.svg"
            onClick={() => {
              router.push({
                pathname: "/client/orders"
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
  getLayout(page, { ...layoutProps, title: "前台首頁" });
export default Page;
