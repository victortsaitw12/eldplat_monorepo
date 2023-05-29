import { SubFromProps } from "../type";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import HorizontalSelect from "@components/HookForm/Select/HorizontalSelect";
const Lease = ({
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
        label="供應商"
        name="bus_loan_lease.vendor_no"
        options={[{ label: "加長型", value: "01" }]}
      />
      <HorizatalInput
        label="租賃日期"
        errorMessage={errors?.bus_loan_lease?.date_of_lease?.message as string}
        hint="簽訂租賃協議的日期"
        {...register("bus_loan_lease.date_of_lease")}
      />
      <HorizatalInput
        label="資本化成本"
        errorMessage={
          errors?.bus_loan_lease?.capitalized_cost?.message as string
        }
        hint="車輛總成本，包括任何稅費"
        {...register("bus_loan_lease.capitalized_cost")}
      />
      <HorizatalInput
        label="首期付款"
        errorMessage={errors?.bus_loan_lease?.down_payment?.message as string}
        hint="簽約時應付的金額，或上一輛車的折抵價值"
        {...register("bus_loan_lease.down_payment")}
      />
      <HorizatalInput
        label="首次付款日期"
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
        hint="每月支付的總金額，包括任何稅費"
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
        label="租賃結束日期"
        errorMessage={errors?.bus_loan_lease?.lease_end_date?.message as string}
        {...register("bus_loan_lease.lease_end_date")}
      />
      <HorizatalInput
        label="殘值"
        errorMessage={errors?.bus_loan_lease?.residual_value?.message as string}
        hint="租賃結束時車輛剩餘的價值"
        {...register("bus_loan_lease.residual_value")}
      />
      <HorizatalInput
        label="契約里程限制"
        errorMessage={
          errors?.bus_loan_lease?.contract_mileage_cap?.message as string
        }
        hint="車輛可以行駛的里程數，超過此里程數將產生額外費用"
        {...register("bus_loan_lease.contract_mileage_cap")}
      />
      <HorizatalInput
        label="里程超出費用"
        errorMessage={
          errors?.bus_loan_lease?.excess_mileage_charge?.message as string
        }
        hint="每超出里程限制一英里所收取的費用"
        {...register("bus_loan_lease.excess_mileage_charge")}
      />
      <HorizatalInput
        label="租賃號碼"
        errorMessage={errors?.bus_loan_lease?.lease_number?.message as string}
        hint="用於識別其他系統中的租賃"
        {...register("bus_loan_lease.lease_number")}
      />
      <HorizatalInput
        label="備註"
        errorMessage={
          errors?.bus_loan_lease?.loan_lease_notes?.message as string
        }
        {...register("bus_loan_lease.loan_lease_notes")}
      />
    </>
  );
};
export default Lease;
