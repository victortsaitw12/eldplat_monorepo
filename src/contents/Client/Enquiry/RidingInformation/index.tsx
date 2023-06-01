import React from "react";
import Collapse from "@components/Collapse";
import { useForm } from "react-hook-form";
import { TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
import CounterInput from "@components/CounterInput";
type SchduleType = {
  departureTime: string;
  startPoint: { location: string };
  destinationPoint: { location: string };
  middlePoints: Array<{ location: string }>;
};

type FormValues = {
  passengerCount: {
    adult: number;
    child: number;
    baby: number;
  };
  luggageCount: {
    checkLuggage: number;
    handLuggage: number;
  };
  largeBus: {
    large1: number;
    large2: number;
  };
  mediumBus: {
    medium1: number;
    medium2: number;
  };
  smallBus: {
    small1: number;
  };
};
const TravelInformation = () => {
  const {
    control,
    register,
    formState: { errors }
  } = useForm<FormValues>({});
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      <Collapse title="乘車資訊" opened={true}>
        <BodySTY>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              padding: "0px",
              gap: "40px"
            }}
          >
            <div
              style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "20px"
              }}
            >
              <div style={{ color: "#567190", fontWeight: "700" }}>
                <span style={{ color: "#D14343" }}>*</span>
                <span>乘車數量</span>
              </div>
              <CounterInput
                register={register}
                label="成人"
                inpurName="passengerCount.adult"
              />
              <CounterInput
                register={register}
                label="兒童(2~4歲)"
                inpurName="passengerCount.child"
              />
              <CounterInput
                register={register}
                label="嬰兒(0~1歲)"
                inpurName="passengerCount.baby"
              />
            </div>
            <div
              style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0px",
                gap: "20px"
              }}
            >
              <div style={{ color: "#567190", fontWeight: "700" }}>
                <span>行李件數</span>
              </div>
              <CounterInput
                register={register}
                label="託運行李(21吋以上)"
                inpurName="luggageCount.checkLuggage"
              />
              <CounterInput
                register={register}
                label="手提行李(20吋以下)"
                inpurName="luggageCount.handLuggage"
              />
            </div>
          </div>
          <div style={{ color: "#567190", fontWeight: "700" }}>
            <span style={{ color: "#D14343" }}>*</span>
            <span>車型及數量</span>
          </div>
          <Collapse title="大型巴士(28~43人)" color="#EEF8F4">
            <div>
              <CounterInput
                register={register}
                label="車輛名稱(35~43人)"
                inpurName="largeBus.large1"
              />
              <CounterInput
                register={register}
                label="車輛名稱(28~34人)"
                inpurName="largeBus.large2"
              />
            </div>
          </Collapse>
          <Collapse title="中型巴士(10~28人)" color="#EEF8F4">
            <div>
              <CounterInput
                register={register}
                label="車輛名稱(21~25人)"
                inpurName="mediumBus.medium1"
              />
              <CounterInput
                register={register}
                label="車輛名稱(10~21人)"
                inpurName="mediumBus.medium2"
              />
            </div>
          </Collapse>
          <Collapse title="小型巴士(9人以下)" color="#EEF8F4">
            <div>
              <CounterInput
                register={register}
                label="車輛名稱(9人)"
                inpurName="smallBus.small1"
              />
            </div>
          </Collapse>
        </BodySTY>
      </Collapse>
    </form>
  );
};

export default TravelInformation;
