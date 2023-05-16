import { SubFromProps } from "../type";
import Select from "@components/HookForm/Select";
import HorizatalInput from "@components/HookForm/Input/HorizatalInput";
const Loan = ({
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) => {
  return (
    <>
      <div>
        <div>貸款方</div>
        <Select
          control={control}
          isDisabled={isDisabled}
          name="bus_loan_lease.vendor_no"
          options={[{ label: "大大國際", value: "01" }]}
        />
      </div>
      <HorizatalInput
        label="貸款日期"
        errorMessage={errors?.bus_loan_lease?.date_of_loan?.message as string}
        {...register("bus_loan_lease.date_of_loan", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="貸款金額"
        errorMessage={errors?.bus_loan_lease?.amount_of_loan?.message as string}
        {...register("bus_loan_lease.amount_of_loan", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="年度百分比率(APR)"
        errorMessage={
          errors?.bus_loan_lease?.annual_percentage_rate?.message as string
        }
        {...register("bus_loan_lease.annual_percentage_rate", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="首期付款"
        errorMessage={errors?.bus_loan_lease?.down_payment?.message as string}
        {...register("bus_loan_lease.down_payment", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="首期付款日期"
        errorMessage={
          errors?.bus_loan_lease?.first_payment_date?.message as string
        }
        {...register("bus_loan_lease.first_payment_date", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="月付金額"
        errorMessage={
          errors?.bus_loan_lease?.monthly_payment?.message as string
        }
        {...register("bus_loan_lease.monthly_payment", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="付款次數"
        errorMessage={
          errors?.bus_loan_lease?.number_of_payments?.message as string
        }
        {...register("bus_loan_lease.number_of_payments", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="貸款結束日期"
        errorMessage={errors?.bus_loan_lease?.loan_end_date?.message as string}
        {...register("bus_loan_lease.loan_end_date", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="帳號"
        errorMessage={errors?.bus_loan_lease?.account_number?.message as string}
        {...register("bus_loan_lease.account_number", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="備註"
        errorMessage={
          errors?.bus_loan_lease?.loan_lease_notes?.message as string
        }
        {...register("bus_loan_lease.loan_lease_notes", {
          required: "請輸入車輛名稱"
        })}
      />
    </>
  );
};
export default Loan;
