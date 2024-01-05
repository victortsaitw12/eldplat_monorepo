import { DivSTY } from "./style";
import { useState } from "react";
import InfoCard from "@components/InfoCard/PureStyle";
import Collapse from "@components/Collapse";
import { Pane, ArrowRightIcon } from "evergreen-ui";
import MainDetail from "./MainDetail";
import ExpenseCard from "./ExpenseCard";

const Detail = () => {
  return (
    <DivSTY>
      <Pane flex={2}>
        <MainDetail />
      </Pane>
      <Pane flex={1}>
        <ExpenseCard />
      </Pane>
    </DivSTY>
  );
};

export default Detail;
