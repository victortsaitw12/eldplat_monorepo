import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Switch, RadioGroup } from "evergreen-ui";
import { BodySTY, FuncValSTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import InfoBox from "@components/InfoBox";
import Accordion, { I_AccordionItem } from "@components/Accordion";

const AuthPanel = ({ data, isEdit, isCreate }: I_Props) => {
  console.log("🍅 data", data);

  const handleChange = (value: string) => {
    console.log("🍅 v:", value);
  };

  //------ functions ------//
  const getDataFitAccordion = (data: any) => {
    if (typeof data == "I_AuthFuncItem[]") {
      data as I_AuthFuncItem[];
    }
    return data.map((item: I_AuthFuncItem | I_AuthFuncElement) => {
      const isParent = item["func_name"] ? true : false;
      const prepItem: I_AccordionItem = {
        label: (
          <div className="accordion">
            <div className="accordion__label">
              {isParent ? item["func_name"] : item["element_name"]}
            </div>
            <div className="accordion__value">
              {isParent ? (
                <Switch onChange={handleChange} />
              ) : (
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

const AutnFuncModule = (data: I_AutnFuncItem) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(isUnfold || true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="acc__item" onClick={handleToggle}>
        {padStartArray}
        {isOpen ? <CaretDownIcon /> : <CaretRightIcon />}
        {itemData.label}
      </div>
      <div
        className={`acc__items ${isOpen ? "" : "hide"}   ${
          isFold ? "hide" : ""
        }`}
      >
        {hasChildren && itemData.children && (
          <Accordion
            data={itemData.children}
            layerNum={(layerNum || 0) + 1}
            isUnfold={isUnfold}
            isFold={isFold}
          />
        )}
      </div>
    </>
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
      size={16}
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
