import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Switch,
  RadioGroup,
  CaretDownIcon,
  CaretRightIcon
} from "evergreen-ui";
import { BodySTY, FuncValSTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import InfoBox from "@components/InfoBox";
import Accordion, { I_AccordionItem } from "@components/Accordion";

const AuthPanel = ({ data, isEdit, isCreate }: I_Props) => {
  console.log("🍅 data", data);

  //------ functions ------//

  // ------- render ------- //
  const dataFitInfoBox = data.map((item: I_AuthFuncItem) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: (
        <AutnFuncModule data={item} />
        // <Accordion data={getDataFitAccordion([item])} isTopLayer={false} />
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

const AutnFuncModule = ({ data }: { data: I_AuthFuncItem }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true);

  const handleValueChange = (value: string) => {
    console.log("🍅 v:", value);
  };

  const handleEnabled = (value: string) => {
    setIsEnabled((prev) => !prev);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="authFunc">
      <div className="authFunc__title authFunc__item" onClick={handleToggle}>
        <div className="label">
          {isOpen ? <CaretDownIcon /> : <CaretRightIcon />}
          {data.func_name}{" "}
        </div>
        <Switch
          className="value"
          checked={isEnabled}
          onChange={handleEnabled}
        />
      </div>
      <div
        className={`authFunc__contents ${isOpen ? "" : "hide"} ${
          isEnabled ? "" : "disabled"
        }`}
      >
        {data.func_element.map((elem: I_AuthFuncElement, i: number) => (
          <div
            className={"authFunc__element authFunc__item"}
            key={`funcElem-${i}`}
          >
            <div className="label">{elem.element_name}</div>
            <div className="value">
              <RadioOptions
                name={elem.element_no}
                onChange={handleValueChange}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RadioOptions = ({
  name,
  onChange
}: {
  name: string;
  onChange: (v: string) => void;
}) => {
  const [value, setValue] = React.useState("1");
  const [options] = React.useState([
    { label: "顯示並可用", value: "1" },
    { label: "僅供檢視", value: "2" },
    { label: "不顯示", value: "3" }
  ]);

  React.useEffect(() => {
    onChange(value);
  }, [value, onChange]);
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
