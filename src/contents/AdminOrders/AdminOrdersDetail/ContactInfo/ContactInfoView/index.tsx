import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";

const ContactInfoView = ({
  family_name,
  name,
  contact_phone_code,
  contact_phone,
  contact_tel_code,
  contact_tel,
  contact_email,
  social_media_type,
  social_media
}: any) => {
  const list_arr = [
    {
      title: "姓",
      value: family_name
    },
    {
      title: "名",
      value: name
    },
    {
      title: "手機",
      value: contact_phone_code + " " + contact_phone
    },
    {
      title: "電話",
      value: contact_tel_code + " " + contact_tel
    },
    {
      title: "信箱",
      value: contact_email
    },
    {
      title: "通訊軟體",
      value: social_media_type + " " + social_media
    }
  ];
  return (
    <Pane style={{ padding: "20px" }}>
      <DetailList listArray={list_arr} />
    </Pane>
  );
};
export default ContactInfoView;
