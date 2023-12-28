import React from "react";
import {
  CaretDownIcon,
  CaretRightIcon,
  IconButton
} from "evergreen-ui";

import { I_AccountRole, I_RoleItem } from "@services/account/getOneAccount";
import CheckboxField from "@components/CheckboxField";
import { DivSTY } from "./style";

const getInitCheckedList = (data: I_RoleItem[]) => {
  const checkedList = data
    .filter((elem) => elem.is_select === true)
    .map((elem) => elem.role_no);
  return checkedList;
};

const RoleModule = ({ data, onChange, isEdit }: I_Props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const [checkedList, setCheckedList] = React.useState<string[]>(
    getInitCheckedList(data.roles)
  );

  //------ functions ------//
  const handleCheckItem = (id: string) => {
    const update = checkedList.includes(id)
      ? checkedList.filter((item: string) => item !== id)
      : [...checkedList, id];
    setCheckedList(update);
    onChange && onChange(id);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    setCheckedList(getInitCheckedList(data.roles));
    console.log("!!!", getInitCheckedList(data.roles));
  }, []);

  return (
    <DivSTY>
      <div className="roles__module row" onClick={handleToggle}>
        <div className="label">
          {isOpen ? (
            <IconButton icon={CaretDownIcon} />
          ) : (
            <IconButton icon={CaretRightIcon} />
          )}
          {data.module_name}
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
            <div className="text">{elem.role_name}</div>
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
