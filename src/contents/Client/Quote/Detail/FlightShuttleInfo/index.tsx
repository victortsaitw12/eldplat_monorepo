import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import {
  Pane,
  TimeIcon,
  TrashIcon,
  Button,
  SmallPlusIcon,
  TextInput
} from "evergreen-ui";
import Collapse from "@components/Collapse";
import ScheduleList from "@components/ScheduleList";
import DetailItem from "@components/DetailList/DetailItem";
import { BodySTY } from "./style";
import dayjs from "dayjs";
interface I_Props {
  quote_no?: string;
  isEdit: boolean;
  arrayName: string;
}

const FlightShuttleInfo = ({ quote_no, isEdit, arrayName }: I_Props) => {
  const { register, control, getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: arrayName
  });
  const r_list = (fields: any[]) => {
    console.log("fields", fields);
    return fields.map((child, i) => (
      <Collapse opened={true} key={i} title="接送行程">
        <Pane style={{ padding: "20px" }}>
          <span className="detail-with-icon">
            <TimeIcon color="#8EA8C7" size={11} />
            <DetailItem
              title="接送日期"
              value={
                isEdit ? (
                  <TextInput
                    type="time"
                    {...register(arrayName + "[" + i + "]" + ".day_date")}
                  />
                ) : (
                  child.day_date.split("T")[0] || "-"
                )
              }
            />
          </span>
          <span className="detail-with-icon">
            <TimeIcon color="#8EA8C7" size={11} />
            <DetailItem
              title="接送時間"
              value={
                isEdit ? (
                  <TextInput
                    type="time"
                    {...register(arrayName + "[" + i + "]" + ".departure_time")}
                  />
                ) : (
                  child.departure_time || "-"
                )
              }
            />
          </span>
          <ScheduleList
            dayIndex={i}
            fatherArrayName={arrayName}
            arrayName="stopover_address_list"
            register={register}
            isEdit={isEdit}
            disabledFirst={false}
            control={control}
            pickup_location={child.pickup_location}
            dropoff_location={child.dropoff_location}
          />
        </Pane>
      </Collapse>
    ));
  };
  return (
    <BodySTY>
      {r_list(fields)}
      {isEdit && (
        <Pane className="add_day_container">
          <Button
            onClick={() => {
              const lastDate = getValues(
                "order_itinerary_list[" + (fields.length - 1) + "].day_date"
              );
              append({
                quote_no: quote_no,
                day_number: fields.length + 1,
                day_date: dayjs(lastDate)
                  .add(1, "day")
                  .format("YYYY-MM-DDTHH:mm:ss"),
                departure_time: "08:00",
                dropoff_location: "",
                pickup_location: "",
                stopover_address_list: [
                  {
                    stopover_sort: 1,
                    stopover_address: ""
                  }
                ]
              });
            }}
          >
            <SmallPlusIcon color="#718BAA" />
            新增其他天
          </Button>
        </Pane>
      )}
    </BodySTY>
  );
};

export default FlightShuttleInfo;
