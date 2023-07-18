import React from "react";
import { Pane, TextInput, Text, Radio, Select } from "evergreen-ui";
import { ErrorMessage } from "@hookform/error-message";

import CustomSelect from "@components/CustomSelect";
//@components
import { useFormContext, useWatch } from "react-hook-form";
import { BodySTY } from "./style";

const PaymentInfoEdit = () => {
  const [calculateType, setCalculate] = React.useState<string>("$");
  const {
    register,
    control,
    setValue,
    getValues,
    clearErrors,
    formState: { errors }
  } = useFormContext();
  const deposit_amount = useWatch({
    control,
    name: "deposit_amount"
  });
  const quote_total_amount = useWatch({
    control,
    name: "quote_total_amount"
  });
  const deposit_percent = useWatch({
    control,
    name: "deposit_percent"
  });
  const isFullPayment = useWatch({
    control,
    name: "full_payment_check"
  });

  const on_radioChange = (value: string, checked: boolean) => {
    // console.log("🐴🐴🐴🐴🐴🐴🐴當支付方式有變的時候", value);
    if (checked) {
      if (value == "full_payment") {
        setValue("full_payment_check", "1");
        setValue("deposit_check", "0");
        setValue("deposit_period", null);
        setValue("deposit_amount", null);
        setValue("balance_amount", null);
        setValue("balance_period", null);
        clearErrors("balance_period");
        clearErrors("deposit_amount");
        clearErrors("deposit_period");
      }
      if (value == "deposit") {
        setValue("deposit_check", "1");
        setValue("full_payment_check", "0");
        setValue("full_payment_period", null);
        clearErrors("full_payment_period");
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

  // React.useEffect(() => {
  //   setValue("deposit_percent", 0);
  // }, [calculateType]);

  React.useEffect(() => {
    if (calculateType === "%") {
      const quote_total_amount = parseInt(getValues("quote_total_amount"), 10);
      if (quote_total_amount > 0) {
        setValue(
          "deposit_amount",
          quote_total_amount * (deposit_percent / 100)
        );
      } else {
        setValue("deposit_amount", 0);
      }
    }
  }, [deposit_percent, calculateType]);

  React.useEffect(() => {
    console.log("第二個useEffect");
    if (calculateType === "%") {
      setValue("deposit_amount", quote_total_amount * (deposit_percent / 100));
    }
  }, [quote_total_amount, calculateType]);

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
            isInvalid={!!errors?.full_payment_period}
            {...register("full_payment_period", {
              required: isFullPayment !== "1" ? false : "不可空白。"
            })}
            disabled={isFullPayment !== "1"}
            type="date"
            placeholder="付款期限"
          />
          <ErrorMessage
            errors={errors}
            name="full_payment_period"
            render={({ message }) => (
              <Pane>
                <Text className="input-error">{message}</Text>
              </Pane>
            )}
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
              // console.log("select onchange!!!!");
              setCalculate(event.target.value);
            }}
            disabled={isFullPayment == "1"}
          >
            <option value="$">$</option>
            <option value="%">%</option>
          </Select>

          {calculateType === "$" && (
            <Pane style={{ flex: "1" }}>
              <TextInput
                isInvalid={!!errors?.deposit_amount}
                style={{ width: "100%" }}
                type="number"
                {...register("deposit_amount", {
                  required: isFullPayment == "1" ? false : "不可空白。",
                  onChange: (e: { target: { value: any } }) => {
                    setValue("deposit_amount", parseInt(e.target.value, 10));
                    const quote_total_amount = parseInt(
                      getValues("quote_total_amount"),
                      10
                    );
                    if (calculateType == "$") {
                      quote_total_amount - e.target.value > 0 &&
                        setValue(
                          "balance_amount",
                          quote_total_amount - e.target.value
                        );
                    }
                  }
                })}
                disabled={isFullPayment == "1"}
                placeholder="金額"
              />
              <ErrorMessage
                errors={errors}
                name="deposit_amount"
                render={({ message }) => (
                  <Pane>
                    <Text className="input-error">{message}</Text>
                  </Pane>
                )}
              />
            </Pane>
          )}
          {calculateType === "%" && (
            <Pane className="deposit_persent">
              <TextInput
                isInvalid={!!errors?.deposit_percent}
                style={{ width: "50%" }}
                type="number"
                {...register("deposit_percent", {
                  required: isFullPayment == "1" ? false : "不可空白。",
                  onChange: (e: { target: { value: any } }) => {
                    const newPersent = parseInt(e.target.value, 10);
                    if (newPersent <= 100 && newPersent >= 0) {
                      setValue("deposit_percent", newPersent);
                    }
                    if (Number.isNaN(newPersent)) {
                      setValue("deposit_percent", 0);
                    }
                  }
                })}
                // value={persent}
                // onChange={(e: any) => {
                //   const newPersent = parseInt(e.target.value, 10);
                //   if (newPersent <= 100 && newPersent >= 0) {
                //     setPersent(newPersent);
                //   }
                //   if (Number.isNaN(newPersent)) {
                //     setPersent(0);
                //   }
                // }}
                disabled={isFullPayment == "1"}
                placeholder="金額"
              />
              <span>=</span>
              <TextInput
                name="deposit_amount_disabled"
                style={{ width: "50%" }}
                type="number"
                value={deposit_amount}
                disabled={true}
                placeholder="金額"
              />
            </Pane>
          )}
        </Pane>
        <Pane>
          <TextInput
            isInvalid={!!errors?.deposit_period}
            {...register("deposit_period", {
              required: isFullPayment == "1" ? false : "不可空白。"
            })}
            disabled={isFullPayment == "1"}
            type="date"
            placeholder="付款期限"
          />
          <ErrorMessage
            errors={errors}
            name="deposit_period"
            render={({ message }) => (
              <Pane>
                <Text className="input-error">{message}</Text>
              </Pane>
            )}
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
            isInvalid={!!errors?.balance_period}
            {...register("balance_period", {
              required: isFullPayment == "1" ? false : "不可空白。"
            })}
            disabled={isFullPayment == "1"}
            type="date"
            placeholder="付款期限"
          />
          <ErrorMessage
            errors={errors}
            name="balance_period"
            render={({ message }) => (
              <Pane>
                <Text className="input-error">{message}</Text>
              </Pane>
            )}
          />
        </Pane>
        {r_payment_record()}
      </Pane>
    </BodySTY>
  );
};
export default PaymentInfoEdit;
