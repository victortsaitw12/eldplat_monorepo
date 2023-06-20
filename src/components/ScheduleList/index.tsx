import React from "react";
import { BodySTY } from "./style";
import DotIcon from "./DotIcon";
import cx from "classnames";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";

import { PlusIcon, TrashIcon, TextInput, Text } from "evergreen-ui";

interface I_Props {
  pickup_location: string;
  dropoff_location: string;
  fatherArrayName: string;
  dayIndex: number;
  arrayName: string;
  needLine?: boolean;
  control: Control<any>;
  register: UseFormRegister<any>;
  isEdit?: boolean;
  disabledFirst?: boolean;
}

const ScheduleList = ({
  pickup_location,
  dropoff_location,
  needLine = true,
  isEdit,
  disabledFirst,
  control,
  register,
  fatherArrayName,
  dayIndex,
  arrayName
}: I_Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${fatherArrayName}.${dayIndex}.${arrayName}`
  });
  const r_stopover = (fields: any[]) => {
    return fields.map((child, i) => (
      <li key={i} className="schedule-list-item">
        <Text className="schedule-list-label">
          {needLine && (
            <Text className={cx("dot", { withLine: true })}>
              <DotIcon />
            </Text>
          )}
          {"中途點 " + (i + 1)}
        </Text>
        <Text>
          {isEdit ? (
            <TextInput
              placeholder="請輸入詳細地址"
              {...register(
                `${fatherArrayName}.${dayIndex}.${arrayName}.${i}.stopover_address`
              )}
              disabled={disabledFirst && i == 0}
            />
          ) : (
            child.stopover_address
          )}
        </Text>
        {isEdit && (
          <Text className="schedule-item-action">
            {i == fields.length - 1 && (
              <PlusIcon
                color="#718BAA"
                size={11}
                onClick={() => {
                  append({
                    stopover_sort: fields.length + 1,
                    stopover_address: ""
                  });
                }}
              />
            )}
            <TrashIcon
              color="#718BAA"
              size={11}
              onClick={() => {
                remove(i);
              }}
            />
          </Text>
        )}
      </li>
    ));
  };
  return (
    <BodySTY className="schedule-list-container">
      <ul className="schedule-list">
        <li className="schedule-list-item">
          <Text className="schedule-list-label">
            {needLine && (
              <Text className={cx("dot", { withLine: true })}>
                <DotIcon />
              </Text>
            )}
            上車地點
          </Text>
          <Text>
            {isEdit ? (
              <TextInput
                placeholder="請輸入詳細地址"
                {...register(`${fatherArrayName}.${dayIndex}.pickup_location`)}
                disabled={disabledFirst}
              />
            ) : (
              pickup_location
            )}
          </Text>
          {isEdit && fields.length == 0 && (
            <Text className="schedule-item-action">
              <PlusIcon
                color="#718BAA"
                size={11}
                onClick={() => {
                  append({
                    stopover_sort: fields.length + 1,
                    stopover_address: ""
                  });
                }}
              />
            </Text>
          )}
        </li>
        {r_stopover(fields)}
        <li className="schedule-list-item">
          <Text className="schedule-list-label">
            {needLine && (
              <Text className={cx("dot")}>
                <DotIcon />
              </Text>
            )}
            下車地點
          </Text>
          <Text>
            {isEdit ? (
              <TextInput
                placeholder="請輸入詳細地址"
                {...register(`${fatherArrayName}.${dayIndex}.dropoff_location`)}
                disabled={disabledFirst}
              />
            ) : (
              dropoff_location
            )}
          </Text>
        </li>
      </ul>
    </BodySTY>
  );
};

export default ScheduleList;
