import React from "react";
import { CaretRightIcon, CaretDownIcon } from "evergreen-ui";
import { DivSTY } from "./style";

import AccordionItem from "./AccordionItem";
import { Label as Button } from "@components/Button/Secondary";

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
          <Button onClick={handleFoldAll} text="全部收合" />
          <Button onClick={handleOpenAll} text="全部展開" />
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
