import React from "react";
import { Button, CaretRightIcon, CaretDownIcon } from "evergreen-ui";
import { DivSTY } from "./style";

//====== REACT COMPONENT ======//
const Accordion = ({ data, isTopLayer = false, layerNum }: I_Props) => {
  const [isAllOpen, setIsAllOpen] = React.useState(false);
  const [isAllFold, setIsAllFold] = React.useState(false);

  const subLayerNum = layerNum || 0;

  React.useEffect(() => {
    setIsAllOpen(false);
  }, [isAllOpen]);

  React.useEffect(() => {
    setIsAllFold(false);
  }, [isAllFold]);

  return (
    <DivSTY className="acc">
      {isTopLayer && (
        <div className="acc__btns">
          <Button onClick={() => setIsAllFold(true)}>全部收合</Button>
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
          layerNum={subLayerNum + 1}
        />
      ))}
    </DivSTY>
  );
};

export default Accordion;

const AccordionItem = ({
  itemData,
  isAllOpen,
  isAllFold,
  layerNum
}: I_ItemProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(isAllOpen || true);
  const hasChildren = itemData.children && itemData.children?.length > 0;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    if (!isAllOpen) return;
    setIsOpen(true);
  }, [isAllOpen]);

  React.useEffect(() => {
    if (!isAllFold) return;
    setIsOpen(false);
  }, [isAllFold]);

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
          isAllFold ? "hide" : ""
        }`}
      >
        {hasChildren && itemData.children && (
          <Accordion
            data={itemData.children}
            layerNum={(layerNum || 0) + 1}
            isUnfold={isAllOpen}
            isFold={isAllFold}
          />
        )}
      </div>
    </>
  );
};

const PadStart = () => <div className="padStart"></div>;

//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  data: I_AccordionItem[];
  isTopLayer?: boolean;
  layerNum?: number;
  isUnfold?: boolean;
  isFold?: boolean;
}

interface I_ItemProps {
  itemData: I_AccordionItem;
  isTopLayer?: boolean;
  isAllOpen?: boolean;
  isAllFold?: boolean;
  layerNum?: number;
}

export interface I_AccordionItem {
  label: string | React.ReactNode;
  children?: I_AccordionItem[];
}
