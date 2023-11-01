import React from "react";
import {
  Button,
  CaretRightIcon,
  CaretDownIcon,
  PlusIcon,
  EditIcon,
  Tooltip
} from "evergreen-ui";
import { DivSTY } from "./style";

import { I_CreateOrgReq } from "@services/org/createOrg";
import { I_EditOrgReq } from "@services/org/updateOrg";

//====== REACT COMPONENT ======//
const Accordion = ({
  className,
  customSTY,
  isTop,
  data,
  onCreate,
  onEdit
}: I_Props) => {
  const [isOpen, setIsOpen] = React.useState(true);

  //------ functions ------//
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // ------- useEffect ------- //
  // ------- render ------- //

  return (
    <DivSTY className={`${className} ${customSTY || "acc"}`}>
      {isTop && <AccordionControl customSTY={customSTY} onClick={setIsOpen} />}
      <div onClick={handleToggle}>
        <AccordionItem
          customSTY={customSTY}
          itemData={data}
          prefixIcon={isOpen ? <CaretDownIcon /> : <CaretRightIcon />}
          onCreate={onCreate}
          onEdit={onEdit}
        />
      </div>

      <div
        className={`${customSTY || "acc"}__items ${
          isOpen ? "" : "hide"
        } padStart`}
      >
        {data.children &&
          data.children.map((elem, i) => {
            if (elem.children) {
              return (
                <Accordion
                  key={`accordion-${i}`}
                  isTop={false}
                  data={elem}
                  onCreate={onCreate}
                  onEdit={onEdit}
                />
              );
            } else {
              return (
                <AccordionItem
                  key={`item-${i}`}
                  customSTY={customSTY}
                  itemData={elem}
                  onCreate={onCreate}
                  onEdit={onEdit}
                />
              );
            }
          })}
      </div>
    </DivSTY>
  );
};

export default Accordion;

const PadIcon = () => <svg className="padIcon"></svg>;

const AccordionControl = ({
  customSTY,
  onClick
}: {
  customSTY?: string;
  onClick: (v: boolean) => void;
}) => {
  return (
    <div className={`${customSTY || "acc"}__title-btns`}>
      <Button onClick={() => onClick(false)}>全部收合</Button>{" "}
      <Button onClick={() => onClick(true)}>全部展開</Button>
    </div>
  );
};

const AccordionItem = ({
  customSTY,
  itemData,
  prefixIcon = <PadIcon />,
  onCreate,
  onEdit
}: I_ItemProps) => {
  return (
    <div className={`${customSTY || "acc"}__item`} id={itemData.id}>
      <div className="acc__item-start">
        <span>{prefixIcon}</span>
        <span>{itemData.label}</span>
      </div>
      <div className="acc__item-end">
        <Tooltip content="新增下級">
          <PlusIcon onClick={onCreate.bind(null, itemData)} />
        </Tooltip>
        <Tooltip content="編輯">
          <EditIcon onClick={onEdit.bind(null, itemData)} />
        </Tooltip>
      </div>
    </div>
  );
};

//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  className?: string;
  customSTY?: string;
  isTop: boolean;
  data: I_Accordion;
  onCreate: (item: any, e: any) => void;
  onEdit: (item: any, e: any) => void;
}

interface I_ItemProps {
  customSTY?: string;
  itemData: I_ItemData;

  prefixIcon?: React.ReactNode;
  onCreate: (item: any, e: any) => void;
  onEdit: (item: any, e: any) => void;
}

export interface I_Accordion {
  id: string;
  label: string;
  children?: I_Accordion[];
}

interface I_ItemData {
  id: string;
  label: string;
}
