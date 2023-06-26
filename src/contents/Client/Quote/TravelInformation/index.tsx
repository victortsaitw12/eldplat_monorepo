import React, { useEffect } from "react";
import Collapse from "@components/Collapse";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
  useWatch
} from "react-hook-form";
import StepArragement from "@components/StepArragement";
import { TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY, CollapseCardSTY } from "./style";
import { QuotationCreatePayload } from "../type";

interface TravelInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
  setValue: UseFormSetValue<QuotationCreatePayload>;
  validateSubForm: (data: { valid: boolean; errorMessage: string }) => void;
}
const TravelInformation = ({
  register,
  control,
  errors,
  setValue,
  validateSubForm
}: TravelInformationProps) => {
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
    let isValid = true;
    console.log("order_itinerary_list", order_itinerary_list);
    order_itinerary_list.forEach((item) => {
      console.log("item", item);
      item.stopover_address_list.forEach((address) => {
        console.log("address.stopover_address", address.stopover_address);
        if (address.stopover_address.trim() === "") {
          console.log("有空!");
          isValid = false;
          validateSubForm({
            valid: false,
            errorMessage: "中途點地址不得為空"
          });
          return;
        }
      });
    });
    if (isValid) validateSubForm({ valid: true, errorMessage: "" });
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
            <Collapse title={`第${index + 1}天 ${item.day_date}`} opened={true}>
              <BodySTY>
                <ItemSTY>
                  <div className="item-content">出發時間</div>
                  <TextInput
                    {...register(
                      `order_itinerary_list.${index}.departure_time`
                    )}
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
                  middlePointName={`order_itinerary_list.${index}.stopover_address_list`}
                />
              </BodySTY>
            </Collapse>
          </CollapseCardSTY>
        );
      })}
    </div>
  );
};

export default TravelInformation;
