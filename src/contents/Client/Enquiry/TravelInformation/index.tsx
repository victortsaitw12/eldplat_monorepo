import React from "react";
import Collapse from "@components/Collapse";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray
} from "react-hook-form";
import StepArragement from "@components/StepArragement";
import { TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
import { QuotationCreatePayload } from "../type";

interface TravelInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
}
const TravelInformation = ({
  register,
  control,
  errors
}: TravelInformationProps) => {
  const { fields } = useFieldArray({
    name: "order_itinerary_list",
    control
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      {fields.map((item, index) => {
        return (
          <Collapse key={item.id} title="第一天" opened={true}>
            <BodySTY>
              <ItemSTY>
                <div className="item-content">出發時間</div>
                <TextInput
                  {...register(`order_itinerary_list.${index}.departure_time`)}
                  type="time"
                  style={{ flex: "1" }}
                />
                <div className="option-container"></div>
              </ItemSTY>
              <StepArragement
                control={control}
                errors={errors}
                register={register}
                startPointName={`order_itinerary_list.${index}.pickup_location`}
                destinationPointName={`order_itinerary_list.${index}.dropoff_location`}
                middlePointName={`order_itinerary_list.${index}.stopover_addresses`}
              />
            </BodySTY>
          </Collapse>
        );
      })}
      {/* <Collapse title="第一天" opened={true}>
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
      </Collapse> */}
    </div>
  );
};

export default TravelInformation;
