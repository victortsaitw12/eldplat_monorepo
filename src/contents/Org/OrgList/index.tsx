import React from "react";
import { Pane } from "evergreen-ui";
import { DivSTY } from "./style";

import Accordion, { I_Accordion } from "@contents/Org/Accordion";
import LoadingSpinner from "@components/LoadingSpinner";
import { I_CreateOrgReq } from "@services/org/createOrg";
import { I_EditOrgReq } from "@services/org/updateOrg";

//====== REACT COMPONENT ======//
const OrgList = ({ data, onCreate, onEdit }: I_Props) => {
  if (!data)
    return (
      <DivSTY>
        <div className="title">組織樹狀圖</div>
        <LoadingSpinner />
      </DivSTY>
    );

  const transformKeys = (data: any) => {
    return data.map((item: any) => {
      const transformedItem = {
        id: item.org_no,
        label: item.org_name,
        org_tp: item.org_tp,
        org_lvl: item.org_lvl,
        org_enb: item.org_enb
      };

      if (item.sublayer && item.sublayer.length > 0) {
        transformedItem.children = transformKeys(item.sublayer);
      }

      return transformedItem;
    });
  };
  const dataFitAccordion = transformKeys(data);

  const getAccordion = (data: any[]) => {
    return data.map((item: any, i: number) => {
      return (
        <Accordion
          key={`org-${i}`}
          data={item}
          isTop={true}
          onCreate={onCreate}
          onEdit={onEdit}
        />
      );
    });
  };

  const orgAccordion = getAccordion(dataFitAccordion);

  return (
    <DivSTY>
      <div className="title">組織樹狀圖</div>
      {orgAccordion}
    </DivSTY>
  );
};

export default OrgList;

//====== OUTSIDE-REACT-DOM: FUNCTION ======//

//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  data?: I_Accordion[];
  onCreate: (id: string, e: any) => void;
  onEdit: (id: string, e: any) => void;
}
