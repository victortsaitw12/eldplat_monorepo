import React from "react";
import { DivSTY } from "./style";

const Skeleton = () => {
  return (
    <DivSTY className="skeleton">
      <div className="skeleton__line"></div>
      <div className="skeleton__line"></div>
      <div className="skeleton__line"></div>
    </DivSTY>
  );
};

export default Skeleton;
