import React from "react";
import Collapse from "@components/Collapse";
import StepArragement from "@components/StepArragement";
import { TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
import { QuotationCreatePayload } from "../type";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray
} from "react-hook-form";
interface TravelInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
}
const FlightInformation = ({
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
          <Collapse key={item.id} title="接送行程" opened={true}>
            <BodySTY>
              <ItemSTY>
                <div className="item-content-container">
                  <div className="item-content">
                    <span style={{ color: "#D14343" }}>*</span>接送日期
                  </div>
                  <TextInput
                    type="date"
                    {...register(`order_itinerary_list.${index}.day_date`)}
                    style={{ flex: "1" }}
                  />
                  <div className="option-container"></div>
                </div>
                <div className="item-content-container">
                  <div className="item-content">
                    <span style={{ color: "#D14343" }}>*</span>接送時間
                  </div>
                  <TextInput
                    {...register(
                      `order_itinerary_list.${index}.departure_time`
                    )}
                    type="time"
                    style={{ flex: "1" }}
                  />
                  <div className="option-container"></div>
                </div>
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

export default FlightInformation;
