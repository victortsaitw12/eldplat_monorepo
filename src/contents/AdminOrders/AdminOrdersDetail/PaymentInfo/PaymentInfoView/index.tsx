import React from "react";
import { Pane } from "evergreen-ui";
import VerticalDetail from "@components/VerticalDetail";
import dayjs from "dayjs";
interface I_Props {
  payment_status?: any; // 付款狀態
  payment_time?: any; // 付款時間
  full_payment_amount?: any; // 全額付款金額
  full_payment_period?: any; // 全額付款期限
  deposit_percent?: any; // 預付訂金%數
  deposit_amount?: any; // 預付訂金金額
  deposit_period?: any; // 預付訂金付款期限
  balance_amount?: any; // 尾款支付金額
  balance_period?: any; // 尾款支付_付款期限
}
const PaymentInfoView = ({
  payment_status,
  payment_time,
  full_payment_amount,
  full_payment_period,
  deposit_percent,
  deposit_amount,
  deposit_period,
  balance_amount,
  balance_period
}: I_Props) => {
  const payment_status_text = (status: any) => {
    switch (status) {
      case "01":
        return "全額支付";
      default:
        return "尚未付款";
    }
  };
  const payment_period_date = (status: any) => {
    switch (status) {
      case "01":
        return full_payment_period
          ? dayjs(full_payment_period).format("YYYY-MM-DD") + " 前繳款"
          : "-";
      default:
        return full_payment_period
          ? dayjs(full_payment_period).format("YYYY-MM-DD") + " 前繳款"
          : "-";
    }
  };
  const payment_price_text = (status: any) => {
    switch (status) {
      case "01":
        return full_payment_amount
          ? "NT$" + full_payment_amount + " 含稅"
          : "-";
      default:
        return full_payment_amount
          ? "NT$" + full_payment_amount + " 含稅"
          : "-";
    }
  };
  return (
    <Pane style={{ padding: "20px", display: "flex", gap: "191px" }}>
      <VerticalDetail
        title={payment_status_text(payment_status)}
        items={[
          {
            label: payment_period_date(payment_status)
          }
        ]}
      />
      <VerticalDetail title={payment_price_text(payment_status)} items={[{}]} />
    </Pane>
  );
};
export default PaymentInfoView;
