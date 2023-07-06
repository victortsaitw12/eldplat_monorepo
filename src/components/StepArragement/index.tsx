import React from "react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
  useFormContext,
  useWatch
} from "react-hook-form";
import { PlusIcon, TrashIcon, TextInput } from "evergreen-ui";
import { ItemSTY } from "./style";
//
function StepArragement({
  startPointName,
  destinationPointName,
  middlePointName,
  withStartPoint,
  withDestinationPoint
}: {
  errors: FieldErrors<any>;
  control: Control<any>;
  register: UseFormRegister<any>;
  startPointName: string;
  middlePointName: string;
  destinationPointName: string;
  withStartPoint?: boolean;
  withDestinationPoint?: boolean;
}) {
  const { control, register, getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: middlePointName
  });
  function appendMiddlePoint() {
    console.log("appendMiddlePoint");
    append({
      stopover_sort: fields.length + 1 + "",
      stopover_address: ""
    });
  }
  const startPointValue = useWatch({
    control,
    name: startPointName
  });
  return (
    <>
      <ItemSTY>
        <div className="item-content">上車地點</div>
        <TextInput
          {...register(`${startPointName}`)}
          disabled={withStartPoint}
          style={{ flex: "1" }}
        />
        <div className="option-container">
          {fields.length === 0 && (
            <button
              className="option-item"
              type="button"
              onClick={(e) => {
                console.log("e", e);
                appendMiddlePoint();
              }}
              disabled={getValues(startPointName).trim() === ""}
            >
              <PlusIcon size={12} />
            </button>
          )}
        </div>
      </ItemSTY>
      {fields.map((item: any, index) => {
        const locationName = `中途點${index + 1}`;
        return (
          <ItemSTY key={item.id}>
            <div className="item-content">{locationName}: </div>
            <TextInput
              {...register(`${middlePointName}.${index}.stopover_sort`)}
              style={{ flex: "1", display: "none" }}
            />
            <TextInput
              {...register(`${middlePointName}.${index}.stopover_address`)}
              style={{ flex: "1" }}
            />
            <div className="option-container">
              <button
                className="option-item"
                type="button"
                onClick={() => {
                  console.log("remove", index);
                  remove(index);
                }}
              >
                <TrashIcon size={12} />
              </button>
              {index === fields.length - 1 && fields.length < 8 ? (
                <button
                  className="option-item"
                  type="button"
                  onClick={() => {
                    appendMiddlePoint();
                  }}
                  disabled={
                    getValues(
                      `${middlePointName}.${index}.stopover_address`
                    ).trim() === ""
                  }
                >
                  <PlusIcon size={12} />
                </button>
              ) : (
                <div className="option-item"></div>
              )}
            </div>
          </ItemSTY>
        );
      })}
      <ItemSTY>
        <div className="item-content">下車地點</div>
        <TextInput
          {...register(`${destinationPointName}`)}
          disabled={withDestinationPoint}
          style={{ flex: "1" }}
        />
        <div className="option-container"></div>
      </ItemSTY>
    </>
  );
}

export default StepArragement;
