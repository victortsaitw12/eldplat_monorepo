import React from "react";
import { Pane, Dialog, Paragraph, toaster } from "evergreen-ui";
import { DivSTY } from "./style";

import Table from "@components/Table/Table";
import PrimaryRadiusBtn from "@components/Button/PrimaryRadius";
import SecondaryRadiusBtn from "@components/Button/SecondaryRadius";

import { updatePayment } from "@services/client/updatePayment";
import { getQuotation, I_OrderDetail } from "@services/client/getQuotation";
import { I_Order } from "@services/client/getOrdersList";

const PaymentBtn = ({
  data,
  setData
}: {
  data: I_OrderDetail | I_Order;
  setData: (data: any) => void;
}) => {
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false);

  const handleRefetch = async () => {
    try {
      const res = await getQuotation(data.quote_no);
      setData(res);
    } catch (e) {
      console.log("更新訂單失敗:", e);
    }
  };

  const handleTakeQuote = React.useCallback(async () => {
    //接後端API更改status_qode = '5'
    const status_code = "5";
    try {
      const res = await updatePayment(status_code, data.quote_no);
      toaster.success("接受報價", {
        description: res.resultString,
        duration: 2,
        hasCloseButton: true
      });
      setTimeout(() => setIsLightBoxOpen(false), 100);
    } catch (e) {
      console.log("接受報價失敗");
    } finally {
      handleRefetch();
    }
  }, [data]);

  const handlePayment = async (status_code: string) => {
    console.log("called");
    try {
      //接後端串金流API ->後端確認支付 -> 後端更改status_qode = '6' 已付全額 ('7'已付訂金 '8'已付尾款)
      if (status_code === "6") {
        //已付全額
        const res = await updatePayment(status_code, data.quote_no);
        toaster.success("付款完成", {
          description: res.resultString,
          duration: 2,
          hasCloseButton: true
        });
      }
      if (status_code === "7") {
        //已付訂金
        const res = await updatePayment(status_code, data.quote_no);
        toaster.success("訂金付款完成", {
          description: res.resultString,
          duration: 2,
          hasCloseButton: true
        });
      }
      if (status_code === "8") {
        //已付尾款
        const res = await updatePayment(status_code, data.quote_no);
        toaster.success("尾款付款完成", {
          description: res.resultString,
          duration: 2,
          hasCloseButton: true
        });
      }
    } catch (e: any) {
      console.log("somehting's wrong:", e.message);
    } finally {
      handleRefetch();
    }
  };

  const renderBtn = (statusList: any[]) => {
    // 1: {name: '收到報價', status: 'ok', date: '06/20/2023 00:00:00'}
    // render 接受報價
    if (statusList[1].status === "ok" && statusList[2].status === "pending")
      return (
        <PrimaryRadiusBtn
          appearance="primary"
          onClick={() => setIsLightBoxOpen(true)}
        >
          接受報價
        </PrimaryRadiusBtn>
      );

    // 2: {name: '接受報價', status: 'ok', date: '06/20/2023 00:00:00'}
    // isPayInFull ?付款(全額):付款(訂金/全額)
    if (statusList[2].status === "ok" && statusList[3].status === "pending") {
      if (data.checkdeposit)
        return (
          <PrimaryRadiusBtn
            appearance="primary"
            onClick={handlePayment.bind(null, "8")}
          >
            支付尾款
          </PrimaryRadiusBtn>
        );
      return data.isfullpay ? (
        <PrimaryRadiusBtn
          appearance="primary"
          onClick={handlePayment.bind(null, "6")}
        >
          支付全額
        </PrimaryRadiusBtn>
      ) : (
        <div className="paymentBtns">
          <SecondaryRadiusBtn
            appearance="secondary"
            onClick={handlePayment.bind(null, "7")}
          >
            支付訂金
          </SecondaryRadiusBtn>
          <PrimaryRadiusBtn
            appearance="primary"
            onClick={handlePayment.bind(null, "6")}
          >
            支付全額
          </PrimaryRadiusBtn>
        </div>
      );
    }
  };

  return (
    <>
      {
        <DivSTY className="paymentBtn" onClick={(e: any) => e.preventDefault()}>
          {renderBtn(data.status_list)}
        </DivSTY>
      }
      {isLightBoxOpen && (
        <Pane>
          <Dialog
            isShown={isLightBoxOpen}
            title="確認接受此報價嗎?"
            onConfirm={handleTakeQuote}
            onCloseComplete={() => setIsLightBoxOpen(false)}
            cancelLabel="取消"
            confirmLabel="確認"
          >
            {({}) => (
              <Pane>
                <Paragraph style={{ lineHeight: "32px" }}>
                  接受報價後，此筆訂單即可繳款。
                  <br />
                  報價詳情：
                </Paragraph>

                <Table
                  titles={["訂單編號", "總金額"]}
                  data={[
                    {
                      id: data.quote_no,
                      quote_no: data.quote_no,
                      quote_total_amount: `NT$${data.quote_total_amount.toLocaleString()}`
                    }
                  ]}
                />
              </Pane>
            )}
          </Dialog>
        </Pane>
      )}
    </>
  );
};

export default PaymentBtn;
