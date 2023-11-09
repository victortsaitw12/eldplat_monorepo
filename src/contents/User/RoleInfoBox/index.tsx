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
  const getDataFitAccordion = (
    data: any,
    id: string,
    label: string,
    children: string
  ) => {
    return data.map((item: any) => {
      const transformedItem: I_AccordionItem = {
        id: item[id],
        label: item[label],
        itemInfo: { ...item }
      };

      if (item[children] && item[children].length > 0) {
        transformedItem.children = getDataFitAccordion(
          item[children],
          id,
          label,
          children
        );
      }

      return transformedItem;
    });
  };

  const getAccordion = (data: any[]) => {
    return data.map((item: any, i: number) => {
      return (
        <Accordion
          key={`org-${i}`}
          data={item}
          prefixIcon={
            <CheckboxField
              item={{ value: `name-${i}` }}
              toggleFuelValue={handleCheckItem}
              checked={checkedList.includes(`name-${i}`)}
            />
          }
        />
      );
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
  const dataFitAccordion = getDataFitAccordion(
    data,
    "org_no",
    "org_name",
    "sublayer"
  );
  const roleAccordion = getAccordion(dataFitAccordion);

  const dataFitInfoBox = [
    {
      readonly: false,
      req: false,
      label: "",
      editEle: <div>{roleAccordion}</div>,
      value: data.module_name || "--"
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
