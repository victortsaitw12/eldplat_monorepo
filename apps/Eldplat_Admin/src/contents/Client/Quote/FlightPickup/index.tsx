import { StyledForm, StyledHeader, StyledButton, StyledCard } from "./style";
import { useRouter } from "next/router";
import { TextInput } from "evergreen-ui";
import { useForm } from "react-hook-form";
import { forwardRef, useState, useEffect } from "react";
import Collapse from "@components/Collapse";
type FormValues = {
  flightDate: string;
  flightNo: string;
  airport: string;
  terminal: string;
  flightTime: string;
  airline: string;
};

interface Props {
  flightDate?: string;
  flightNo?: string;
  airport?: string;
  terminal?: string;
  flightTime?: string;
  airline?: string;
  quote_type?: string;
  updateIsFilled: (value: boolean) => void;
}

const FlightPickup = forwardRef<HTMLButtonElement, Props>(function CustomPickup(
  {
    flightDate,
    flightNo,
    airport,
    terminal,
    flightTime,
    airline,
    quote_type,
    updateIsFilled
  },
  formButtonRef
) {
  console.log("quote_type:", quote_type);
  const [currentType, setCurrentType] = useState<"pickUp" | "dropOff">(
    quote_type === "2" ? "pickUp" : "dropOff" // 2: 接機, 3: 送機
  );
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
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
    const { flightDate, flightNo, airport, terminal, flightTime, airline } =
      data;
    router.push({
      pathname: "/client/quote/edit",
      query: {
        flightDate,
        flightNo,
        flightTime,
        airport,
        terminal,
        airline,
        type: currentType
      }
    });
  };
  //
  useEffect(() => {
    const subscription = watch((value) => {
      updateIsFilled(
        !!value.flightDate && !!value.flightNo && !!value.flightTime
      );
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  //
  useEffect(() => {
    if (flightDate) setValue("flightDate", flightDate);
    if (flightNo) setValue("flightNo", flightNo);
    if (airport) setValue("airport", airport);
    if (terminal) setValue("terminal", terminal);
    if (flightTime) setValue("flightTime", flightTime);
    if (airline) setValue("airline", airline);
  }, []);
  //
  return (
    <>
      <StyledHeader>
        <StyledButton
          onClick={() => {
            if (currentType === "pickUp") {
              reset();
              setCurrentType("dropOff");
            }
          }}
          isSelected={currentType === "dropOff"}
        >
          送機
        </StyledButton>
        <StyledButton
          onClick={() => {
            if (currentType === "dropOff") {
              reset();
              setCurrentType("pickUp");
            }
          }}
          isSelected={currentType === "pickUp"}
        >
          接機
        </StyledButton>
      </StyledHeader>
      <StyledCard>
        <Collapse title="航班資訊" viewOnly opened={true}>
          <StyledForm onSubmit={handleSubmit(submitFormHandler)}>
            <div className="form_item">
              <label className="form_sub_item">
                <div>
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>航班日期</span>
                </div>
                <TextInput
                  type="date"
                  {...register("flightDate", {
                    required: true
                  })}
                  isInvalid={!!errors.flightDate}
                />
              </label>
              <label className="form_sub_item">
                <div>
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>航班編號</span>
                </div>
                <TextInput
                  {...register("flightNo", {
                    required: true
                  })}
                  isInvalid={!!errors.flightNo}
                />
              </label>
            </div>

            <div className="form_item">
              <label className="form_sub_item">
                <div>
                  <span>機場</span>
                </div>
                <TextInput {...register("airport")} />
              </label>
              <label className="form_sub_item">
                <div>
                  <span>航廈</span>
                </div>
                <TextInput {...register("terminal")} />
              </label>
            </div>
            <div className="form_item">
              <label className="form_sub_item">
                <div>
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>
                    航班{currentType === "pickUp" ? "抵達" : "出發"}時間
                  </span>
                </div>
                <TextInput
                  type="time"
                  {...register("flightTime", {
                    required: true
                  })}
                  isInvalid={!!errors.flightTime}
                />
              </label>
              <label className="form_sub_item">
                <div>
                  <span>航空公司</span>
                </div>
                <TextInput {...register("airline")} />
              </label>
            </div>

            <button
              type="submit"
              style={{ display: "none" }}
              ref={formButtonRef}
            >
              submit
            </button>
          </StyledForm>
        </Collapse>
      </StyledCard>
    </>
  );
});
export default FlightPickup;
