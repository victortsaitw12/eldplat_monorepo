import React from "react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray
} from "react-hook-form";
import { PlusIcon, TrashIcon, TextInput } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
//
function StepArragement({
  control,
  register,
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
  const { fields, append, remove } = useFieldArray({
    control,
    name: middlePointName
  });
  return (
    <BodySTY>
      <ItemSTY>
        <div className="content">上車地點</div>
        <TextInput
          {...register(`${startPointName}.location`)}
          disabled={withStartPoint}
        />
        <div className="option-container">
          {fields.length === 0 && (
            <button
              className="option-item"
              onClick={() =>
                append({
                  location: ""
                })
              }
            >
              <PlusIcon size={12} />
            </button>
          )}
        </div>
      </ItemSTY>
      {fields.map((item, index) => {
        const locationName = `中途點${index + 1}`;
        return (
          <ItemSTY key={item.id}>
            <div className="content">{locationName}: </div>
            <TextInput {...register(`${middlePointName}.${index}.location`)} />
            <div className="option-container">
              <button className="option-item" onClick={() => remove(index)}>
                <TrashIcon size={12} />
              </button>
              {index === fields.length - 1 && (
                <button
                  className="option-item"
                  onClick={() =>
                    append({
                      location: ""
                    })
                  }
                >
                  <PlusIcon size={12} />
                </button>
              )}
            </div>
          </ItemSTY>
        );
      })}
      <ItemSTY>
        <div className="content">下車地點</div>
        <TextInput
          {...register(`${destinationPointName}.location`)}
          disabled={withDestinationPoint}
        />
      </ItemSTY>
    </BodySTY>
  );
}

export default StepArragement;
