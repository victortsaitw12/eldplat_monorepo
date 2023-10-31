import React from "react";
import { Pane, Button } from "evergreen-ui";
import { DivSTY } from "./style";

interface I_Props {
  className?: string;
  customSTY?: string;
  title?: string;
  parent: string;
  orderNum: number;
  dataArr: I_Accordion[];
}

interface I_Accordion {
  id: string;
  label: string;
  children?: I_Accordion[];
}
const Accordion = ({
  className,
  customSTY,
  title,
  parent,
  orderNum,
  dataArr
}: I_Props) => {
  //TODO Make this accordion reusable
  const [isOpen, setIsOpen] = React.useState(true);
  const [openChildren, setOpenChildren] = React.useState<number[]>([]);

  const renderChildren = () => {};

  return (
    <DivSTY className={`${className} ${customSTY || "acc"}`}>
      {title && (
        <>
          <div
            className={`${customSTY || "acc"}__title`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
          </div>
          <div
            className={`${customSTY || "acc"}__control`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Button>全部收合</Button> <Button>全部展開</Button>
          </div>
        </>
      )}
      <div
        className={`${customSTY || "acc"}__parent`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {parent}
      </div>
      <div className={`${customSTY || "acc"}__content ${isOpen ? "" : "hide"}`}>
        {dataArr.map((elem, i) => {
          if (elem.children) {
            const childData = elem.children;
            return (
              <Accordion
                key={`org-acc-${i}`}
                parent={elem.label}
                orderNum={i}
                dataArr={elem.children || []}
              />
            );
          } else {
            return (
              <div
                key={`${title}-${i}`}
                className={`${customSTY || "acc"}__child`}
              >
                {elem.label}
              </div>
            );
          }
        })}
      </div>
    </DivSTY>
  );
};

export default Accordion;
