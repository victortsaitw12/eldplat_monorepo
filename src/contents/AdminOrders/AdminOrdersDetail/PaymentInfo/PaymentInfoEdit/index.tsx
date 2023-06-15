import React from "react";
import { Pane, TextInput } from "evergreen-ui";
//@components
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import { useFormContext } from "react-hook-form";
const PaymentInfoEdit = () => {
  const { register, control } = useFormContext();
  return (
    <Pane
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "30px"
      }}
    >
      <CheckBoxWrapper
        control={control}
        inputName="full_payment_amount"
        description=""
        label="全額支付"
      >
        <Pane>
          <TextInput type="date" placeholder="付款期限" />
        </Pane>
      </CheckBoxWrapper>
      <CheckBoxWrapper
        control={control}
        inputName="deposit_check"
        description=""
        label="預付定金"
      >
        <Pane>
          <Pane style={{ display: "flex", marginBottom: "12px" }}>
            <TextInput placeholder="金額" />
          </Pane>
          <Pane style={{ display: "flex" }}>
            <TextInput type="date" placeholder="付款期限" />
          </Pane>
        </Pane>
      </CheckBoxWrapper>
      <CheckBoxWrapper
        control={control}
        inputName="balance_check"
        description=""
        label="尾款支付"
      >
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
