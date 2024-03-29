import React from "react";
import Collapse from "@components/Collapse";
import { useFormContext, useFieldArray, useWatch } from "react-hook-form";
import StepArragement from "@components/StepArragement";
import { TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY, CollapseCardSTY } from "./style";
import { QuotationCreatePayload } from "../type";
import Section from "@contents/Client/Quote/Section";

const TravelInformation = () => {
  const {
    control,
    register,
    formState: { errors }
  } = useFormContext<QuotationCreatePayload>();
  const { fields } = useFieldArray({
    name: "order_itinerary_list",
    control
  });
  useWatch({
    control,
    name: "order_itinerary_list"
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      <Section title="行程資訊">
        {fields.map((item, index) => {
          return (
            <CollapseCardSTY key={item.id}>
              <Collapse title={`第${index + 1}天 ${item.day_date}`} opened={true}>
                <BodySTY>
                  {index === fields.length - 1 ?
                    <>
                      <StepArragement
                        control={control}
                        errors={errors}
                        register={register}
                        startPointName={`order_itinerary_list.${index}.pickup_location`}
                        destinationPointName={`order_itinerary_list.${index}.dropoff_location`}
                        middlePointName={`order_itinerary_list.${index}.stopover_address_list`}
                      />
                      <ItemSTY>
                        <div className="item_content">抵達時間</div>
                        <TextInput
                          {...register(
                            `order_itinerary_list.${index}.arrive_time`
                          )}
                          type="time"
                          style={{ flex: "1" }}
                        />
                          <div className="option_container"></div>
                      </ItemSTY>
                    </>
                   :
                   <>
                    <ItemSTY>
                      <div className="item_content">出發時間</div>
                      <TextInput
                        {...register(
                          `order_itinerary_list.${index}.departure_time`
                        )}
                        type="time"
                        style={{ flex: "1" }}
                      />
                        <div className="option_container"></div>
                    </ItemSTY>
                    <StepArragement
                      control={control}
                      errors={errors}
                      register={register}
                      startPointName={`order_itinerary_list.${index}.pickup_location`}
                      destinationPointName={`order_itinerary_list.${index}.dropoff_location`}
                      middlePointName={`order_itinerary_list.${index}.stopover_address_list`}
                    />
                  </>
                  }
 
                </BodySTY>
              </Collapse>
            </CollapseCardSTY>
          );
        })}
      </Section>
    </div>
  );
};

export default TravelInformation;
