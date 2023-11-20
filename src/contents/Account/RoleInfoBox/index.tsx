import React from "react";
import { BodySTY } from "./style";

import { I_AccountRole } from "@services/account/getOneAccount";
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

  const dataFitInfoBox = data.map((item) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: (
        <Accordion data={getDataFitAccordion([item])} isTopLayer={false} />
      ),
      value: (
        <div className="role--view">
          <div className="module">{item.org_name}</div>
          <div className="role">
            {
              item.sublayer.filter((elem: any) => {
                // TODO HERE
                console.log("");
                return elem.org_enb === true;
              }).org_name
            }
          </div>
        </div>
      )
    };
  });

  // [
  //   {
  //     readonly: false,
  //     req: false,
  //     label: "",
  //     editEle: <Accordion data={dataFitAccordion} isTopLayer={false} />,
  //     value: <Accordion data={dataFitAccordion} isTopLayer={false} />
  //   },
  //   {
  //     readonly: false,
  //     req: false,
  //     label: "",
  //     editEle: <Accordion data={dataFitAccordion} isTopLayer={false} />,
  //     value: <Accordion data={dataFitAccordion} isTopLayer={false} />
  //   },
  //   {
  //     readonly: false,
  //     req: false,
  //     label: "",
  //     editEle: <Accordion data={dataFitAccordion} isTopLayer={false} />,
  //     value: <Accordion data={dataFitAccordion} isTopLayer={false} />
  //   },
  //   {
  //     readonly: false,
  //     req: false,
  //     label: "",
  //     editEle: <Accordion data={dataFitAccordion} isTopLayer={false} />,
  //     value: <Accordion data={dataFitAccordion} isTopLayer={false} />
  //   },
  // ];

  return (
    <BodySTY className="role">
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="平台角色" />
    </BodySTY>
  );
};

export default RoleInfoBox;

interface I_Props {
  data: I_AccountRole[];
  isEdit: boolean;
}
