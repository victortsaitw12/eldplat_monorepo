import React from "react";
import Collapse from "@components/Collapse";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
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
  setValue: UseFormSetValue<QuotationCreatePayload>;
}
const TravelInformation = ({
  register,
  control,
  errors,
  setValue
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
          <Collapse
            key={item.id}
            title={`第${index + 1}天 ${item.day_date}`}
            opened={true}
          >
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
    </div>
  );
};

export default TravelInformation;
