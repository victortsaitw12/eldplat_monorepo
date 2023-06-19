import React from "react";
import { Pane, TextInput } from "evergreen-ui";
import { useFormContext } from "react-hook-form";

import DetailList from "@components/DetailList";
import CustomSelect from "@components/CustomSelect";
const ContactInfoEdit = () => {
  const { register } = useFormContext();
  const contact_1 = [
    {
      title: "姓",
      value: (
        <TextInput
          {...register("order_contact_list[0].family_name", {
            required: "此欄位必填"
          })}
        />
      )
    },
    {
      title: "手機",
      value: (
        <Pane style={{ display: "flex", gap: "8px" }}>
          <CustomSelect
            selectName="order_contact_list[0].contact_phone_code"
            register={register}
            options={[
              {
                value: "+886",
                text: "+886"
              }
            ]}
          />
          <TextInput
            {...register("order_contact_list[0].contact_phone", {
              required: "此欄位必填"
            })}
            style={{ maxWidth: "198px" }}
          />
        </Pane>
      )
    },
    {
      title: "信箱",
      value: (
        <TextInput
          {...register("order_contact_list[0].contact_email", {
            required: "此欄位必填"
          })}
        />
      )
    }
  ];
  const contact_2 = [
    {
      title: "名",
      value: (
        <TextInput
          {...register("order_contact_list[0].name", {
            required: "此欄位必填"
          })}
        />
      )
    },
    {
      title: "電話",
      value: (
        <Pane style={{ display: "flex", gap: "8px" }}>
          <CustomSelect
            selectName="order_contact_list[0].contact_tel_code"
            register={register}
            options={[
              {
                value: "+886",
                text: "+886"
              }
            ]}
          />
          <TextInput
            {...register("order_contact_list[0].contact_tel", {
              required: "此欄位必填"
            })}
            style={{ maxWidth: "198px" }}
          />
        </Pane>
      )
    }
  ];
  return (
    <Pane style={{ padding: "20px", display: "flex" }}>
      <Pane style={{ flex: "1" }}>
        <DetailList listArray={contact_1} />
      </Pane>
      <Pane style={{ flex: "1" }}>
        <DetailList listArray={contact_2} />
      </Pane>
    </Pane>
  );
};
export default ContactInfoEdit;
