import { SubFromProps } from "../type";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import HorizontalSelect from "@components/HookForm/Select/HorizontalSelect";
const Loan = ({
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) => {
  return (
    <>
      <HorizontalSelect
        control={control}
        isDisabled={isDisabled}
        label="貸款方"
        name="bus_loan_lease.vendor_no"
        options={[{ label: "大大國際", value: "01" }]}
      />

      <HorizatalInput
        label="貸款日期"
        errorMessage={errors?.bus_loan_lease?.date_of_loan?.message as string}
        hint="簽訂貸款協議日期"
        {...register("bus_loan_lease.date_of_loan")}
      />
      <HorizatalInput
        label="貸款金額"
        hint="貸款開始時的本金總額"
        errorMessage={errors?.bus_loan_lease?.amount_of_loan?.message as string}
        {...register("bus_loan_lease.amount_of_loan")}
      />
      <HorizatalInput
        label="年度百分比率(APR)"
        errorMessage={
          errors?.bus_loan_lease?.annual_percentage_rate?.message as string
        }
        hint="包括貸款利率和其他費用，如處理費、服務費等"
        {...register("bus_loan_lease.annual_percentage_rate")}
      />
      <HorizatalInput
        label="首期付款"
        errorMessage={errors?.bus_loan_lease?.down_payment?.message as string}
        hint="貸款開始時的總首期付款金額"
        {...register("bus_loan_lease.down_payment")}
      />
      <HorizatalInput
        label="首期付款日期"
        errorMessage={
          errors?.bus_loan_lease?.first_payment_date?.message as string
        }
        {...register("bus_loan_lease.first_payment_date")}
      />
      <HorizatalInput
        label="月付金額"
        errorMessage={
          errors?.bus_loan_lease?.monthly_payment?.message as string
        }
        hint="每月總支付金額，包括任何稅金和費用"
        {...register("bus_loan_lease.monthly_payment")}
      />
      <HorizatalInput
        label="付款次數"
        errorMessage={
          errors?.bus_loan_lease?.number_of_payments?.message as string
        }
        hint="貸款完全償還前的付款次數 ( 不包括首期付款 )"
        {...register("bus_loan_lease.number_of_payments")}
      />
      <HorizatalInput
        label="貸款結束日期"
        errorMessage={errors?.bus_loan_lease?.loan_end_date?.message as string}
        {...register("bus_loan_lease.loan_end_date")}
      />
      <HorizatalInput
        label="帳號"
        errorMessage={errors?.bus_loan_lease?.account_number?.message as string}
        hint="用於識別與貸款人之間的貸款"
        {...register("bus_loan_lease.account_number")}
      />
      <HorizatalInput
        label="備註"
        errorMessage={
          errors?.bus_loan_lease?.loan_lease_notes?.message as string
        }
        hint="車輛所有者為公司，且車輛貸款 / 租賃的費用為公司支付"
        {...register("bus_loan_lease.loan_lease_notes")}
      />
    </>
  );
};
export default Loan;
