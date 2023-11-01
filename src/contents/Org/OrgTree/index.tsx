import React from "react";
import {
  Pane,
  Button,
  CaretRightIcon,
  CaretDownIcon,
  PlusIcon,
  EditIcon,
  Tooltip
} from "evergreen-ui";
import { DivSTY } from "./style";

import Accordion from "@components/Accordion";
import LoadingSpinner from "@components/LoadingSpinner";
import LightBox from "@components/Lightbox";

const getAccordion = (data: any[]) => {
  return data.map((item: any, i: number) => (
    <Accordion
      key={`org-${i}`}
      isTop={true}
      label={item.label}
      dataArr={item.children || []}
    />
  ));
};

interface I_Props {
  data?: I_Accordion[];
}

interface I_Accordion {
  id: string;
  label: string;
  children?: I_Accordion[];
}
const OrgTree = ({ data }: I_Props) => {
  if (!data)
    return (
      <DivSTY>
        <div className="title">組織樹狀圖</div>
        <LoadingSpinner />
      </DivSTY>
    );

  const orgAccordion = getAccordion(data);

  return (
    <DivSTY>
      <div className="title">組織樹狀圖</div>
      {orgAccordion}
    </DivSTY>
  );
};

export default OrgTree;
