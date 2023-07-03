import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";
import { useFormContext, useWatch } from "react-hook-form";

const PassengerInfoView = () => {
  const { control } = useFormContext();
  const watch_order_contact_list = useWatch({
    control,
    name: "order_contact_list"
  });
  const contactListByType = (array: any[], type: string) => {
    const newArr = array.filter((child) => {
      return child.contact_type === type;
    });
    return newArr;
  };
  //旅客代表人資料
  const contact_data = contactListByType(watch_order_contact_list, "1")[0];

  const socialMediaList: { [key: string]: string } = {
    "01": "Line",
    "02": "WeChat"
  };
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
    },
    {
      title: "通訊軟體",
      value:
        contact_data?.social_media_type && contact_data?.social_media
          ? socialMediaList[contact_data?.social_media_type] +
            " " +
            contact_data?.social_media
          : "--"
    }
  ];
  return (
    <Pane style={{ padding: "20px" }}>
      <DetailList listArray={list_arr} />
    </Pane>
  );
};
export default PassengerInfoView;
