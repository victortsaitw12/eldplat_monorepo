import React from "react";
import Collapse from "@components/Collapse";
import { useForm } from "react-hook-form";
import StepArragement from "@components/StepArragement";
import { TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
type SchduleType = {
  departureTime: string;
  startPoint: { location: string };
  destinationPoint: { location: string };
  middlePoints: Array<{ location: string }>;
};

type FormValues = {
  firstDay: SchduleType;
  secondDay: SchduleType;
  thirdDay: SchduleType;
  fourthDay: SchduleType;
};
const FlightInformation = () => {
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
      <Collapse title="接送行程" opened={true}>
        <BodySTY>
          <ItemSTY>
            <div className="item-content-container">
              <div className="item-content">
                <span style={{ color: "#D14343" }}>*</span>接送日期
              </div>
              <TextInput
                type="date"
                {...register("fourthDay.departureTime")}
                style={{ flex: "1" }}
              />
              <div className="option-container"></div>
            </div>
            <div className="item-content-container">
              <div className="item-content">
                <span style={{ color: "#D14343" }}>*</span>接送時間
              </div>
              <TextInput
                {...register("fourthDay.departureTime")}
                style={{ flex: "1" }}
              />
              <div className="option-container"></div>
            </div>
          </ItemSTY>
          <StepArragement
            control={control}
            errors={errors}
            register={register}
            startPointName="firstDay.startPoint"
            destinationPointName="firstDay.destinationPoint"
            middlePointName="firstDay.middlePoints"
          />
        </BodySTY>
      </Collapse>
    </form>
  );
};

export default FlightInformation;
