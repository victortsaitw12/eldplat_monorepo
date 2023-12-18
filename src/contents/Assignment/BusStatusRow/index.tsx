import React from "react";
import { RowSTY } from "./style";

const BusStatusRow = ({}: // value,
// className
{
  // value: any;
  // className?: string;
}) => {
  return (
    <RowSTY>
      <>
        <div>
          <p>今日用車</p>
          <span>2</span>
        </div>
        <div>
          <p>尚未派車</p>
          <span>10</span>
        </div>
        <div>
          <p>已派自有車</p>
          <span>3</span>
        </div>
        <div>
          <p>已派外調車</p>
          <span>4</span>
        </div>
      </>
    </RowSTY>
  );
};

export default BusStatusRow;
