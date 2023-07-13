import React from "react";
import { Select, TextInput, Textarea } from "evergreen-ui";
import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  Control,
  useWatch
} from "react-hook-form";
import { BusDataTypes } from "../../bus.type";
import FlexWrapper from "@layout/FlexWrapper";
import InfoBox from "@components/InfoBox";
import Radio from "@components/HookForm/Radio";
import Checkbox from "@components/CheckBox";
interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
}
function Financial({ register, errors, getValues, control, isEdit }: Props) {
  const loan_lease = useWatch({
    control,
    name: "bus_loan_lease.loan_lease"
  });
  const purchaseInfo = [
    {
      req: false,
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
      editEle: (
        <TextInput
          key="bus_loan_lease.purchase_date"
          type="date"
          {...register("bus_loan_lease.purchase_date")}
        />
      )
    },
    {
      req: false,
      label: "購買價格",
      value: getValues("bus_loan_lease.purchase_price")?.toLocaleString(),
      editEle: (
        <TextInput
          key="bus_loan_lease.purchase_price"
          {...register("bus_loan_lease.purchase_price")}
        />
      )
    },
    {
      req: false,
      label: "里程表",
      value: getValues("bus_loan_lease.odometer")?.toLocaleString(),
      editEle: (
        <TextInput
          key="bus_loan_lease.odometer"
          {...register("bus_loan_lease.odometer")}
        />
      )
    },
    {
      req: false,
      label: "備註",
      value: getValues("bus_loan_lease.notes"),
      editEle: (
        <Textarea
          key="bus_loan_lease.notes"
          {...register("bus_loan_lease.notes")}
        />
      )
    }
  ];
  const maintainInfo = [
    {
      req: false,
      label: "截止日期",
      value: getValues("bus_loan_lease.warranty_expiration_date"),
      editEle: (
        <TextInput
          key="bus_loan_lease.warranty_expiration_date"
          type="date"
          {...register("bus_loan_lease.warranty_expiration_date")}
        />
      )
    },
    {
      req: false,
      label: "最大里程數值",
      value: getValues("bus_loan_lease.warranty_max_meter")?.toLocaleString(),
      editEle: <TextInput {...register("bus_loan_lease.warranty_max_meter")} />
    }
  ];
  const radioInfo = [
    // TODO:主要聯絡人區塊 因為變成Array所以先緩緩再做。
    {
      req: false,
      inputType: "custom",
      editEle: (
        <Radio
          key={"bus_loan_lease.loan_lease"}
          control={control}
          name="bus_loan_lease.loan_lease"
          isDisabled={!isEdit}
          options={[
            { value: "1", label: "貸款", description: "此車輛與貸款無關" },
            { value: "2", label: "租賃", description: "此車輛正在租賃中" },
            { value: "3", label: "無融資", description: "此車輛未被融資" }
          ]}
        />
      )
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
      editEle: (
        <TextInput
          key="bus_loan_lease.date_of_loan"
          type="date"
          {...register("bus_loan_lease.date_of_loan")}
        />
      )
    },
    {
      req: false,
      label: "貸款金額",
      value: getValues("bus_loan_lease.amount_of_loan")?.toLocaleString(),
      editEle: (
        <TextInput
          key="bus_loan_lease.amount_of_loan"
          type="number"
          {...register("bus_loan_lease.amount_of_loan")}
        />
      )
    },
    {
      req: false,
      label: "年度百分比率(APR)",
      value: getValues("bus_loan_lease.annual_percentage_rate"),
      editEle: (
        <TextInput
          key="bus_loan_lease.annual_percentage_rate"
          {...register("bus_loan_lease.annual_percentage_rate")}
        />
      )
    },
    {
      req: false,
      label: "首期付款金額",
      value: getValues("bus_loan_lease.down_payment")?.toLocaleString(),
      editEle: (
        <TextInput
          key="bus_loan_lease.down_payment"
          type="number"
          {...register("bus_loan_lease.down_payment")}
        />
      )
    },
    {
      req: false,
      label: "首期付款日期",
      value: getValues("bus_loan_lease.first_payment_date"),
      editEle: (
        <TextInput
          key="bus_loan_lease.first_payment_date"
          type="date"
          {...register("bus_loan_lease.first_payment_date")}
        />
      )
    },
    {
      req: false,
      label: "月付金額",
      value: getValues("bus_loan_lease.monthly_payment")?.toLocaleString(),
      editEle: (
        <TextInput
          key="bus_loan_lease.monthly_payment"
          type="number"
          {...register("bus_loan_lease.monthly_payment")}
        />
      )
    },
    {
      req: false,
      label: "付款次數",
      value: getValues("bus_loan_lease.number_of_payments"),
      editEle: (
        <TextInput
          key="bus_loan_lease.number_of_payments"
          type="number"
          {...register("bus_loan_lease.number_of_payments")}
        />
      )
    },
    {
      req: false,
      label: "貸款結束日期",
      value: getValues("bus_loan_lease.loan_end_date"),
      editEle: (
        <TextInput
          type="date"
          key="bus_loan_lease.loan_end_date"
          {...register("bus_loan_lease.loan_end_date")}
        />
      )
    },
    {
      req: false,
      label: "帳號",
      value: getValues("bus_loan_lease.account_number"),
      editEle: (
        <TextInput
          key="bus_loan_lease.account_number"
          {...register("bus_loan_lease.account_number")}
        />
      )
    },
    {
      req: false,
      label: "備註",
      value: getValues("bus_loan_lease.loan_lease_notes"),
      editEle: (
        <Textarea
          key="bus_loan_lease.loan_lease_notes"
          {...register("bus_loan_lease.loan_lease_notes")}
        />
      )
    },
    {
      req: false,
      inputType: "custom",
      editEle: (
        <Checkbox
          label="加入計算報表"
          key="bus_loan_lease.loan_check"
          marginBottom="0"
          disabled={!isEdit}
        />
      )
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
      editEle: (
        <TextInput
          key="bus_loan_lease.date_of_lease"
          type="date"
          {...register("bus_loan_lease.date_of_lease")}
        />
      )
    },
    {
      req: false,
      label: "資本化成本",
      value: getValues("bus_loan_lease.capitalized_cost")?.toLocaleString(),
      editEle: (
        <TextInput
          key="bus_loan_lease.capitalized_cost"
          {...register("bus_loan_lease.capitalized_cost")}
        />
      )
    },
    {
      req: false,
      label: "首期付款金額",
      value: getValues("bus_loan_lease.down_payment")?.toLocaleString(),
      editEle: <TextInput {...register("bus_loan_lease.down_payment")} />
    },
    {
      req: false,
      label: "首期付款日期",
      value: getValues("bus_loan_lease.first_payment_date"),
      editEle: (
        <TextInput
          type="date"
          {...register("bus_loan_lease.first_payment_date")}
        />
      )
    },
    {
      req: false,
      label: "月付金額",
      value: getValues("bus_loan_lease.monthly_payment")?.toLocaleString(),
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
      editEle: (
        <TextInput type="date" {...register("bus_loan_lease.lease_end_date")} />
      )
    },
    {
      req: false,
      label: "殘值",
      value: getValues("bus_loan_lease.residual_value")?.toLocaleString(),
      editEle: <TextInput {...register("bus_loan_lease.residual_value")} />
    },
    {
      req: false,
      label: "契約里程限制",
      value: getValues("bus_loan_lease.contract_mileage_cap")?.toLocaleString(),
      editEle: (
        <TextInput {...register("bus_loan_lease.contract_mileage_cap")} />
      )
    },
    {
      req: false,
      label: "里程超出費用",
      value: getValues(
        "bus_loan_lease.excess_mileage_charge"
      )?.toLocaleString(),
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
    },
    {
      req: false,
      inputType: "custom",
      editEle: (
        <Checkbox
          label="加入計算報表"
          key="bus_loan_lease.lease_check"
          marginBottom="0"
          disabled={!isEdit}
        />
      )
    }
  ];

  return (
    <FlexWrapper padding="0">
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={isEdit} infoData={purchaseInfo} infoTitle="購買詳情" />
        <InfoBox isEdit={isEdit} infoData={maintainInfo} infoTitle="保固" />
      </FlexWrapper>
      <div style={{ flex: "1" }}>
        <InfoBox
          isEdit={isEdit}
          infoData={
            getValues("bus_loan_lease.loan_lease") === "1"
              ? [...radioInfo, ...loanInfo]
              : getValues("bus_loan_lease.loan_lease") === "2"
              ? [...radioInfo, ...leaseInfo]
              : radioInfo
          }
          infoTitle="貸款/租賃"
        />
      </div>
    </FlexWrapper>
  );
}

export default Financial;
