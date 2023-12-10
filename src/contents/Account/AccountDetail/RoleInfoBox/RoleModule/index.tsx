import React from "react";
import {
  Switch,
  RadioGroup,
  CaretDownIcon,
  CaretRightIcon,
  IconButton
} from "evergreen-ui";

import { I_AccountRole, I_RoleItem } from "@services/account/getOneAccount";
import CheckboxField from "@components/CheckboxField";
import { DivSTY } from "./style";

const RoleModule = ({ data, onChange, isEdit }: I_Props) => {
  const [checkedList, setCheckedList] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const handleValueChange = (value: string) => {
    console.log("v:", value);
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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    onChange(checkedList);
  }, [checkedList, onChange]);

  return (
    <DivSTY>
      <div className="roles__module row" onClick={handleToggle}>
        <div className="label">
          {isOpen ? (
            <IconButton icon={CaretDownIcon} />
          ) : (
            <IconButton icon={CaretRightIcon} />
          )}
          {data.module_name}{" "}
        </div>
      </div>
      <div className={`roles__elements ${isOpen ? "" : "hide"}`}>
        {data.roles.map((elem: I_RoleItem, i: number) => (
          <div className={"role_element row"} key={`funcElem-${i}`}>
            <CheckboxField
              item={{ value: elem.role_no }}
              toggleFuelValue={handleCheckItem}
              checked={checkedList.includes(elem.role_no)}
              disabled={!isEdit}
            />
            <div className="text">{elem.role_name}</div>{" "}
          </div>
        ))}
      </div>
    </DivSTY>
  );
};

export default RoleModule;

interface I_Props {
  data: I_AccountRole;
  onChange: (v: any) => void;
  isEdit: boolean;
}
