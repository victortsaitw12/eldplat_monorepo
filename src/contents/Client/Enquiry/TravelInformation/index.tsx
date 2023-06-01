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
      <Collapse title="第一天" opened={true}>
        <BodySTY>
          <ItemSTY>
            <div className="item-content">出發時間</div>
            <TextInput
              {...register("fourthDay.departureTime")}
              style={{ flex: "1" }}
            />
            <div className="option-container"></div>
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
      <Collapse title="第二天">
        <BodySTY>
          <ItemSTY>
            <div className="item-content">出發時間</div>
            <TextInput
              {...register("fourthDay.departureTime")}
              style={{ flex: "1" }}
            />
            <div className="option-container"></div>
          </ItemSTY>
          <StepArragement
            control={control}
            errors={errors}
            register={register}
            startPointName="secondDay.startPoint"
            destinationPointName="secondDay.destinationPoint"
            middlePointName="secondDay.middlePoints"
          />
        </BodySTY>
      </Collapse>
      <Collapse title="第三天">
        <BodySTY>
          <ItemSTY>
            <div className="item-content">出發時間</div>
            <TextInput
              {...register("fourthDay.departureTime")}
              style={{ flex: "1" }}
            />
            <div className="option-container"></div>
          </ItemSTY>
          <StepArragement
            control={control}
            errors={errors}
            register={register}
            startPointName="thirdDay.startPoint"
            destinationPointName="thirdDay.destinationPoint"
            middlePointName="thirdDay.middlePoints"
          />
        </BodySTY>
      </Collapse>
      <Collapse title="第四天">
        <BodySTY>
          <ItemSTY>
            <div className="item-content">出發時間</div>
            <TextInput
              {...register("fourthDay.departureTime")}
              style={{ flex: "1" }}
            />
            <div className="option-container"></div>
          </ItemSTY>
          <StepArragement
            control={control}
            errors={errors}
            register={register}
            startPointName="fourthDay.startPoint"
            destinationPointName="fourthDay.destinationPoint"
            middlePointName="fourthDay.middlePoints"
          />
        </BodySTY>
      </Collapse>
    </form>
  );
};

export default TravelInformation;
