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
  return (
    <DivSTY>
      <PaymentBtn data={data} />
      <Pane className="quote">
        <Collapse
          title="金額試算"
          titleChildren={
            <div className="collapse">
              <div className="collapse__title">
                <span>金額試算</span>
                <span>NT$2,200</span>
              </div>
              <div className="collapse__subTitle">
                <span>訂金</span>
                <span> NT$1,000</span>
              </div>
            </div>
          }
          opened
        >
          <ExpenseDetail data={MOCK_expenseList} prefix="NT$" />
        </Collapse>
      </Pane>
    </DivSTY>
  );
};

export default Quote;
