import React from "react";
import { BodySTY } from "./style";
export default function Tooltip({
  children,
  text
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [show, setShow] = React.useState(false);
  return (
    <BodySTY>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>
        {text}
      </div>
    </BodySTY>
  );
}
