import React from "react";
import { Pane } from "evergreen-ui";
import DetailGrid from "@components/DetailGrid";
interface I_Props {
  listArray: { title: string; value: string | number | null }[];
  title?: string;
}
const ContactInfoView = ({ listArray, title }: I_Props) => {
  return (
    <DetailGrid listArray={listArray} title={title} />
  );
};
export default ContactInfoView;
