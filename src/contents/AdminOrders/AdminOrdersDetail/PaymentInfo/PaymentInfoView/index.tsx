import React from "react";
import { Pane } from "evergreen-ui";
import VerticalDetail from "@components/VerticalDetail";
import dayjs from "dayjs";
interface I_Props {
  quote_total_amount?: any; //報價總金額
  deposit?: any; //訂金金額
  final_payment?: any; //尾款金額
  full_payment_amount?: any; // 全額付款金額
  full_payment_check?: any; //是否為全額付款
  full_payment_tax?: any; //全額支付是否含稅
  full_payment_period?: any; // 全額付款期限
  full_payment_history?: any; // 全額付款記錄
  actual_full_payment_date?: any; // 實際付款記錄
  deposit_check?: any; //勾選預付訂金
  deposit_tax?: any; //預付訂金是否含稅
  deposit_percent?: any; //預付訂金%數
  deposit_amount?: any; // 預付訂金金額
  deposit_period?: any; // 預付訂金付款期限
  deposit_history?: any; //訂金付款紀錄
  actual_deposit_date?: any; //實際付款日期
  balance_amount?: any; // 尾款支付金額
  balance_period?: any; // 尾款支付_付款期限
  balance_history?: any; //尾款付款紀錄
}
const PaymentInfoView = ({
  quote_total_amount,
  deposit,
  final_payment,
  full_payment_amount,
  full_payment_check,
  full_payment_tax,
  full_payment_period,
  full_payment_history,
  actual_full_payment_date,
  deposit_check,
  deposit_tax,
  deposit_percent,
  deposit_amount,
  deposit_period,
  deposit_history,
  actual_deposit_date,
  balance_amount,
  balance_period,
  balance_history
}: I_Props) => {
  const payment_status_text = (status: any) => {
    switch (status) {
      case "1":
        return "全額支付";
      default:
        return "預付訂金";
    }
  };
  const payment_period_date = (status: any) => {
    switch (status) {
      case "1":
        return full_payment_period
          ? dayjs(full_payment_period).format("YYYY-MM-DD") + " 前繳款"
          : "-";
      default:
        return full_payment_period
          ? dayjs(deposit_period).format("YYYY-MM-DD") + " 前繳款"
          : "-";
    }
  };
  const payment_price_text = (status: any) => {
    switch (status) {
      case "1":
        return quote_total_amount
          ? "NT$" +
              quote_total_amount.toLocaleString() +
              (full_payment_tax ? " 含稅" : "")
          : "-";
      default:
        return quote_total_amount
          ? "NT$" +
              quote_total_amount.toLocaleString() +
              (full_payment_tax ? " 含稅" : "")
          : "-";
    }
  };

  if (full_payment_check == "1" || deposit_check == "1") {
    return (
      <Pane style={{ padding: "20px", display: "flex", gap: "191px" }}>
        <VerticalDetail
          title={payment_status_text(full_payment_check)}
          items={[
            {
              label: payment_period_date(full_payment_check)
            }
          ]}
        />
        <VerticalDetail
          title={payment_price_text(full_payment_check)}
          items={[{}]}
        />
      </Pane>
    );
  } else {
    return <></>;
  }
};
export default PaymentInfoView;
