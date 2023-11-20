import React from "react";
import { Button, CaretRightIcon, CaretDownIcon } from "evergreen-ui";
import { DivSTY } from "./style";

//====== REACT COMPONENT ======//
const Accordion = ({
  data,
  isTopLayer = false,
  layerNum,
  isUnfold,
  isFold,
  className
}: I_Props) => {
  const [isAllOpen, setIsAllOpen] = React.useState(isUnfold || false);
  const [isAllFold, setIsAllFold] = React.useState(isFold || false);

  const subLayerNum = layerNum || 0;

  const handleOpenAll = () => {
    setIsAllOpen(true);
    setIsAllFold(false);
  };

  const handleFoldAll = () => {
    setIsAllFold(true);
    setIsAllOpen(false);
  };

  React.useEffect(() => {
    if (!isAllOpen) return;
    setIsAllOpen(false);
  }, [isAllOpen]);

  React.useEffect(() => {
    if (!isAllFold) return;
    setIsAllFold(false);
  }, [isAllFold]);

  React.useEffect(() => {
    if (isUnfold) {
      setIsAllOpen(true);
      setIsAllFold(false);
    }
  }, [isUnfold]);

  React.useEffect(() => {
    if (isFold) {
      setIsAllFold(true);
      setIsAllOpen(false);
    }
  }, [isFold]);

  return (
    <DivSTY className={`acc ${className}`}>
      {isTopLayer && (
        <div className="acc__btns">
          <Button onClick={handleFoldAll}>全部收合</Button>
          <Button onClick={handleOpenAll}>全部展開</Button>
        </div>
      )}
      {data.map((item: I_AccordionItem, i: number) => (
        <AccordionItem
          key={i}
          itemData={item}
          isTopLayer={isTopLayer}
          isUnfold={isAllOpen}
          isFold={isAllFold}
          layerNum={subLayerNum + 1}
        />
      ))}
    </DivSTY>
  );
};

export default Accordion;

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
