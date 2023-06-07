import React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  useFieldArray
} from "react-hook-form";
import { Pane, TimeIcon, TrashIcon, Button } from "evergreen-ui";
import Collapse from "@components/Collapse";
import ScheduleList from "@components/ScheduleList";
import DetailItem from "@components/DetailList/DetailItem";
import { BodySTY } from "./style";
interface I_ShuttleInfo {
  date: string;
}

interface I_Props {
  isEdit: boolean;
  arrayName: string;
  shuttleList: Array<I_ShuttleInfo>;
}

const ShuttleInfo = ({ isEdit, arrayName, shuttleList }: I_Props) => {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: arrayName
  });
  const r_titleChildren = (isEdit: boolean, data: any, i: number) => {
    if (!isEdit) {
      return null;
    } else {
      return (
        <span>
          第{data.day_number}天
          <TrashIcon
            onClick={() => {
              remove(i);
            }}
          />
        </span>
      );
    }
  };
  const r_list = (fields: any[]) => {
    return fields.map((child, i) => (
      <Collapse
        opened={true}
        key={i}
        title={"第" + child.day_number + "天  " + child.day_date}
        titleChildren={r_titleChildren(isEdit, child, i)}
      >
        <Pane style={{ padding: "20px" }}>
          <span className="detail-with-icon">
            <TimeIcon color="#8EA8C7" size={11} />
            <DetailItem title="出發時間" value={child.departure_time || "-"} />
          </span>
          <ScheduleList
            dayIndex={i}
            fatherArrayName={arrayName}
            arrayName="stopover_addresses"
            register={register}
            isEdit={isEdit}
            disabledFirst={true}
            control={control}
          />
        </Pane>
      </Collapse>
    ));
  };
  return (
    <BodySTY>
      {r_list(fields)}
      {isEdit && (
        <Button
          onClick={() => {
            append({
              day_number: (fields.length + 1).toString(),
              day_date: "2023/06/05",
              stopover_addresses: [
                {
                  location: ""
                }
              ]
            });
          }}
        >
          新增一天
        </Button>
      )}
    </BodySTY>
  );
};

export default ShuttleInfo;
