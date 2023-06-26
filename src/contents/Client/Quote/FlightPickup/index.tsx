import { StyledForm, StyledHeader, StyledButton, StyledCard } from "./style";
import { useRouter } from "next/router";
import { TextInput } from "evergreen-ui";
import { useForm } from "react-hook-form";
import { forwardRef, useState, useEffect } from "react";
import Collapse from "@components/Collapse";
import { formatDateToString } from "@utils/calculateDate";
import { getFakeFlightData } from "@services/client/getFlightData";
import Modal from "@components/LoadingModal";
import LoadingSpinner from "@components/LoadingSpinner";
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
}

const FlightPickup = forwardRef<HTMLButtonElement, Props>(function CustomPickup(
  { flightDate, flightNo, airport, terminal, flightTime, airline },
  formButtonRef
) {
  const [currentType, setCurrentType] = useState<"pickUp" | "dropOff">(
    "dropOff"
  );
  const [isLoadingAirport, setIsLoadingAirport] = useState(false);
  const [isAfterFetch, setIsAfterFetch] = useState(flightNo ? true : false);
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
      flightDate: formatDateToString(new Date()),
      flightNo: "",
      airport: "",
      terminal: "",
      flightTime: "",
      airline: ""
    }
  });
  //
  const { flightDate: watchFlightDate, flightNo: watchFlightNo } = watch();
  //
  async function updateFlightData() {
    const abortController = new AbortController();
    if (!watchFlightDate || !watchFlightNo) {
      setIsAfterFetch(false);
      return;
    }

    setIsLoadingAirport(true);
    getFakeFlightData(abortController)
      .then((res) => {
        setValue("airport", res.airport);
        setValue("terminal", res.terminal);
        setValue("flightTime", res.flightTime);
        setValue("airline", res.airline);
        setIsAfterFetch(true);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoadingAirport(false);
      });
  }
  //
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
    if (flightDate && flightNo) {
      setValue("flightDate", flightDate);
      setValue("flightNo", flightNo);
      if (airport) setValue("airport", airport);
      if (terminal) setValue("terminal", terminal);
      if (flightTime) setValue("flightTime", flightTime);
      if (airline) setValue("airline", airline);
      setIsAfterFetch(true);
    }
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
              setIsAfterFetch(false);
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
              setIsAfterFetch(false);
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
            <div className="form-item">
              <label className="form-sub-item">
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
              <label className="form-sub-item">
                <div>
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>航班編號</span>
                </div>
                <TextInput
                  {...register("flightNo", {
                    required: true,
                    onBlur: () => {
                      updateFlightData();
                    }
                  })}
                  isInvalid={!!errors.flightNo}
                />
              </label>
            </div>
            {isLoadingAirport ? (
              <Modal>
                <LoadingSpinner />
              </Modal>
            ) : (
              isAfterFetch && (
                <>
                  <div className="form-item">
                    <label className="form-sub-item">
                      <div>
                        <span style={{ color: "#D14343" }}>*</span>
                        <span>機場</span>
                      </div>
                      <TextInput
                        {...register("airport", {
                          required: true
                        })}
                        isInvalid={!!errors.airport}
                      />
                    </label>
                    <label className="form-sub-item">
                      <div>
                        <span style={{ color: "#D14343" }}>*</span>
                        <span>航廈</span>
                      </div>
                      <TextInput
                        {...register("terminal", {
                          required: true
                        })}
                        isInvalid={!!errors.terminal}
                      />
                    </label>
                  </div>
                  <div className="form-item">
                    <label className="form-sub-item">
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
                    <label className="form-sub-item">
                      <div>
                        <span>航空公司</span>
                      </div>
                      <TextInput {...register("airline")} />
                    </label>
                  </div>
                </>
              )
            )}

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
