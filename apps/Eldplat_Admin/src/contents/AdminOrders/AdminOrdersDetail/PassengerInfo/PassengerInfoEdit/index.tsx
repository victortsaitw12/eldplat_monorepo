import React from "react";
import { Pane, TextInput, Select } from "evergreen-ui";
import { useFormContext } from "react-hook-form";

import DetailList from "@components/DetailList";
import CustomSelect from "@components/CustomSelect";

const PassengerInfoEdit = () => {
  const { register, control } = useFormContext();
  const contact_1 = [
    {
      title: "姓",
      value: <TextInput {...register("order_contact_list[1].family_name")} />
    },
    {
      title: "手機",
      value: (
        <Pane style={{ display: "flex", gap: "8px" }}>
          <CustomSelect
            selectName="order_contact_list[1].contact_phone_code"
            register={register}
            options={[
              {
                value: "+886",
                text: "+886"
              }
            ]}
          />
          <TextInput
            style={{ maxWidth: "198px" }}
            {...register("order_contact_list[1].contact_phone")}
          />
        </Pane>
      )
    },
    {
      title: "信箱",
      value: <TextInput {...register("order_contact_list[1].contact_email")} />
    }
  ];
  const contact_2 = [
    {
      title: "名",
      value: <TextInput {...register("order_contact_list[1].name")} />
    },
    {
      title: "電話",
      value: (
        <Pane style={{ display: "flex", gap: "8px" }}>
          <CustomSelect
            selectName="order_contact_list[1].contact_tel_code"
            register={register}
            options={[
              {
                value: "+886",
                text: "+886"
              }
            ]}
          />
          <TextInput
            style={{ maxWidth: "198px" }}
            {...register("order_contact_list[1].contact_tel")}
          />
        </Pane>
      )
    },
    {
      title: "通訊軟體",
      value: (
        <Pane style={{ display: "flex", gap: "8px" }}>
          <CustomSelect
            selectName="order_contact_list[1].social_media_type"
            register={register}
            options={[
              {
                value: "01",
                text: "Line"
              },
              {
                value: "02",
                text: "WeChat"
              }
            ]}
          />
          <TextInput
            style={{ maxWidth: "198px" }}
            {...register("order_contact_list[1].social_media")}
          />
        </Pane>
      )
    }
  ];
  return (
    <Pane style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Pane style={{ flex: "1" }}>
        <DetailList listArray={contact_1} />
      </Pane>
      <Pane style={{ flex: "1" }}>
        <DetailList listArray={contact_2} />
      </Pane>
    </Pane>
  );
};
export default PassengerInfoEdit;
