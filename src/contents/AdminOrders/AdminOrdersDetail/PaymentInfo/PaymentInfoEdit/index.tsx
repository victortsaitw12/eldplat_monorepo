import React from "react";
import { Pane, TextInput, Text, Radio } from "evergreen-ui";
//@components
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import { useFormContext } from "react-hook-form";
import { BodySTY } from "./style";

const PaymentInfoEdit = () => {
  const { register, control } = useFormContext();
  return (
    <BodySTY
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "30px"
      }}
    >
      <Pane className="radio_container">
        <Radio
          size={16}
          name="group"
          label={<span className="radio_label">全額支付</span>}
        />
      </Pane>
      <Pane>
        <Radio
          size={16}
          name="group"
          label={<span className="radio_label">預付定金</span>}
        />
      </Pane>

      <CheckBoxWrapper
        control={control}
        inputName="full_payment_check"
        description=""
        label="全額支付"
      >
        <Pane>
          <TextInput
            {...register("full_payment_period")}
            type="date"
            placeholder="付款期限"
          />
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
            <TextInput
              {...register("deposit_period")}
              type="date"
              placeholder="付款期限"
            />
          </Pane>
        </Pane>
        <Pane className="final_payment_content">
          <Text>尾款支付</Text>
          <Pane>
            <Pane style={{ display: "flex" }}>
              <TextInput
                {...register("balance_period")}
                disabled={false}
                placeholder="金額"
              />
            </Pane>
          </Pane>
        </Pane>
      </CheckBoxWrapper>
    </BodySTY>
  );
};
export default PaymentInfoEdit;
