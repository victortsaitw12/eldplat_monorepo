import React from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { Spinner } from "evergreen-ui";
import { BodySTY, ButtonSetSTY, LightBoxContentSTY } from "./style";

import { getLayout } from "@layout/ClientLayout";
import Breadcrumbs from "@components/Breadcrumbs";
import ConditionCard from "@components/ConditionCard";
import OrderDetail from "@contents/Orders/OrderDetail";
import { getQuotation, I_OrderDetail } from "@services/client/getQuotation";
import StatusCard from "@components/StatusCard";
import { ParsedUrlQuery } from "querystring";
import OverdueMsg from "@contents/Orders/OverdueMsg";
import PaymentBtn from "@contents/Orders/PaymentBtn";
import Quote from "@contents/Orders/Quote";
import PaymentMethod from "@contents/Orders/PaymentMethod";
import LightBox from "@components/Lightbox";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";
import CustomTextArea from "@components/CustomTextArea";
import { TextareaField } from "evergreen-ui";

const Page: NextPageWithLayout<never> = ({ quote_no }) => {
  // ----- variables, states ----- //
  const [data, setData] = React.useState<I_OrderDetail | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [modifyLightboxOpen, setModifyLightboxOpen] = React.useState(false);
  const [modifyTextareaValue, setModifyTextareaValue] = React.useState("");

  // ----- useEffect ----- //
  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getQuotation(quote_no);
        setData(res);
        console.log("res:", res);
      } catch (e) {
        console.log("載入訂單失敗:", e);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [quote_no]);

  const handleConfirmOrderModify = () => {
    setModifyLightboxOpen(false);
    setModifyTextareaValue("")
  }

  const handleUpdateTextField = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("change", e.target.value);
    setModifyTextareaValue(e.target.value);
  }

  return (
    <>
      {isLoading && (
        <StatusCard>
          <Spinner />
          <div>載入訂單資料中</div>
        </StatusCard>
      )}
      {data && (
        <Breadcrumbs
          routes={[
            { label: "首頁", url: "/client" },
            { label: "訂單管理", url: "/client/orders" },
            {
              label: `訂單編號${data.quote_no}`,
              url: `/client/orders/detail/${data.quote_no}`
            }
          ]}
        />
      )}
      <BodySTY>
        {!isLoading && data && (
          <div className="left">
            <OrderDetail orderData={data} />
            {/* <ConditionCard type="view"></ConditionCard> */}
          </div>
        )}
        {data && (
          <div className="right">
            {data.status_list.filter(
              (statusItem) => statusItem.status === "error"
            ) && <OverdueMsg data={data} />}
            {data.status_list[1].status !== "pending" &&
              data.status_list[3].status === "pending" && (
                <PaymentBtn data={data} setData={setData} />
              )}

            <Quote data={data} setData={setData} setModifyLightboxOpen={setModifyLightboxOpen} />
            {data.status_list[1].status === "ok" && (
              <PaymentMethod data={data} />
            )}
          </div>
        )}
        <LightBox
          onCancel={() => setModifyLightboxOpen(false)}
          onConfirm={handleConfirmOrderModify}
          title="修改訂單"
          isOpen={modifyLightboxOpen}
          customBtns={
            <ButtonSetSTY>
              <SecondaryBtn
                text="取消"
                onClick={() => setModifyLightboxOpen(false)}
                style={{
                  borderColor: "1px solid #B3BAC5",
                  color: "#5E6C84"
                }}
              />
              <PrimaryBtn 
                text="送出"
                onClick={handleConfirmOrderModify} 
                style={{
                  backgroundColor: "#5E6C84"
                }}
              />
            </ButtonSetSTY>
          }
        >
          <LightBoxContentSTY>
            <div>請在下方欄位輸入修改需求，後續將由業務進行處理。</div>
            <TextareaField
              value={modifyTextareaValue}
              onChange={handleUpdateTextField}
              marginTop={8}
              marginBottom={0}
              placeholder="請輸入說明"
            />
          </LightBoxContentSTY>
        </LightBox>
      </BodySTY>
    </>
  );
};
interface Props {
  quote_no: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { query, params } = context;
  const id = params?.id;
  return {
    props: {
      quote_no: id || ""
    }
  };
};

Page.getLayout = (page, layoutProps) =>
  getLayout(page, { title: "訂單管理", ...layoutProps });
export default Page;
