import React from "react";
import {
  Group,
  IconButton,
  GridViewIcon,
  HorizontalBarChartIcon
} from "evergreen-ui";
import { LayoutControlSTY } from "./style";
import { UIContext } from "@contexts/scheduleContext/UIProvider";

const LayoutControl = ({
  setState
}: {
  setState: (arg: "monthly" | "daily") => void;
}) => {
  const UI = React.useContext(UIContext);
  const renderToggleView = (type: "monthly" | "daily") => {
    setState(type);
    UI.resetState();
    UI.setTimeframe(1000 * 60 * 60 * 2);
  };
  return (
    <LayoutControlSTY>
      <Group>
        <IconButton
          icon={GridViewIcon}
          onClick={renderToggleView.bind(null, "monthly")}
        />
        <IconButton
          icon={HorizontalBarChartIcon}
          onClick={renderToggleView.bind(null, "daily")}
        />
      </Group>
    </LayoutControlSTY>
  );
};

export default LayoutControl;
