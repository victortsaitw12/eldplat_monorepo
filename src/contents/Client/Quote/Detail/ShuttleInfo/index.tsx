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

const ShuttleInfo = ({ quote_no, isEdit, arrayName }: I_Props) => {
  const { register, control, getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: arrayName
  });

  const r_titleChildren = (isEdit: boolean, data: any, i: number) => {
    if (!isEdit) {
      return null;
    } else {
      return (
        <Pane className="title_children">
          <span>第{data.day_number}天</span>
          <TextInput
            type="date"
            {...register(arrayName + "[" + i + "]" + ".day_date")}
          />
          <TrashIcon
            onClick={() => {
              remove(i);
            }}
          />
        </Pane>
      );
    }
  };
  const r_list = (fields: any[]) => {
    return fields.map((child, i) => (
      <Collapse
        opened={true}
        key={i}
        title={
          "第" +
          child.day_number +
          "天  " +
          dayjs(child.day_date).format("YYYY-MM-DD")
        }
        titleChildren={r_titleChildren(isEdit, child, i)}
      >
        <Pane style={{ padding: "20px" }}>
          <span className="detail-with-icon">
            <TimeIcon color="#8EA8C7" size={11} />
            <DetailItem
              title="出發時間"
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
              // const lastDate = fields[fields.length - 1]?.day_date;
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

export default ShuttleInfo;
