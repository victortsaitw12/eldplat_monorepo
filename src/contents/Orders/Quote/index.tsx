import React from "react";
import { Pane } from "evergreen-ui";
import { DivSTY } from "./style";
// import { MOCK_expenseList } from "@mock-data/orders";
import Collapse from "@components/Collapse";
import ExpenseDetail from "@components/ExpenseDetail";
import PaymentBtn from "./PaymentBtn";

const Quote = ({ data }: { data: any }) => {
  const expenseList = [
    {
      label: "基本車資",
      name: "basic_amount",
      value: data.basic_amount || 0,
      hint: "基本車資"
    },
    { label: "小費", name: "tip", value: data.tip || 0, hint: "小費" },
    {
      label: "旺季加價",
      name: "high_season_charge",
      value: data.high_season_charge || 0,
      hint: "旺季加價"
    },
    {
      label: "司機費用",
      name: "driver_guide_charge",
      value: data.driver_guide_charge || 0,
      hint: "司導加價"
    },
    {
      label: "夜間加價",
      name: "night_charge",
      value: data.night_charge || 0,
      hint: "夜間加價"
    },
    {
      label: "偏遠地區加價",
      name: "remote_charge",
      value: data.remote_charge || 0,
      hint: "偏遠地區加價"
    },
    {
      label: "特殊需求小計",
      name: "extra_charge",
      value: data.extra_charge || 0,
      hint: "特殊需求小計"
    }
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
                  ""
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
          viewOnly
          OnToggle={handleToggle}
        >
          <ExpenseDetail data={expenseList} prefix="NT$" />
        </Collapse>
      </Pane>
    </DivSTY>
  );
};

export default Quote;
