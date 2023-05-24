import React from "react";
import { SubFromProps } from "../../contents/Customer/customer.type";
import { useFieldArray } from "react-hook-form";
import { IconLeft } from "@components/Button/Primary";
import { PlusIcon, TrashIcon, TextInput, Text, Pane } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
// import ArrayInfoBox from "@components/ArrayInfoBox";
import InfoBox from "@components/InfoBox";
import { textValidation, emailValidation } from "@utils/inputValidation";

const ContactList = ({
  arrayName = "customer_contact",
  hide,
  errors,
  control,
  register,
  isEdit = false
}: SubFromProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: arrayName
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
                key={`${arrayName}.${index}.contact_name`}
                {...register(`${arrayName}.${index}.contact_name`, {
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
              <>
                <Text>市話</Text>
                <TextInput
                  disabled={true}
                  style={{ width: "60px" }}
                  {...register(`${arrayName}.${index}.contact_tel_code`)}
                />

                <TextInput
                  {...register(`${arrayName}.${index}.contact_tel`)}
                />
              </>
            ]
          },
          {
            label: contactUserName + "手機",
            value: item.contact_phone
              ? item.contact_phone_code + " " + item.contact_phone
              : "---",
            editEle: [
              <>
                <Text>手機</Text>
                <TextInput
                  disabled={true}
                  style={{ width: "60px" }}
                  {...register(`${arrayName}.${index}.contact_phone_code`)}
                />
                <TextInput
                  {...register(`${arrayName}.${index}.contact_phone`)}
                />
              </>
            ]
          },
          {
            label: contactUserName + "信箱",
            value: item.contact_email || "---",
            editEle: [
              <TextInput
                key={`${arrayName}.${index}.contact_email`}
                {...register(`${arrayName}.${index}.contact_email`, {
                  validate: emailValidation
                })}
              />
            ]
          }
        ];
        return (
          <ItemSTY key={item.id}>
            <InfoBox style={{ padding: 0 }} infoData={contactItem} isEdit={isEdit} />
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
};

export default ContactList;
