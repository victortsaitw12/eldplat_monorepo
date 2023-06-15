import { StyledForm } from "./style";
import { useRouter } from "next/router";
import { TextInput, Select } from "evergreen-ui";
import { useForm, Controller } from "react-hook-form";
import React, { forwardRef, useState } from "react";
import Collapse from "@components/Collapse";
import { formatDateToString } from "@utils/calculateDate";
type FormValues = {
  departureDate: string;
  returnDate: string;
  purpose: string;
};
const CustomPickup = forwardRef<HTMLButtonElement>(function CustomPickup(
  {},
  formButtonRef
) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, dirtyFields }
  } = useForm<FormValues>({
    defaultValues: {
      departureDate: formatDateToString(new Date()),
      returnDate: "",
      purpose: ""
    }
  });
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
    <Collapse title="客製包車" viewOnly opened={true}>
      <StyledForm onSubmit={handleSubmit(submitFormHandler)}>
        <label className="form-item">
          <div>
            <span style={{ color: "#D14343" }}>*</span>
            <span>出發日期</span>
          </div>
          <Controller
            control={control}
            name="departureDate"
            render={({ field: { onChange, value, ref } }) => (
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
          <div>
            <span style={{ color: "#D14343" }}>*</span>
            <span>回程日期</span>
          </div>
          <TextInput
            type="date"
            {...register("returnDate", { required: true })}
            min={minDate}
            isInvalid={!!errors.returnDate}
          />
        </label>
        <label className="form-item">
          <div>
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
  );
});
export default CustomPickup;
