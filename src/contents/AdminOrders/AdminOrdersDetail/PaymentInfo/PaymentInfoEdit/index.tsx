import React from "react";
import { Pane, TextInput } from "evergreen-ui";
//@components
import CheckBoxWrapper from "@components/CheckBoxWrapper";
const PaymentInfoEdit = () => {
  return (
    <Pane
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "30px"
      }}
    >
      <CheckBoxWrapper checked={true} description="" label="全額支付">
        <Pane>
          <TextInput placeholder="付款期限" />
        </Pane>
      </CheckBoxWrapper>
      <CheckBoxWrapper checked={false} description="" label="預付定金">
        <Pane>
          <Pane style={{ display: "flex", marginBottom: "12px" }}>
            <TextInput placeholder="金額" />
          </Pane>
          <Pane style={{ display: "flex" }}>
            <TextInput placeholder="付款期限" />
          </Pane>
        </Pane>
      </CheckBoxWrapper>
      <CheckBoxWrapper checked={false} description="" label="尾款支付">
        <Pane>
          <Pane style={{ display: "flex" }}>
            <TextInput disabled={true} placeholder="金額" />
          </Pane>
        </Pane>
      </CheckBoxWrapper>
    </Pane>
  );
};
export default PaymentInfoEdit;