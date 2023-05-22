import React from "react";
import { SubFromProps } from "../../../../../customer.type";
import { useFieldArray } from "react-hook-form";
import HorizontalInput from "@components/HookForm/Input/HorizontalInput";
import SingleInput from "@components/HookForm/Input/SingleInput";
import { IconLeft } from "@components/Button/Primary";
import { PlusIcon, TrashIcon } from "evergreen-ui";
import { BodySTY, ItemSTY } from "./style";
const ContactList = ({
  hide,
  errors,
  control,
  register,
  isEdit: isDisabled = false
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
        return (
          <ItemSTY key={item.id}>
            <HorizontalInput
              label={contactUserName}
              {...register(`customer_contact.${index}.contact_name`)}
            />
            <div className="content">
              <div>{contactUserName + "電話"}</div>
              <div className="content-container">
                <div className="content-item">
                  <div>市話</div>
                  <SingleInput
                    {...register(`customer_contact.${index}.contact_tel_code`)}
                  />
                  <SingleInput
                    {...register(`customer_contact.${index}.contact_tel`)}
                  />
                </div>
                <div className="content-item">
                  <div>手機</div>
                  <SingleInput
                    {...register(
                      `customer_contact.${index}.contact_phone_code`
                    )}
                  />
                  <SingleInput
                    {...register(`customer_contact.${index}.contact_phone`)}
                  />
                </div>
              </div>
            </div>
            <HorizontalInput
              label={contactUserName + "信箱"}
              {...register(`customer_contact.${index}.contact_email`)}
            />
            <button className="delete" onClick={() => remove(index)}>
              <TrashIcon />
            </button>
          </ItemSTY>
        );
      })}
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
    </BodySTY>
  );
};

export default ContactList;
