import React, { useEffect } from "react";
import Collapse from "@components/Collapse";
import StepArragement from "@components/StepArragement";
import { TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY, CollapseCardSTY } from "./style";
import { QuotationCreatePayload } from "../type";
import { useFieldArray, useWatch, useFormContext } from "react-hook-form";
interface TravelInformationProps {
  type: string;
  flightTime?: string;
  validateSubForm: (data: { valid: boolean; errorMessage: string }) => void;
}
const FlightInformation = ({
  type,
  flightTime,
  validateSubForm
}: TravelInformationProps) => {
  const {
    control,
    register,
    formState: { errors }
  } = useFormContext<QuotationCreatePayload>();
  const { fields } = useFieldArray({
    name: "order_itinerary_list",
    control
  });
  const order_itinerary_list = useWatch({
    control,
    name: "order_itinerary_list"
  });
  useEffect(() => {
    if (!order_itinerary_list) return;
    const flightTimeHour = Number(flightTime?.split(":")[0]);
    let isValid = true;
    order_itinerary_list.forEach((item) => {
      const departureTimeHour = Number(item.departure_time.split(":")[0]);
      if (type === "dropOff" && flightTimeHour - departureTimeHour < 2) {
        isValid = false;
        validateSubForm({
          valid: false,
          errorMessage: `起飛時間為：${flightTime}，請至少於起飛前兩小時出發！`
        });
        return;
      } else if (type === "pickUp" && departureTimeHour - flightTimeHour < 0) {
        isValid = false;
        validateSubForm({
          valid: false,
          errorMessage: `接機時間為:${flightTime}，請選擇合理的時間！`
        });
        return;
      }
    });
    if (isValid) validateSubForm({ valid: true, errorMessage: "" });
    return () => {
      validateSubForm({ valid: true, errorMessage: "" });
    };
  }, [order_itinerary_list]);
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
          <CollapseCardSTY key={item.id}>
            <Collapse title="行程資訊" opened={true}>
              <BodySTY>
                <ItemSTY>
                  <div className="item_content_container">
                    <div className="item_content">
                      <span style={{ color: "#D14343" }}>*</span>接送日期
                    </div>
                    <TextInput
                      type="date"
                      {...register(`order_itinerary_list.${index}.day_date`)}
                      style={{ flex: "1" }}
                    />
                    <div className="option_container"></div>
                  </div>
                  <div className="item_content_container">
                    <div className="item_content">
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
                    <div className="option_container"></div>
                  </div>
                </ItemSTY>
                <StepArragement
                  control={control}
                  errors={errors}
                  register={register}
                  startPointName={`order_itinerary_list.${index}.pickup_location`}
                  destinationPointName={`order_itinerary_list.${index}.dropoff_location`}
                  middlePointName={`order_itinerary_list.${index}.stopover_address_list`}
                  withStartPoint={type === "pickUp"}
                  withDestinationPoint={type === "dropOff"}
                />
              </BodySTY>
            </Collapse>
          </CollapseCardSTY>
        );
      })}
    </div>
  );
};

export default FlightInformation;
