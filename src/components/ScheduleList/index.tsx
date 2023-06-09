import React from "react";
import { BodySTY } from "./style";
import DotIcon from "./DotIcon";
import cx from "classnames";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";

import { PlusIcon, TrashIcon, TextInput, Text } from "evergreen-ui";

interface I_Item {
  label: string | React.ReactNode;
  location: string | React.ReactNode;
}
interface I_Props {
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

  const r_label = (i: number) => {
    if (i == 0) {
      return "上車地點";
    } else if (i > 0 && i < fields.length - 1) {
      return "中途點" + i;
    } else if (i > 0 && i == fields.length - 1) {
      return "下車地點";
    }
  };
  // const r_item = (fields: any[]) => {
  //   return fields.map((child, i) => {
  //     return (
  //       <li key={i} className="schedule-list-item">
  //         <Text className="schedule-list-label">
  //           {needLine && (
  //             <Text className={cx("dot", { withLine: i < fields.length - 1 })}>
  //               <DotIcon />
  //             </Text>
  //           )}
  //           {r_label(i)}
  //         </Text>
  //         <Text>
  //           {isEdit ? (
  //             <TextInput
  //               placeholder="請輸入詳細地址"
  //               {...register(
  //                 `${fatherArrayName}.${dayIndex}.${arrayName}.${i}.location`
  //               )}
  //               disabled={disabledFirst && i == 0}
  //             />
  //           ) : (
  //             child.location
  //           )}
  //         </Text>
  //         {isEdit && (
  //           <Text className="schedule-item-action">
  //             <PlusIcon
  //               color="#718BAA"
  //               size={11}
  //               onClick={() => {
  //                 append({
  //                   value: ""
  //                 });
  //               }}
  //             />
  //             {i > 0 && (
  //               <TrashIcon
  //                 color="#718BAA"
  //                 size={11}
  //                 onClick={() => {
  //                   remove(i);
  //                 }}
  //               />
  //             )}
  //           </Text>
  //         )}
  //       </li>
  //     );
  //   });
  // };
  const r_item = (fields: any[]) => {
    return fields.map((child, i) => (
      <li key={i} className="schedule-list-item">
        <Text className="schedule-list-label">
          {needLine && (
            <Text className={cx("dot", { withLine: i < fields.length - 1 })}>
              <DotIcon />
            </Text>
          )}
          {r_label(i)}
        </Text>
        <Text>
          {isEdit ? (
            <TextInput
              placeholder="請輸入詳細地址"
              {...register(`${arrayName}.${i}.location`)}
              disabled={disabledFirst && i == 0}
            />
          ) : (
            child.location
          )}
        </Text>
        {isEdit && (
          <Text className="schedule-item-action">
            <PlusIcon
              color="#718BAA"
              size={11}
              onClick={() => {
                append({
                  label: "",
                  value: ""
                });
              }}
            />
            {i > 0 && (
              <TrashIcon
                color="#718BAA"
                size={11}
                onClick={() => {
                  remove(i);
                }}
              />
            )}
          </Text>
        )}
      </li>
    ));
  };
  return (
    <BodySTY className="schedule-list-container">
      <ul className="schedule-list">{r_item(fields)}</ul>
    </BodySTY>
  );
};

export default ScheduleList;
