import React from "react";
import { Button, CaretRightIcon, CaretDownIcon } from "evergreen-ui";
import { DivSTY } from "./style";

//====== REACT COMPONENT ======//
const Accordion = ({ data, isTopLayer = false }: I_Props) => {
  const [isAllOpen, setIsAllOpen] = React.useState(true);
  const [isAllFold, setIsAllFold] = React.useState(true);

  return (
    <DivSTY className="acc">
      {isTopLayer && (
        <div className="acc__btns">
          <Button onClick={() => setIsAllFold(true)}>全部收合</Button>{" "}
          <Button onClick={() => setIsAllOpen(true)}>全部展開</Button>
        </div>
      )}
      {data.map((item: I_AccordionItem, i: number) => (
        <AccordionItem
          key={i}
          itemData={item}
          isTopLayer={isTopLayer}
          isAllOpen={isAllOpen}
          isAllFold={isAllFold}
        />
      ))}
    </DivSTY>
  );
};

export default Accordion;

const AccordionItem = ({
  itemData,
  isTopLayer = false,
  isAllOpen,
  isAllFold
}: I_ItemProps) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const hasChildren = itemData.children && itemData.children?.length > 0;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="acc__item" onClick={handleToggle}>
        {hasChildren &&
          (isOpen || isTopLayer ? <CaretDownIcon /> : <CaretRightIcon />)}
        <div>{itemData.label}</div>
      </div>
      <div className={`acc__items ${isOpen ? "" : "hide"} padStart`}>
        {hasChildren && <Accordion data={itemData.children} />}
      </div>
    </>
  );
};

const PadStart = () => <div className="padStart"></div>;

//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  data: I_AccordionItem[];
  isTopLayer?: boolean;
}

interface I_ItemProps {
  itemData: I_AccordionItem;
  isTopLayer?: boolean;
  isAllOpen?: boolean;
  isAllFold?: boolean;
}

export interface I_AccordionItem {
  label: string | React.ReactNode;
  children?: I_AccordionItem[];
}
