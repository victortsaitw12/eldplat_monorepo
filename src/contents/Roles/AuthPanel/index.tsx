import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Switch, RadioGroup } from "evergreen-ui";
import { BodySTY, FuncValSTY } from "./style";

import { I_AuthFuncItem } from "@services/role/getOneRole";
import InfoBox from "@components/InfoBox";
import Accordion, { I_AccordionItem } from "@components/Accordion";

const AuthPanel = ({ data, isEdit, isCreate }: I_Props) => {
  console.log("🍅 data", data);

  //------ functions ------//
  const getDataFitAccordion = (
    data: I_AuthFuncItem[] | I_AuthFuncElement[]
  ) => {
    return data.map((item: I_AuthFuncItem | I_AuthFuncElement) => {
      const prepItem: I_AccordionItem = {
        label: (
          <div className="accordion">
            <div className="accordion__label">
              {item["func_name"] || item["element_name"]}
            </div>
            <div className="accordion__value">
              {item["func_name"] && <Switch />}
              {item["element_name"] && (
                <RadioOptions name={item["element_no"]} />
              )}
            </div>
          </div>
        )
      };

      if (item["func_element"] && item["func_element"].length > 0) {
        prepItem.children = getDataFitAccordion(item["func_element"]);
      }

      return prepItem;
    });
  };

  // ------- render ------- //
  const dataFitInfoBox = data.map((item: I_AuthFuncItem) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: (
        <Accordion data={getDataFitAccordion([item])} isTopLayer={false} />
      ),
      value: (
        <div className="roles--view">
          <div className="roles__module">{item.func_name}</div>
          <div className="roles__role">
            {item.func_element
              .filter((elem: any) => elem.org_enb === true)
              .map((elem: any, i: number) => (
                <div key={`role-${i}`}>{elem.element_name}</div>
              ))}
          </div>
        </div>
      )
    };
  });
  return (
    <BodySTY>
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="權限" />
    </BodySTY>
  );
};

const RadioOptions = (name: string) => {
  const [value, setValue] = React.useState("1");
  const [options] = React.useState([
    { label: "顯示並可用", value: "1" },
    { label: "僅供檢視", value: "2" },
    { label: "不顯示", value: "3" }
  ]);
  return (
    <RadioGroup
      label=""
      value={value}
      size={14}
      options={options}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
export default AuthPanel;

interface I_Props {
  data: I_AuthFuncItem[];
  isEdit: boolean;
  isCreate: boolean;
}
