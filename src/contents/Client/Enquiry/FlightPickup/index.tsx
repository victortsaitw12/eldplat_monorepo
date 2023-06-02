import { StyledForm, StyledHeader, StyledButton } from "./style";
import { useRouter } from "next/router";
import { TextInput, Select, Button } from "evergreen-ui";
import { useForm } from "react-hook-form";
import { forwardRef, useState } from "react";
import Collapse from "@components/Collapse";
type FormValues = {
  flightDate: string;
  flightNo: string;
  airport: string;
  terminal: string;
  flightTime: string;
  airline: string;
};

const CustomPickup = forwardRef<HTMLButtonElement>(function CustomPickup(
  {},
  formButtonRef
) {
  const [purpose, setPurpose] = useState<"pickUp" | "dropOff">("dropOff"); // ["pickUp", "dropOff"
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      flightDate: "",
      flightNo: "",
      airport: "",
      terminal: "",
      flightTime: "",
      airline: ""
    }
  });
  const submitFormHandler = (data: FormValues) => {
    console.log(data);
    const { flightDate, airport } = data;
    router.push({
      pathname: "/client/enquiry/edit",
      query: {
        flightDate,
        airport,
        type: purpose
      }
    });
  };
  return (
    <>
      <StyledHeader>
        <StyledButton
          onClick={() => {
            setPurpose("dropOff");
          }}
          isSelected={purpose === "dropOff"}
        >
          送機
        </StyledButton>
        <StyledButton
          onClick={() => {
            setPurpose("pickUp");
          }}
          isSelected={purpose === "pickUp"}
        >
          接機
        </StyledButton>
      </StyledHeader>
      <Collapse title="航班資訊" viewOnly opened={true}>
        <StyledForm onSubmit={handleSubmit(submitFormHandler)}>
          <div className="form-item">
            <label className="form-sub-item">
              <div>
                <span style={{ color: "#D14343" }}>*</span>
                <span>航班日期</span>
              </div>
              <TextInput type="date" {...register("flightDate")} />
            </label>
            <label className="form-sub-item">
              <div>
                <span style={{ color: "#D14343" }}>*</span>
                <span>航班編號</span>
              </div>
              <TextInput {...register("flightNo")} />
            </label>
          </div>
          <div className="form-item">
            <label className="form-sub-item">
              <div>
                <span style={{ color: "#D14343" }}>*</span>
                <span>機場</span>
              </div>
              <TextInput {...register("airport")} />
            </label>
            <label className="form-sub-item">
              <div>
                <span style={{ color: "#D14343" }}>*</span>
                <span>航廈</span>
              </div>
              <TextInput {...register("terminal")} />
            </label>
          </div>
          <div className="form-item">
            <label className="form-sub-item">
              <div>
                <span style={{ color: "#D14343" }}>*</span>
                <span>航班{purpose === "pickUp" ? "抵達" : "出發"}時間</span>
              </div>
              <TextInput type="date" {...register("flightTime")} />
            </label>
            <label className="form-sub-item">
              <div>
                <span>航空公司</span>
              </div>
              <TextInput {...register("airline")} />
            </label>
          </div>
          <button type="submit" style={{ display: "none" }} ref={formButtonRef}>
            submit
          </button>
        </StyledForm>
      </Collapse>
    </>
  );
});
export default CustomPickup;
