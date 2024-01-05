import React from "react";
import Accordion from "@components/Accordion";
import { Button, CaretRightIcon, CaretDownIcon } from "evergreen-ui";

//====== REACT COMPONENT ======//
const AccordionItem = ({
  itemData,
  isUnfold,
  isFold,
  layerNum
}: I_ItemProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(isUnfold || true);
  const hasChildren = itemData.children && itemData.children?.length > 0;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    if (!isUnfold) return;
    setIsOpen(true);
  }, [isUnfold]);

  React.useEffect(() => {
    if (!isFold) return;
    setIsOpen(false);
  }, [isFold]);

  const padStartArray = Array.from({ length: layerNum || 0 }, (_, i) => (
    <PadStart key={`layer-${i}`} />
  ));

  return (
    <>
      <div className="acc__item" onClick={handleToggle}>
        {padStartArray}
        {hasChildren && (isOpen ? <CaretDownIcon /> : <CaretRightIcon />)}
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

export default AccordionItem;

const PadStart = () => <div className="padStart"></div>;

//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  data: I_AccordionItem[];
  isTopLayer?: boolean;
  layerNum?: number;
  isUnfold?: boolean;
  isFold?: boolean;
  className?: string;
}

interface I_ItemProps {
  itemData: I_AccordionItem;
  isTopLayer?: boolean;
  isUnfold?: boolean;
  isFold?: boolean;
  layerNum?: number;
}

export interface I_AccordionItem {
  label: string | React.ReactNode;
  children?: I_AccordionItem[];
}
