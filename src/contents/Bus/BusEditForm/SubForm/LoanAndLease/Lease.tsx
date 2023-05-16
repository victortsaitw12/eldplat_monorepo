import { SubFromProps } from "../type";
import Select from "@components/HookForm/Select";
import HorizatalInput from "@components/HookForm/Input/HorizatalInput";
const Lease = ({
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) => {
  return (
    <>
      <div>
        <div>供應商</div>
        <Select
          control={control}
          isDisabled={isDisabled}
          name="bus_loan_lease.vendor_no"
          options={[{ label: "加長型", value: "01" }]}
        />
      </div>
      <HorizatalInput
        label="租賃日期"
        errorMessage={errors?.bus_loan_lease?.date_of_lease?.message as string}
        {...register("bus_loan_lease.date_of_lease", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="資本化成本"
        errorMessage={
          errors?.bus_loan_lease?.capitalized_cost?.message as string
        }
        {...register("bus_loan_lease.capitalized_cost", {
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
        label="首次付款日期"
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
        label="租賃結束日期"
        errorMessage={errors?.bus_loan_lease?.lease_end_date?.message as string}
        {...register("bus_loan_lease.lease_end_date", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="殘值"
        errorMessage={errors?.bus_loan_lease?.residual_value?.message as string}
        {...register("bus_loan_lease.residual_value", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="契約里程限制"
        errorMessage={
          errors?.bus_loan_lease?.contract_mileage_cap?.message as string
        }
        {...register("bus_loan_lease.contract_mileage_cap", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="里程超出費用"
        errorMessage={
          errors?.bus_loan_lease?.excess_mileage_charge?.message as string
        }
        {...register("bus_loan_lease.excess_mileage_charge", {
          required: "請輸入車輛名稱"
        })}
      />
      <HorizatalInput
        label="租賃號碼"
        errorMessage={errors?.bus_loan_lease?.lease_number?.message as string}
        {...register("bus_loan_lease.lease_number", {
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
export default Lease;
