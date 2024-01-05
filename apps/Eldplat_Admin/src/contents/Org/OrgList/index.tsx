import React from "react";
import { Tooltip, PlusIcon, EditIcon, IconButton } from "evergreen-ui";
import { DivSTY } from "./style";

import Accordion, { I_AccordionItem } from "@components/Accordion";
// import {Accordion,  I_AccordionItem } from "baseui/lib";
import LoadingSpinner from "@components/LoadingSpinner";
import { I_OrgList } from "@services/org/getOrgList";
import { Button } from "baseui";
import { LabelTag } from "baseui";
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
      const labellvl = (item["org_lvl"] % 5).toString();
      const padingNumber = item["org_lvl"] * 16;
      const prepItem: I_AccordionItem = {
        label: (
          <>
            <div
              className={` ${item["org_enb"] === false ? "mask" : ""}`}
            ></div>
            <div className={"accordion"}>
              <div
                className={`accordion__label labelSty labelSty__${
                  labellvl || ""
                }`}
              >
                {item["org_name"]}
              </div>
              <div className="accordion__btns">
                <Tooltip content="新增下級">
                  <IconButton
                    icon={PlusIcon}
                    onClick={onCreate.bind(null, item)}
                    disabled={!item["org_enb"]}
                  />
                </Tooltip>
                {item["org_lvl"] !== 1 ? (
                  <Tooltip content="編輯">
                    <IconButton
                      icon={EditIcon}
                      onClick={onEdit.bind(null, item)}
                      disabled={!item["org_enb"]}
                    />
                  </Tooltip>
                ) : (
                  <IconButton disabled className="placeholder" />
                )}
              </div>
            </div>

            {/* <mask
              className={` ${item["org_enb"] === false ? "mask" : ""} ${
                item["org_enb"] === false ? "" : "hide"
              }`}
            ></mask> */}
          </>
        )
      };

      if (item["sublayer"] && item["sublayer"].length > 0) {
        const childData = item["sublayer"].map((childItem: any) => {
          return { ...childItem, parent_org_name: item["org_name"] };
        });
        prepItem.children = getDataFitAccordion(childData);
      }

      return prepItem;
    });
  };
  const dataFitAccordion = getDataFitAccordion(data);

  return (
    <DivSTY>
      <Button>測試</Button>
      <LabelTag text={"123"} style={{"width": "100px"}}></LabelTag>
      <div className="title">組織樹狀圖</div>
      <Accordion data={dataFitAccordion} isTopLayer={true} />
    </DivSTY>
  );
};

export default OrgList;

//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  data?: I_OrgList[];
  onCreate: (id: string, e: any) => void;
  onEdit: (id: string, e: any) => void;
}
