import React from "react";
import { Pane, TextInput, Text, Radio, Select } from "evergreen-ui";
import CustomSelect from "@components/CustomSelect";
//@components
import { useFormContext, useWatch } from "react-hook-form";
import { BodySTY } from "./style";

const PaymentInfoEdit = () => {
  const [calculateType, setCalculate] = React.useState<string>("$");
  const { register, control, setValue, getValues } = useFormContext();

  const isFullPayment = useWatch({
    control,
    name: "full_payment_check"
  });

  const on_radioChange = (value: string, checked: boolean) => {
    if (checked) {
      if (value == "full_payment") {
        setValue("full_payment_check", "1");
        setValue("deposit_check", "0");
        setValue("deposit_period", null);
        setValue("deposit_amount", null);
        setValue("balance_amount", null);
        setValue("balance_period", null);
      }
      if (value == "deposit") {
        setValue("deposit_check", "1");
        setValue("full_payment_check", "0");
        setValue("full_payment_period", null);
      }
    }
  };
  const r_payment_record = (selectName?: string, inputName?: string) => {
    return (
      <Pane className="payment_record">
        <Text>付款記錄</Text>
        <Pane>
          <CustomSelect
            register={register}
            options={[
              {
                value: "0",
                text: "請選擇付款方式"
              }
            ]}
            style={{
              width: "137px"
            }}
            disabled={true}
          />

          <TextInput
            style={{
              flex: "1"
            }}
            disabled={true}
            placeholder="實際付款日期"
          />
        </Pane>
      </Pane>
    );
  };
  return (
    <BodySTY>
      <Pane className="radio_container">
        <Radio
          size={16}
          value="full_payment"
          name="group"
          label={<span className="radio_label">全額支付</span>}
          onChange={(e) => {
            on_radioChange(e.target.value, e.target.checked);
          }}
          checked={getValues("full_payment_check") == "1"}
        />
        <Pane>
          <TextInput
            {...register("full_payment_period")}
            disabled={isFullPayment !== "1"}
            type="date"
            placeholder="付款期限"
          />
        </Pane>
        {r_payment_record()}
      </Pane>
      <Pane className="radio_container">
        <Radio
          size={16}
          value="deposit"
          name="group"
          label={<span className="radio_label">預付訂金</span>}
          onChange={(e) => {
            on_radioChange(e.target.value, e.target.checked);
          }}
          checked={getValues("deposit_check") == "1"}
        />
        <Pane
          style={{
            display: "flex",
            maxWidth: "280px",
            gap: "12px"
          }}
        >
          <Select
            style={{ width: "60px", flex: "unset" }}
            value={calculateType}
            onChange={(event) => {
              console.log("select onchange!!!!");
              setCalculate(event.target.value);
            }}
            disabled={isFullPayment == "1"}
          >
            <option value="$">$</option>
            <option value="%">%</option>
          </Select>
          <TextInput
            style={{ width: "unset", flex: "1" }}
            type="number"
            {...(register("deposit_amount"),
            {
              onChange: (e: { target: { value: any } }) => {
                const quote_total_amount = parseInt(
                  getValues("quote_total_amount"),
                  10
                );
                setValue("deposit_amount", parseInt(e.target.value, 10));
                if (calculateType == "$") {
                  quote_total_amount - e.target.value > 0 &&
                    setValue(
                      "balance_amount",
                      quote_total_amount - e.target.value
                    );
                }
                if (calculateType == "%") {
                  //當訂金是趴數的時候
                }
              }
            })}
            disabled={isFullPayment == "1"}
            placeholder="金額"
          />
        </Pane>
        <Pane>
          <TextInput
            {...register("deposit_period")}
            disabled={isFullPayment == "1"}
            type="date"
            placeholder="付款期限"
          />
        </Pane>
        {r_payment_record()}
      </Pane>
      <Pane className="final_payment_content">
        <Text>尾款支付</Text>
        <Pane>
          <TextInput
            type="number"
            {...register("balance_amount")}
            disabled={true}
            placeholder="金額"
          />
        </Pane>
        <Pane>
          <TextInput
            {...register("balance_period")}
            disabled={isFullPayment == "1"}
            type="date"
            placeholder="付款期限"
          />
        </Pane>
        {r_payment_record()}
      </Pane>
    </BodySTY>
  );
};
export default PaymentInfoEdit;
