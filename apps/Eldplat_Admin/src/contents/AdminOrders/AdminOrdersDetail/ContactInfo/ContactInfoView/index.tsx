import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";
import { useFormContext, useWatch } from "react-hook-form";

const ContactInfoView = () => {
  const { control } = useFormContext();
  const order_contact_list = useWatch({
    control,
    name: "order_contact_list"
  });
  const contactListByType = (array: any[], type: string) => {
    const newArr = array.filter((child) => {
      return child.contact_type === type;
    });
    return newArr;
  };
  //聯絡人資料
  const contact_data = contactListByType(order_contact_list, "2")[0];

  const list_arr = [
    {
      title: "姓",
      value: contact_data?.family_name || "--"
    },
    {
      title: "名",
      value: contact_data?.name || "--"
    },
    {
      title: "手機",
      value:
        contact_data?.contact_phone_code && contact_data?.contact_phone
          ? contact_data?.contact_phone_code + " " + contact_data?.contact_phone
          : "--"
    },
    {
      title: "電話",
      value:
        contact_data?.contact_tel_code && contact_data?.contact_tel
          ? contact_data?.contact_tel_code + " " + contact_data?.contact_tel
          : "--"
    },
    {
      title: "信箱",
      value: contact_data?.contact_email || "--"
    }
  ];
  return (
    <Pane style={{ padding: "20px" }}>
      <DetailList listArray={list_arr} />
    </Pane>
  );
};
export default ContactInfoView;
