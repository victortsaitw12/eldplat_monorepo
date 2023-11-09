import React from "react";
import { BodySTY } from "./style";

import { I_RoleItem } from "@services/role/getRoleList";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";
import Accordion, { I_AccordionItem } from "@components/Accordion";
import CheckboxField from "@components/CheckboxField";

const RoleInfoBox = ({ data, isEdit }: I_Props) => {
  const [checkedList, setCheckedList] = React.useState<string[]>([]);
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );

  //------ functions ------//
  const getDataFitAccordion = (data: any) => {
    return data.map((item: any, i: number) => {
      const prepItem: I_AccordionItem = {
        label: (
          <div className="accordion">
            {isEdit && !item.sublayer && (
              <CheckboxField
                item={{ value: `name-${i}` }}
                toggleFuelValue={handleCheckItem}
                checked={checkedList.includes(`name-${i}`)}
              />
            )}
            <div className="accordion__label">{item["org_name"]}</div>
          </div>
        )
      };

      if (item["sublayer"] && item["sublayer"].length > 0) {
        prepItem.children = getDataFitAccordion(item["sublayer"]);
      }

      return prepItem;
    });
  };

  const handleCheckItem = (id: string) => {
    setCheckedList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // ------- render ------- //
  const dataFitAccordion = getDataFitAccordion(data);

  const dataFitInfoBox = [
    {
      readonly: false,
      req: false,
      label: "",
      editEle: <Accordion data={dataFitAccordion} isTopLayer={true} />,
      value: <Accordion data={dataFitAccordion} isTopLayer={true} />
    }
  ];

  return (
    <BodySTY className="role">
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="平台角色" />
    </BodySTY>
  );
};

export default RoleInfoBox;

interface I_Props {
  data: I_RoleItem;
  isEdit: boolean;
}
