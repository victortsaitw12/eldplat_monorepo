import React from "react";
import {
  Group,
  IconButton,
  GridViewIcon,
  HorizontalBarChartIcon
} from "evergreen-ui";
import { LayoutControlSTY } from "./style";
import { UIContext } from "@contexts/UIProvider";

const LayoutControl = ({
  view,
  setView,
  setIsOpenDrawer
}: {
  view: "monthly" | "daily";
  setView: (arg: "monthly" | "daily") => void;
  setIsOpenDrawer: (value: boolean) => void;
}) => {
  const UI = React.useContext(UIContext);
  const renderToggleView = (type: "monthly" | "daily") => {
    setView(type);
    UI.resetState();
    setIsOpenDrawer(false);
  };
  return (
    <LayoutControlSTY>
      <Group>
        <IconButton
          icon={GridViewIcon}
          className={`${view === "monthly" ? "currentView" : "notCurrent"}`}
          onClick={renderToggleView.bind(null, "monthly")}
        />
        <IconButton
          icon={HorizontalBarChartIcon}
          className={`${view === "daily" ? "currentView" : "notCurrent"}`}
          onClick={renderToggleView.bind(null, "daily")}
        />
      </Group>
    </LayoutControlSTY>
  );
};

export default LayoutControl;
