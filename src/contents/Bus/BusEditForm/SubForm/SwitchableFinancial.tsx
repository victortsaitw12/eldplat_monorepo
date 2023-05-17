import React, { useState } from "react";
import RadioGroupRow, { RadioField } from "@components/RadioGroupRow";
import { SubFromProps } from "./type";
import Card from "@components/Card";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import HorizontalSelect from "@components/HookForm/Select/HorizontalSelect";
import HorizontalTextArea from "@components/HookForm/Input/HorizontalTextArea";
import Loan from "./LoanAndLease/Loan";
import Lease from "./LoanAndLease/Lease";
import FlexWrapper from "@layout/FlexWrapper";
function Financial({
  hide,
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) {
  const [financingTab, setFinancingTab] = useState("3");
  const handleFinancingTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinancingTab(e.target.value);
  };
  return (
    <div style={{ display: hide ? "none" : "block" }}>
      <FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Card title="購買詳情">
            <HorizontalSelect
              control={control}
              isDisabled={isDisabled}
              label="採購供應商"
              name="bus_loan_lease.vendor_no"
              options={[{ label: "大大國際", value: "01" }]}
            />
            <HorizatalInput
              label="購買日期"
              errorMessage={
                errors?.bus_loan_lease?.purchase_date?.message as string
              }
              {...register("bus_loan_lease.purchase_date")}
            />
            <HorizatalInput
              label="購買價格"
              errorMessage={
                errors?.bus_loan_lease?.purchase_price?.message as string
              }
              {...register("bus_loan_lease.purchase_price")}
            />
            <HorizatalInput
              label="里程表"
              errorMessage={errors?.bus_loan_lease?.odometer?.message as string}
              {...register("bus_loan_lease.odometer")}
            />
            <HorizontalTextArea
              label="備註"
              errorMessage={errors?.bus_loan_lease?.notes?.message as string}
              {...register("bus_loan_lease.notes")}
            />
          </Card>
          <Card title="保固">
            <HorizatalInput
              label="截止日期"
              errorMessage={errors?.bus_loan_lease?.notes?.message as string}
              hint="保固期限的最後一天"
              {...register("bus_loan_lease.notes")}
            />
            <HorizatalInput
              label="最大里程數值"
              errorMessage={errors?.bus_loan_lease?.notes?.message as string}
              hint="保固期限允許的最大里程數"
              {...register("bus_loan_lease.notes")}
            />
          </Card>
        </FlexWrapper>
        <FlexWrapper flexDirection="column">
          <Card title="貸款/租賃">
            <RadioGroupRow>
              <RadioField
                label="貸款"
                name="loan-lease"
                hint="此車輛與貸款相關"
                value="1"
                checked={financingTab === "1"}
                onChange={handleFinancingTabChange}
              />
              <RadioField
                label="租賃"
                name="loan-lease"
                hint="此車輛正在租賃中"
                value="2"
                checked={financingTab === "2"}
                onChange={handleFinancingTabChange}
              />
              <RadioField
                label="無融資"
                name="loan-lease"
                hint="此車輛未被融資"
                value="3"
                checked={financingTab === "3"}
                onChange={handleFinancingTabChange}
              />
            </RadioGroupRow>
            {financingTab === "1" && (
              <Loan errors={errors} control={control} register={register} />
            )}
            {financingTab === "2" && (
              <Lease errors={errors} control={control} register={register} />
            )}
          </Card>
        </FlexWrapper>
      </FlexWrapper>
    </div>
  );
}

export default Financial;
