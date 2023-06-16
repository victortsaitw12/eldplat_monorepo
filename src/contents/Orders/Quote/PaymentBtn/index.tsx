import React from "react";
import { Pane, InlineAlert, Dialog, Paragraph, toaster } from "evergreen-ui";
import { DivSTY } from "./style";

import Table from "@components/Table/Table";
import PrimaryRadiusBtn from "@components/Button/PrimaryRadius";
import { updateStatus } from "@services/client/updateStatus";
import { I_OrderDetail } from "@services/client/getQuotation";

const PaymentBtn = ({ data }: { data: I_OrderDetail }) => {
  const [isPayInFull, setIsPayInFull] = React.useState(true);
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false);

  const handleTakeQuote = React.useCallback(async () => {
    //接後端API更改status_qode = '5'
    const status_code = "5";
    const res = await updateStatus(status_code, data.quote_no);
    console.log("確認接受報價");
    setTimeout(() => setIsLightBoxOpen(false), 1000);

    toaster.success("接受報價", {
      description: `訂單 ${data.quote_no} 確認總金額 ${data.quote_total_amount}，請於繳費期限內付款，完成訂車作業。`,
      duration: 2,
      hasCloseButton: true
    });
    //refetch to update status
  }, [data]);

  const handlePayment = async (status_code: string) => {
    try {
      //打串金流API
      //接後端API更改status_qode = '6' 已付全額 ('7'已付訂金 '8'已付尾款)
      const res = await updateStatus(status_code, data.quote_no);
    } catch (e) {
      console.log("somehting wrong:", e.message);
    }
  };

  const handleTogglePayment = () => {
    setIsPayInFull(!isPayInFull);
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
      return !data.isfullpay ? (
        <PrimaryRadiusBtn
          appearance="primary"
          onClick={handlePayment.bind(null, "6")}
        >
          支付全額
        </PrimaryRadiusBtn>
      ) : (
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <PrimaryRadiusBtn
            appearance={`${isPayInFull ? "secondary" : "primary"}`}
            onMouseEnter={handleTogglePayment}
            onMouseLeave={handleTogglePayment}
            onClick={handlePayment.bind(null, "7")}
          >
            支付訂金
          </PrimaryRadiusBtn>
          <PrimaryRadiusBtn
            appearance={`${isPayInFull ? "primary" : "secondary"}`}
            onClick={handlePayment.bind(null, "6")}
          >
            支付全額
          </PrimaryRadiusBtn>
        </div>
      );
    }
    // 3: {name: '訂金逾期', status: 'error', date: '06/20/2023 00:00:00'}
    // 有逾期狀況
    if (statusList.filter((item) => item.status === "error"))
      return (
        <InlineAlert intent="danger" className="inlineAlert">
          繳費期限已截止，未成功完成訂車作業。若仍想要訂車， 請聯繫客服。
        </InlineAlert>
      );
  };

  return (
    <DivSTY>
      {renderBtn(data.orderStatusesList)}
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
            {({ close }) => (
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
                      id: data.id,
                      quote_no: data.quote_no,
                      full_payment_amount: data.full_payment_amount
                    }
                  ]}
                />
                {/* <Button marginTop={16} onClick={close}>
                  Self Managed Close
                </Button> */}
              </Pane>
            )}
          </Dialog>
        </Pane>
      )}
    </DivSTY>
  );
};

export default PaymentBtn;
