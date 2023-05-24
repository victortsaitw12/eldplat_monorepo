import React, { useState } from "react";
import Image from "next/image";
import { Select, Button, FilePicker, TextInput, Textarea } from "evergreen-ui";

import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  Control
} from "react-hook-form";
import { BusDataTypes } from "../../busDefaultData";
import FlexWrapper from "@layout/FlexWrapper";
import InfoBox from "@components/InfoBox";
interface Props {
  selected?: boolean;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
}
function Financial({ selected, register, errors, getValues, control }: Props) {
  const purchaseInfo = [
    {
      req: true,
      label: "採購供應商",
      value: getValues("bus_loan_lease.vendor_no"),
      editEle: (
        <Select
          key="bus_loan_lease.vendor_no"
          {...register("bus_loan_lease.vendor_no")}
          marginBottom="0"
        >
          <option value="01">大大國際</option>
        </Select>
      )
    },
    {
      req: false,
      label: "購買日期",
      value: getValues("bus_loan_lease.purchase_date"),
      editEle: <TextInput {...register("bus_loan_lease.purchase_date")} />
    },
    {
      req: false,
      label: "購買價格",
      value: getValues("bus_loan_lease.purchase_price"),
      editEle: <TextInput {...register("bus_loan_lease.purchase_price")} />
    },
    {
      req: false,
      label: "里程表",
      value: getValues("bus_loan_lease.odometer"),
      editEle: <TextInput {...register("bus_loan_lease.odometer")} />
    },
    {
      req: false,
      label: "備註",
      value: getValues("bus_loan_lease.notes"),
      editEle: <Textarea {...register("bus_loan_lease.notes")} />
    }
  ];
  const maintainInfo = [
    {
      req: false,
      label: "截止日期",
      value: getValues("bus_loan_lease.warranty_expiration_date"),
      editEle: (
        <TextInput {...register("bus_loan_lease.warranty_expiration_date")} />
      )
    },
    {
      req: false,
      label: "最大里程數值",
      value: getValues("bus_loan_lease.warranty_max_meter"),
      editEle: <TextInput {...register("bus_loan_lease.warranty_max_meter")} />
    }
  ];
  const radioInfo = [
    // TODO:主要聯絡人區塊 因為變成Array所以先緩緩再做。
    {
      req: false,
      inputType: "custom",
      editEle: [<div key="radio">123</div>]
    }
  ];
  const loanInfo = [
    {
      req: false,
      label: "貸款方",
      value: getValues("bus_loan_lease.vendor_no_loan_lease"),
      editEle: (
        <Select
          key="bus_loan_lease.vendor_no_loan_lease"
          {...register("bus_loan_lease.vendor_no_loan_lease")}
          marginBottom="0"
        >
          <option value="01">大大國際</option>
        </Select>
      )
    },
    {
      req: false,
      label: "貸款日期",
      value: getValues("bus_loan_lease.date_of_loan"),
      editEle: <TextInput {...register("bus_loan_lease.date_of_loan")} />
    },
    {
      req: false,
      label: "貸款金額",
      value: getValues("bus_loan_lease.amount_of_loan"),
      editEle: <TextInput {...register("bus_loan_lease.amount_of_loan")} />
    },
    {
      req: false,
      label: "年度百分比率(APR)",
      value: getValues("bus_loan_lease.annual_percentage_rate"),
      editEle: (
        <TextInput {...register("bus_loan_lease.annual_percentage_rate")} />
      )
    },
    {
      req: false,
      label: "首期付款",
      value: getValues("bus_loan_lease.down_payment"),
      editEle: <TextInput {...register("bus_loan_lease.down_payment")} />
    },
    {
      req: false,
      label: "首期付款日期",
      value: getValues("bus_loan_lease.first_payment_date"),
      editEle: <TextInput {...register("bus_loan_lease.first_payment_date")} />
    },
    {
      req: false,
      label: "月付金額",
      value: getValues("bus_loan_lease.monthly_payment"),
      editEle: <TextInput {...register("bus_loan_lease.monthly_payment")} />
    },
    {
      req: false,
      label: "付款次數",
      value: getValues("bus_loan_lease.number_of_payments"),
      editEle: <TextInput {...register("bus_loan_lease.number_of_payments")} />
    },
    {
      req: false,
      label: "貸款結束日期",
      value: getValues("bus_loan_lease.loan_end_date"),
      editEle: <TextInput {...register("bus_loan_lease.loan_end_date")} />
    },
    {
      req: false,
      label: "帳號",
      value: getValues("bus_loan_lease.account_number"),
      editEle: <TextInput {...register("bus_loan_lease.account_number")} />
    },
    {
      req: false,
      label: "備註",
      value: getValues("bus_loan_lease.loan_lease_notes"),
      editEle: <Textarea {...register("bus_loan_lease.loan_lease_notes")} />
    }
  ];
  const leaseInfo = [
    {
      req: false,
      label: "供應商",
      value: getValues("bus_loan_lease.vendor_no_loan_lease"),
      editEle: (
        <Select
          key="bus_loan_lease.vendor_no_loan_lease"
          {...register("bus_loan_lease.vendor_no_loan_lease")}
          marginBottom="0"
        >
          <option value="01">大大國際</option>
        </Select>
      )
    },
    {
      req: false,
      label: "租賃日期",
      value: getValues("bus_loan_lease.date_of_lease"),
      editEle: <TextInput {...register("bus_loan_lease.date_of_lease")} />
    },
    {
      req: false,
      label: "租賃化成本",
      value: getValues("bus_loan_lease.capitalized_cost"),
      editEle: <TextInput {...register("bus_loan_lease.capitalized_cost")} />
    },
    {
      req: false,
      label: "首期付款",
      value: getValues("bus_loan_lease.down_payment"),
      editEle: <TextInput {...register("bus_loan_lease.down_payment")} />
    },
    {
      req: false,
      label: "首期付款日期",
      value: getValues("bus_loan_lease.first_payment_date"),
      editEle: <TextInput {...register("bus_loan_lease.first_payment_date")} />
    },
    {
      req: false,
      label: "月付金額",
      value: getValues("bus_loan_lease.monthly_payment"),
      editEle: <TextInput {...register("bus_loan_lease.monthly_payment")} />
    },
    {
      req: false,
      label: "付款次數",
      value: getValues("bus_loan_lease.number_of_payments"),
      editEle: <TextInput {...register("bus_loan_lease.number_of_payments")} />
    },
    {
      req: false,
      label: "租賃結束日期",
      value: getValues("bus_loan_lease.lease_end_date"),
      editEle: <TextInput {...register("bus_loan_lease.lease_end_date")} />
    },
    {
      req: false,
      label: "殘值",
      value: getValues("bus_loan_lease.residual_value"),
      editEle: <TextInput {...register("bus_loan_lease.residual_value")} />
    },
    {
      req: false,
      label: "契約里程限制",
      value: getValues("bus_loan_lease.contract_mileage_cap"),
      editEle: (
        <TextInput {...register("bus_loan_lease.contract_mileage_cap")} />
      )
    },
    {
      req: false,
      label: "里程超出費用",
      value: getValues("bus_loan_lease.excess_mileage_charge"),
      editEle: (
        <TextInput {...register("bus_loan_lease.excess_mileage_charge")} />
      )
    },
    {
      req: false,
      label: "租賃號碼",
      value: getValues("bus_loan_lease.lease_number"),
      editEle: <TextInput {...register("bus_loan_lease.lease_number")} />
    },
    {
      req: false,
      label: "備註",
      value: getValues("bus_loan_lease.loan_lease_notes"),
      editEle: <TextInput {...register("bus_loan_lease.loan_lease_notes")} />
    }
  ];

  return (
    <FlexWrapper
      padding="0"
      style={{ display: `${selected ? "flex" : "none"}` }}
    >
      <FlexWrapper flexDirection="column" style={{ flex: "1" }}>
        <InfoBox isEdit={true} infoData={purchaseInfo} infoTitle="購買詳情" />
        <InfoBox isEdit={true} infoData={maintainInfo} infoTitle="保固" />
      </FlexWrapper>
      <div style={{ flex: "1" }}>
        <InfoBox
          isEdit={true}
          infoData={
            getValues("bus_loan_lease.loan_lease") === "1"
              ? loanInfo
              : getValues("bus_loan_lease.loan_lease") === "2"
              ? leaseInfo
              : radioInfo
          }
          infoTitle="貸款/租賃"
        />
      </div>
    </FlexWrapper>
  );
}

export default Financial;
