import React from "react";
import { useFormContext, useFieldArray, useWatch } from "react-hook-form";
import {
  Pane,
  TimeIcon,
  TrashIcon,
  CalendarIcon,
  Button,
  SmallPlusIcon,
  TextInput,
  Text
} from "evergreen-ui";
import Collapse from "@components/Collapse";
import ScheduleList from "@components/ScheduleList";
import DetailItem from "@components/DetailList/DetailItem";
import { BodySTY } from "./style";
import { ErrorMessage } from "@hookform/error-message";
import dayjs from "dayjs";
import { QuotationEditPayload } from "@contents/AdminOrders/type";
interface I_Props {
  isEdit: boolean;
}

const ShuttleInfo = ({ isEdit }: I_Props) => {
  const {
    register,
    control,
    getValues,
    setValue,
    formState: { errors }
  } = useFormContext<QuotationEditPayload>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "order_itinerary_list"
  });

  const { quote_no = "", quote_type } = useWatch({
    control
  });

  const isCustomBus = quote_type === "1";
  React.useEffect(() => {
    onchange_date(0);
  }, [fields]);
  const onchange_date = (startIndex: number) => {
    //往後加一天
    for (let j = startIndex; j < fields.length - 1; j++) {
      setValue(
        `order_itinerary_list.${j + 1}.day_date`,
        dayjs(getValues(`order_itinerary_list.${j}.day_date`))
          .add(1, "day")
          .format("YYYY-MM-DD")
      );
    }
    //往前減一天
    for (let j = startIndex; j >= 0; j--) {
      setValue(
        `order_itinerary_list.${j - 1}.day_date`,
        dayjs(getValues(`order_itinerary_list.${j}.day_date`))
          .subtract(1, "day")
          .format("YYYY-MM-DD")
      );
    }
  };
  const r_titleChildren = (isEdit: boolean, data: any, i: number) => {
    if (!isEdit) {
      return null;
    } else {
      return (
        <Pane className="title_children">
          {isCustomBus && (
            <>
              <span>第{i + 1}天</span>
              <Pane>
                <TextInput
                  type="date"
                  isInvalid={!!errors.order_itinerary_list?.[i]?.day_date}
                  {...register(`order_itinerary_list.${i}.day_date`, {
                    required: "不可空白",
                    onChange: (e: any) => {
                      onchange_date(i);
                    }
                  })}
                />
                <Pane>
                  <ErrorMessage
                    errors={errors}
                    name={`order_itinerary_list.${i}.day_date`}
                    render={({ message }) => (
                      <Text className="input-error">{message}</Text>
                    )}
                  />
                </Pane>
              </Pane>
            </>
          )}
          {!isCustomBus && <span>行程資訊</span>}
          {fields.length > 1 && (
            <TrashIcon
              style={{
                position: "absolute"
              }}
              onClick={() => {
                remove(i);
              }}
            />
          )}
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
          isCustomBus
            ? "第" +
              (child.day_number || "1") +
              "天  " +
              ((dayjs(child.day_date).isValid() &&
                dayjs(child.day_date).format("YYYY-MM-DD")) ||
                "")
            : "接送行程"
        }
        titleChildren={r_titleChildren(isEdit, child, i)}
      >
        <Pane style={{ padding: "20px" }}>
          {!isCustomBus && (
            <span className="detail-with-icon">
              <CalendarIcon color="#8EA8C7" size={11} />
              <DetailItem
                title={"接送日期"}
                value={
                  isEdit ? (
                    <TextInput
                      type="date"
                      {...register(`order_itinerary_list.${i}.day_date`)}
                    />
                  ) : (
                    dayjs(child.day_date).format("YYYY-MM-DD") || "--"
                  )
                }
              />
            </span>
          )}
          <span className="detail-with-icon">
            <TimeIcon color="#8EA8C7" size={11} />
            <DetailItem
              title={isCustomBus ? "出發時間" : "接送時間"}
              value={
                isEdit ? (
                  <>
                    <TextInput
                      type="time"
                      isInvalid={
                        !!errors.order_itinerary_list?.[i]?.departure_time
                      }
                      {...register(`order_itinerary_list.${i}.departure_time`, {
                        required: "不可空白"
                      })}
                    />
                    <Pane>
                      <ErrorMessage
                        errors={errors}
                        name={`order_itinerary_list.${i}.departure_time`}
                        render={({ message }) => (
                          <Text className="input-error">{message}</Text>
                        )}
                      />
                    </Pane>
                  </>
                ) : (
                  child.departure_time || "--"
                )
              }
            />
          </span>
          <ScheduleList
            dayIndex={i}
            fatherArrayName={"order_itinerary_list"}
            arrayName="stopover_address_list"
            register={register}
            isEdit={isEdit}
            disabledFirst={false}
            control={control}
            pickup_location={child.pickup_location}
            dropoff_location={child.dropoff_location}
            errors={errors}
          />
        </Pane>
      </Collapse>
    ));
  };
  return (
    <BodySTY>
      {r_list(fields)}
      {isEdit && isCustomBus && (
        <Pane className="add_day_container">
          <Button
            onClick={(e: any) => {
              e.preventDefault();
              const lastDate = getValues(
                `order_itinerary_list.${fields.length - 1}.day_date`
              );
              // const lastDate = fields[fields.length - 1]?.day_date;
              append({
                quote_no: quote_no,
                day_number: fields.length + 1,
                day_date: dayjs(lastDate).add(1, "day").format("YYYY-MM-DD"),
                departure_time: "08:00",
                dropoff_location: "",
                pickup_location: "",
                stopover_address_list: [
                  {
                    stopover_sort: "1",
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
