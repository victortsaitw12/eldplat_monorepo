import React, { useEffect } from "react";
import Collapse from "@components/Collapse";
import StepArragement from "@components/StepArragement";
import { TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
import { QuotationCreatePayload } from "../type";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
  useWatch
} from "react-hook-form";
interface TravelInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
  setValue: UseFormSetValue<QuotationCreatePayload>;
  type: string;
  flightTime?: string;
  validateSubForm: (data: { valid: boolean; errorMessage: string }) => void;
}
const FlightInformation = ({
  register,
  control,
  errors,
  type,
  flightTime,
  validateSubForm
}: TravelInformationProps) => {
  const { fields } = useFieldArray({
    name: "order_itinerary_list",
    control
  });
  console.log("type", type);
  console.log("flightTime", flightTime);
  const departure_time = useWatch({
    control,
    name: "order_itinerary_list.0.departure_time"
  });
  useEffect(() => {
    const flightTimeHour = Number(flightTime?.split(":")[0]);
    const departureTimeHour = Number(departure_time?.split(":")[0]);
    if (type === "dropOff" && flightTimeHour - departureTimeHour < 2) {
      validateSubForm({
        valid: false,
        errorMessage: `起飛時間為:${flightTime},請至少於起飛前兩小時出發!`
      });
      return;
    }
    // else if(type === "pickUp" && departureTimeHour - flightTimeHour < 2){validateSubForm({
    //   valid: false,
    //   errorMessage: `起飛時間為:${flightTime},請至少於起飛前兩小時出發!`
    // });
    // return}
    validateSubForm({ valid: true, errorMessage: "" });
  }, [departure_time]);
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
                    min={flightTime}
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
                withStartPoint={type === "pickUp"}
                withDestinationPoint={type === "dropOff"}
              />
            </BodySTY>
          </Collapse>
        );
      })}
    </div>
  );
};

export default FlightInformation;
