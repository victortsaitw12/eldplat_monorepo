import Collapse from "@components/Collapse";
import { BodySTY, StyledForm } from "./style";
import { useRouter } from "next/router";
import { TextInput, Select, Button } from "evergreen-ui";
import { useForm } from "react-hook-form";
import { useRef } from "react";
type FormValues = {
  departureDate: string;
  returnDate: string;
  purpose: string;
};
const CustomPickup = () => {
  const router = useRouter();
  const formButtonRef = useRef<HTMLButtonElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      departureDate: "",
      returnDate: "",
      purpose: ""
    }
  });
  const submitFormHandler = (data: FormValues) => {
    console.log(data);
    const { departureDate, purpose, returnDate } = data;
    console.log(departureDate, purpose, returnDate);
    router.push({
      pathname: "/client/enquiry/custom-pickup/edit",
      query: {
        departureDate,
        returnDate,
        purpose
      }
    });
  };
  return (
    <BodySTY>
      <Collapse title="客製包車" viewOnly opened={true}>
        <StyledForm onSubmit={handleSubmit(submitFormHandler)}>
          <label className="form-item">
            <div>
              <span style={{ color: "#D14343" }}>*</span>
              <span>出發日期</span>
            </div>
            <TextInput type="date" {...register("departureDate")} />
          </label>
          <label className="form-item">
            <div>
              <span style={{ color: "#D14343" }}>*</span>
              <span>回程日期</span>
            </div>
            <TextInput type="date" {...register("returnDate")} />
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
      <div>注意事項</div>
      <Button
        appearance="primary"
        onClick={() => {
          formButtonRef.current?.click();
        }}
      >
        前往訂車
      </Button>
    </BodySTY>
  );
};
export default CustomPickup;
