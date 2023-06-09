import React from "react";
import { Pane, mergeTheme, defaultTheme } from "evergreen-ui";
import { DivSTY } from "./style";
import { MOCK_expenseList } from "@mock-data/orders";
import Collapse from "@components/Collapse";
import ExpenseDetail from "@components/ExpenseDetail";
import { Label } from "@components/Button/Primary";
import { LabelSec } from "@components/Button/Primary";
import PaymentBtn from "./PaymentBtn";

const Quote = ({ data }) => {
  const [payment, setPayment] = React.useState();
  const expenseList = [
    { label: "基本車資", value: data.basic_amount, hint: "基本車資" },
    { label: "小費", value: data.tip, hint: "小費" },
    { label: "旺季加價", value: data.high_season_charge, hint: "旺季加價" },
    { label: "司機費用", value: data.driver_guide_charge, hint: "司導加價" },
    { label: "夜間加價", value: data.night_charge, hint: "夜間加價" },
    { label: "偏遠地區加價", value: data.remote_charge, hint: "偏遠地區加價" },
    { label: "特殊需求小計", value: data.extra_charge, hint: "特殊需求小計" }
  ];
  // ----- function ----- //
  const handleToggle = () => {
    return;
  };
  const currentStatus =
    data.orderStatusesList[data.orderStatusesList.length - 1].status_code;
  return (
    <DivSTY>
      <PaymentBtn data={data} />
      <Pane className="quote">
        <Collapse
          title="金額試算"
          titleChildren={
            <div className="collapse">
              <div className="collapse__title">
                <span style={{ fontSize: "16px" }}>
                  {currentStatus === "1" ? "初估金額" : "總金額"}
                </span>
                <span>NT${data.quote_total_amount}</span>
              </div>

              <div className="collapse__subTitle">
                {data.isfullpay ? (
                  <span> 本筆訂單無支付訂金選項</span>
                ) : (
                  <>
                    <span>訂金</span>
                    <span> NT${data.deposit}</span>
                  </>
                )}
              </div>
            </div>
          }
          opened
          OnToggle={handleToggle}
        >
          <ExpenseDetail data={expenseList} prefix="NT$" />
        </Collapse>
      </Pane>
    </DivSTY>
  );
};

export default Quote;
