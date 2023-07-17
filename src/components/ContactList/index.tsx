import React from "react";
import { SubFromProps } from "../../contents/Customer/customer.type";
import {
  Control,
  FieldArrayPath,
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useFieldArray
} from "react-hook-form";
import { IconLeft } from "@components/Button/Primary";
import { PlusIcon, TrashIcon, TextInput, Text, Pane } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
// import ArrayInfoBox from "@components/ArrayInfoBox";
import InfoBox from "@components/InfoBox";
import { textValidation, emailValidation } from "@utils/inputValidation";
//
function ContactList({
  hide,
  errors,
  control,
  register,
  isEdit = false,
  arrayName
}: {
  hide: boolean;
  errors: FieldErrors<any>;
  control: Control<any>;
  register: UseFormRegister<any>;
  isEdit?: boolean;
  arrayName: string;
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: arrayName
  });
  console.log("fields", fields);
  return (
    <BodySTY>
      {fields.map((item: any, index) => {
        const contactUserName: string =
          index === 0 ? "主要聯絡人" : `聯絡人${index + 1}`;
        const contactItem = [
          {
            req: index === 0 ? true : false,
            label: contactUserName,
            value: item.contact_name || "--",
            editEle: [
              <TextInput
                key={`${arrayName}.${index}.contact_name`}
                {...register(`${arrayName}.${index}.contact_name`, {
                  required: "必填",
                  validate: textValidation
                })}
                style={{ flex: "1" }}
              />
            ]
          },
          {
            label: contactUserName + "電話",
            value: item.contact_tel ? (
              <>
                <span style={{ marginRight: "1rem" }}>市話</span>
                <span>
                  +{item.contact_tel_code} {item.contact_tel}
                </span>
              </>
            ) : (
              "市話 --"
            ),
            editEle: [
              <Pane
                display="flex"
                flexDirection="row"
                gap={10}
                key={`${arrayName}.${index}.contact_tel`}
                alignItems="center"
              >
                <Text>市話</Text>
                <TextInput
                  style={{ width: "60px" }}
                  {...register(`${arrayName}.${index}.contact_tel_code`)}
                />
                <TextInput
                  style={{ flex: "1", width: "auto" }}
                  {...register(`${arrayName}.${index}.contact_tel`)}
                />
              </Pane>
            ]
          },
          {
            label: " ",
            value: item.contact_phone ? (
              <>
                <span style={{ marginRight: "1rem" }}>手機</span>
                <span>
                  +{item.contact_phone_code} {item.contact_phone}
                </span>
              </>
            ) : (
              "手機 --"
            ),
            editEle: [
              <Pane
                display="flex"
                flexDirection="row"
                gap={10}
                key={`${arrayName}.${index}.contact_phone_code`}
                alignItems="center"
              >
                <Text>手機</Text>
                <TextInput
                  style={{ width: "60px" }}
                  {...register(`${arrayName}.${index}.contact_phone_code`)}
                />
                <TextInput
                  style={{ flex: "1", width: "auto" }}
                  {...register(`${arrayName}.${index}.contact_phone`)}
                />
              </Pane>
            ]
          },
          {
            label: contactUserName + "信箱",
            value: item.contact_email || "--",
            editEle: [
              <TextInput
                key={`${arrayName}.${index}.contact_email`}
                {...register(`${arrayName}.${index}.contact_email`)}
                style={{ flex: "1" }}
              />
            ]
          }
        ];
        return (
          <ItemSTY key={item.id}>
            <InfoBox
              key={item.id}
              style={{ padding: 0 }}
              infoData={contactItem}
              isEdit={isEdit}
            />
            {isEdit && index !== 0 && (
              <button className="delete" onClick={() => remove(index)}>
                <TrashIcon />
              </button>
            )}
          </ItemSTY>
        );
      })}
      {isEdit && (
        <Pane>
          <IconLeft
            text="新增聯絡人"
            type="button"
            onClick={() =>
              append({
                contact_email: "",
                contact_name: "",
                contact_phone: "",
                contact_phone_code: "",
                contact_tel: "",
                contact_tel_code: "",
                contact_sort: "1"
              })
            }
          >
            <PlusIcon />
          </IconLeft>
        </Pane>
      )}
    </BodySTY>
  );
}

export default ContactList;
