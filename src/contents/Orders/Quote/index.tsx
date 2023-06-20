import React from "react";
import { Pane } from "evergreen-ui";
import { DivSTY } from "./style";
// import { MOCK_expenseList } from "@mock-data/orders";
import Collapse from "@components/Collapse";
import ExpenseDetail from "@components/ExpenseDetail";
import PaymentBtn from "./PaymentBtn";
import { I_OrderDetail } from "@services/client/getQuotation";

const Quote = ({
  data,
  setData
}: {
  data: I_OrderDetail;
  setData: (data: any) => void;
}) => {
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
      hint: "舉牌、司導、指定車齡、特殊行李、寵物、額外杯水瓶裝水、兒童與嬰兒座椅"
    }
  ];
  // ----- function ----- //
  const handleToggle = () => {
    return;
  };

  return (
    <DivSTY>
      <PaymentBtn data={data} setData={setData} />
      <Pane className="quote">
        <Collapse
          title="金額試算"
          titleChildren={
            <div className="collapse">
              <div className="collapse__title">
                <span style={{ fontSize: "16px" }}>
                  {data.orderStatusesList[1].status === "pending"
                    ? "初估金額"
                    : "總金額"}
                </span>
                <span>NT${data.quote_total_amount}</span>
              </div>

              <div className="collapse__subTitle">
                {/* isfullpay表示僅接受全額支付 */}
                {/* checkdeposit表示已付訂金 */}
                {data.isfullpay ? (
                  ""
                ) : (
                  <>
                    <span>訂金</span>
                    <span> NT${data.deposit_amount}</span>
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
