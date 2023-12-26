import { DivSTY } from "./style";
import { useState } from "react";
import InfoCard from "@components/InfoCard/PureStyle";
import { Pane } from "evergreen-ui";

const ExpenseCard = () => {
  return (
    <InfoCard isEdit={false} hasPadding={false} infoTitle={"費用"}>
      <DivSTY className="expense-content">
        <div className="list expense-title">
          <div>總金額</div>
          <div>NTD $ 2,805</div>
        </div>
        <div className="list">
          <div>基本車資</div>
          <div>NTD $1,200</div>
        </div>
        <div className="list">
          <div>項目一</div>
          <div>NTD $200</div>
        </div>
        <div className="list">
          <div>項目二</div>
          <div>NTD $500</div>
        </div>
        <div className="list sub-title">
          <div>收款期限</div>
        </div>
        <div className="list bold">
          <div>訂金</div>
          <div>NTD $1,805</div>
        </div>
        <div className="list">
          <div>付款期限</div>
          <div className="red">2023/05/16 23:59</div>
        </div>
        <div className="list bold">
          <div>尾款</div>
          <div>NTD $1,805</div>
        </div>
        <div className="list">
          <div>付款期限</div>
          <div className="red">2023/05/16 23:59</div>
        </div>
      </DivSTY>
    </InfoCard>
  );
};

export default ExpenseCard;
