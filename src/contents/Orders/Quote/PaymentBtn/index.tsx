import React from "react";
import { useFormContext } from "react-hook-form";

import {
  Pane,
  Group,
  InlineAlert,
  Button,
  Dialog,
  Paragraph,
  toaster,
  Tooltip
} from "evergreen-ui";
import { DivSTY } from "./style";
import LightBox from "@components/Lightbox";
import Table from "@components/Table/Table";
import PrimaryRadiusBtn from "@components/Button/PrimaryRadius";
import { updateStatus } from "@services/client/updateStatus";

const PaymentBtn = ({ data }) => {
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
  const handlePayment = (status_code: string) => {
    try {
      //打串金流API
      //直接打更新狀態API with status_code
    } catch (e) {
      console.log("somehting wrong:", e.message);
    }
  };
  const handleTogglePayment = () => {
    if (data.isfullpay) return;
    setIsPayInFull(!isPayInFull);
  };
  const checkCurrentStatus = (orderStatusesList: any[]) => {
    // 0: {name: '送出詢價', status: 'ok', date: '06/10/2023 00:00:00'}
    // 接受報價
    // 1: {name: '收到報價', status: 'ok', date: '06/20/2023 00:00:00'}
    // 2: {name: '接受報價', status: 'ok', date: '06/20/2023 00:00:00'}
    // 付款(訂金/全額)
    // 付款(尾款)
    // 3: {name: '訂金逾期', status: 'error', date: '06/20/2023 00:00:00'}
    // 有逾期狀況
    // 4: {name: '訂單成立', status: 'pending', date: null}
    // 5: {name: '結案', status: 'pending', date: null}
  };

  return (
    <DivSTY>
      {data.orderStatusesList[1].status === "ok" &&
        data.orderStatusesList[2].status === "pending" && (
          <PrimaryRadiusBtn
            appearance="primary"
            onClick={() => setIsLightBoxOpen(true)}
          >
            接受報價
          </PrimaryRadiusBtn>
        )}
      {data.orderStatusesList[2].status === "ok" && (
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <PrimaryRadiusBtn
            appearance={`${isPayInFull ? "secondary" : "primary"}`}
            onMouseEnter={handleTogglePayment}
            onMouseLeave={handleTogglePayment}
            onClick={handlePayment.bind(null, "7")}
            disabled={data.isfullpay}
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
      )}
      {data.orderStatusesList[2].status === "ok" && (
        <PrimaryRadiusBtn
          appearance="primary"
          onClick={handlePayment.bind(null, "8")}
        >
          支付尾款
        </PrimaryRadiusBtn>
      )}
      {data.orderStatusesList[3].status === "error" && (
        <InlineAlert intent="danger" className="inlineAlert">
          繳費期限已截止，未成功完成訂車作業。若仍想要訂車， 請聯繫客服。
        </InlineAlert>
      )}
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
        // <LightBox>
        //   <div>確認接受此報價嗎?</div>
        //   <div>接受報價後，此筆訂單即可繳款。</div>
        //   <div>報價詳情：</div>
        //   <Table
        //     titles={["訂單編號", "總金額"]}
        //     data={[
        //       {
        //         id: data.id,
        //         quote_no: data.quote_no,
        //         full_payment_amount: data.full_payment_amount
        //       }
        //     ]}
        //   />
        //   <Button>取消</Button>
        //   <Button>接受</Button>
        // </LightBox>
      )}
    </DivSTY>
  );
};

export default PaymentBtn;
