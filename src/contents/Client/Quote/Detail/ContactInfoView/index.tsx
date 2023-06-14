import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";
interface I_Props {
  listArray: { title: string; value: string | number | null }[];
}
const ContactInfoView = ({ listArray }: I_Props) => {
  return (
    <Pane style={{ padding: "20px" }}>
      <DetailList listArray={listArray} />
    </Pane>
  );
};
export default ContactInfoView;
