import React from "react";
import { SubFromProps } from "../../customer.type";
import { useFieldArray } from "react-hook-form";
import { IconLeft } from "@components/Button/Primary";
import {
  PlusIcon,
  TrashIcon,
  TextInputField,
  TextInput,
  SelectField,
  Text,
  Pane
} from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
import ArrayInfoBox from "@components/ArrayInfoBox";
import { textValidation } from "@utils/inputValidation";
const ContactList = ({
  hide,
  errors,
  control,
  register,
  isEdit = false
}: SubFromProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "customer_contact"
  });
  return (
    <BodySTY>
      {fields.map((item, index) => {
        const contactUserName: string =
          index === 0 ? "主要聯絡人" : `聯絡人${index + 1}`;
        const contactItem = [
          {
            req: index === 0 ? true : false,
            label: contactUserName,
            value: item.contact_name || "---",
            editEle: [
              <TextInput
                key={`customer_contact.${index}.contact_name`}
                {...register(`customer_contact.${index}.contact_name`, {
                  validate: textValidation
                })}
              />
            ]
          },
          {
            label: contactUserName + "電話",
            value: item.contact_tel
              ? item.contact_tel_code + " " + item.contact_tel
              : "---",
            editEle: [
              <Pane key={`customer_contact.${index}.contact_tel_code`}>
                <Text>市話</Text>
                <TextInput
                  disabled={true}
                  style={{ width: "60px" }}
                  {...register(`customer_contact.${index}.contact_tel_code`)}
                />

                <TextInput
                  {...register(`customer_contact.${index}.contact_tel`)}
                />
              </Pane>
            ]
          },
          {
            label: contactUserName + "手機",
            value: item.contact_phone
              ? item.contact_phone_code + " " + item.contact_phone
              : "---",
            editEle: [
              <Pane key={`customer_contact.${index}.contact_phone_code`}>
                <Text>手機</Text>
                <TextInput
                  disabled={true}
                  style={{ width: "60px" }}
                  {...register(`customer_contact.${index}.contact_phone_code`)}
                />
                <TextInput
                  {...register(`customer_contact.${index}.contact_phone`)}
                />
              </Pane>
            ]
          },
          {
            label: contactUserName + "信箱",
            value: item.contact_email || "---",
            editEle: [
              <TextInput
                key={`customer_contact.${index}.contact_email`}
                {...register(`customer_contact.${index}.contact_email`, {
                  validate: textValidation
                })}
              />
            ]
          }
        ];
        return (
          <ItemSTY key={item.id}>
            <ArrayInfoBox infoData={contactItem} isEdit={isEdit} />
            {isEdit && (
              <button className="delete" onClick={() => remove(index)}>
                <TrashIcon />
              </button>
            )}
          </ItemSTY>
        );
      })}
      {isEdit && (
        <IconLeft
          text="新增聯絡人"
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
      )}
    </BodySTY>
  );
};

export default ContactList;
