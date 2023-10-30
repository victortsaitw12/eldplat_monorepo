import React from "react";
import { Pane } from "evergreen-ui";

interface I_Props {
  className?: string;
  title: string;
  objectArr: any[];
}
const Accordion = ({ className, title, objectArr }: I_Props) => {
  //TODO Make this accordion reusable
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Pane className={`${className} accordion`}>
      <div className="accordion__title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div className={`accordion__content ${isOpen ? "hide" : ""}`}>
        {objectArr.map((elem, i) => (
          <div key={`${title}-${i}`}>{elem.label}</div>
        ))}
      </div>
    </Pane>
  );
};

export default Accordion;
