import React from "react";
import {
  Pane,
  Button,
  CaretRightIcon,
  CaretDownIcon,
  PlusIcon,
  EditIcon,
  Tooltip
} from "evergreen-ui";
import { DivSTY } from "./style";

interface I_Props {
  className?: string;
  customSTY?: string;
  isTop: boolean;
  label: string;
  dataArr?: I_Accordion[];
}

interface I_Accordion {
  id: string;
  label: string;
  children?: I_Accordion[];
}
const Accordion = ({
  className,
  customSTY,
  isTop,
  label,
  dataArr
}: I_Props) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DivSTY className={`${className} ${customSTY || "acc"}`}>
      {isTop && <AccordionControl customSTY={customSTY} onClick={setIsOpen} />}
      <div onClick={handleToggle}>
        <AccordionItem
          customSTY={customSTY}
          label={label}
          icon={isOpen ? <CaretDownIcon /> : <CaretRightIcon />}
        />
      </div>

      <div
        className={`${customSTY || "acc"}__items ${
          isOpen ? "" : "hide"
        } padStart`}
      >
        {dataArr &&
          dataArr.map((elem, i) => {
            if (elem.children) {
              return (
                <Accordion
                  key={`accordion-${i}`}
                  isTop={false}
                  label={elem.label}
                  dataArr={elem.children || []}
                />
              );
            } else {
              return (
                <AccordionItem
                  key={`item-${i}`}
                  customSTY={customSTY}
                  label={elem.label}
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
    <>
      <div className={`${customSTY || "acc"}__title-btns`}>
        <Button onClick={() => onClick(false)}>全部收合</Button>{" "}
        <Button onClick={() => onClick(true)}>全部展開</Button>
      </div>
    </>
  );
};

const AccordionItem = ({
  customSTY,
  label,
  icon = <PadIcon />
}: {
  customSTY?: string;
  label: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className={`${customSTY || "acc"}__item`}>
      <div className="acc__item-text">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="acc__item-icon">
        <Tooltip content="新增下級">
          <PlusIcon />
        </Tooltip>
        <Tooltip content="編輯">
          <EditIcon />
        </Tooltip>
      </div>
    </div>
  );
};
