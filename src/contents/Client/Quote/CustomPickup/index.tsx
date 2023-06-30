import React, { forwardRef, useState, useEffect } from "react";
import { StyledForm, StyledCard } from "./style";
import { useRouter } from "next/router";
import { TextInput, Select } from "evergreen-ui";
import { useForm, Controller } from "react-hook-form";
import Collapse from "@components/Collapse";
import { formatDateToString } from "@utils/calculateDate";
type FormValues = {
  departureDate: string;
  returnDate: string;
  purpose: string;
};
interface Props {
  departureDate?: string;
  returnDate?: string;
  purpose?: string;
  updateIsFilled: (value: boolean) => void;
}
const CustomPickup = forwardRef<HTMLButtonElement, Props>(function CustomPickup(
  { departureDate, returnDate, purpose, updateIsFilled },
  formButtonRef
) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      departureDate: formatDateToString(new Date()),
      returnDate: "",
      purpose: ""
    }
  });

  useEffect(() => {
    console.log("custom pickup useEffect!");
    const subscription = watch((value) => {
      console.log(value);
      updateIsFilled(!!value.departureDate && !!value.returnDate);
    });
    return () => subscription.unsubscribe();
  }, [watch, updateIsFilled]);
  useEffect(() => {
    if (departureDate) setValue("departureDate", departureDate);
    if (returnDate) setValue("returnDate", returnDate);
    if (purpose) setValue("purpose", purpose);
  }, []);
  const [minDate, setMinDate] = useState<string>(
    formatDateToString(new Date())
  );
  const submitFormHandler = (data: FormValues) => {
    const { departureDate, purpose, returnDate } = data;
    router.push({
      pathname: "/client/quote/edit",
      query: {
        departureDate,
        returnDate,
        purpose,
        type: "custom"
      }
    });
  };
  return (
    <StyledCard>
      <Collapse title="客製包車" viewOnly opened={true}>
        <StyledForm onSubmit={handleSubmit(submitFormHandler)}>
          <label className="form-item">
            <div className="item-title">
              <span style={{ color: "#D14343" }}>*</span>
              <span>出發日期</span>
            </div>
            <Controller
              control={control}
              name="departureDate"
              rules={{ required: true }}
              render={({ field: { onChange, ref } }) => (
                <TextInput
                  type="date"
                  ref={ref}
                  value={minDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMinDate(e.target.value);
                    onChange(e.target.value);
                  }}
                />
              )}
            />
          </label>
          <label className="form-item">
            <div className="item-title">
              <span style={{ color: "#D14343" }}>*</span>
              <span>回程日期</span>
            </div>
            <TextInput
              type="date"
              {...register("returnDate", { required: "不可空白！" })}
              min={minDate}
              isInvalid={!!errors.returnDate}
            />
          </label>
          <label className="form-item">
            <div className="item-title">
              <span>訂車用途</span>
            </div>
            <Select {...register("purpose")}>
              <option value="01">學校/企業參訪</option>
              <option value="02">旅遊</option>
              <option value="03">戶外教學</option>
              <option value="04">企業教育訓練</option>
              <option value="05">員工旅遊</option>
              <option value="06">進香團</option>
              <option value="07">其他</option>
            </Select>
          </label>
          <button type="submit" style={{ display: "none" }} ref={formButtonRef}>
            submit
          </button>
        </StyledForm>
      </Collapse>
    </StyledCard>
  );
});
export default CustomPickup;
