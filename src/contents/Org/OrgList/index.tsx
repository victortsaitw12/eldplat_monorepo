import React from "react";
import { Pane, Tooltip, PlusIcon, EditIcon } from "evergreen-ui";
import { DivSTY } from "./style";

import Accordion, { I_AccordionItem } from "@components/Accordion";
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

  const getDataFitAccordion = (data: any) => {
    return data.map((item: any) => {
      const prepItem: I_AccordionItem = {
        label: (
          <div className="accordion">
            <div className="accordion__label">{item["org_name"]}</div>
            <div className="accordion__btns">
              <Tooltip content="新增下級">
                <PlusIcon onClick={onCreate.bind(null, item)} />
              </Tooltip>
              <Tooltip content="編輯">
                <EditIcon onClick={onEdit.bind(null, item)} />
              </Tooltip>
            </div>
          </div>
        )
      };

      if (item["sublayer"] && item["sublayer"].length > 0) {
        prepItem.children = getDataFitAccordion(item["sublayer"]);
      }

      return prepItem;
    });
  };
  const dataFitAccordion = getDataFitAccordion(data);

  return (
    <DivSTY>
      <div className="title">組織樹狀圖</div>
      <Accordion data={dataFitAccordion} isTopLayer={true} />
    </DivSTY>
  );
};

export default OrgList;

//====== OUTSIDE-REACT-DOM: FUNCTION ======//

//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  data?: I_AccordionItem[];
  onCreate: (id: string, e: any) => void;
  onEdit: (id: string, e: any) => void;
}
