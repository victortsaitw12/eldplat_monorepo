import React from "react";
import { TickCircleIcon, Pane, Group, InlineAlert, Button } from "evergreen-ui";
import { DivSTY } from "./style";
import { MOCK_expenseList } from "@mock-data/orders";
import Collapse from "@components/Collapse";
import ExpenseDetail from "@components/ExpenseDetail";

const Quote = ({ data }) => {
  return (
    <DivSTY>
      {data.order_status === "01" && (
        <Button appearance="primary">接受報價</Button>
      )}
      {data.order_status === "01" && (
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <Button appearance="primary">支付訂金</Button>
          <Button appearance="primary">支付全額</Button>
        </div>
      )}
      {data.order_status === "01" && (
        <Button appearance="primary">支付尾款</Button>
      )}
      {data.order_status === "01" && (
        <InlineAlert intent="danger" className="inlineAlert">
          繳費期限已截止，未成功完成訂車作業。若仍想要訂車， 請聯繫客服。
        </InlineAlert>
      )}
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
