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
  setState,
  isOpenDrawer,
  setIsOpenDrawer
}: {
  setState: (arg: "monthly" | "daily") => void;
  isOpenDrawer: boolean;
  setIsOpenDrawer: (v: boolean) => void;
}) => {
  const scheduleUI = React.useContext(UIContext);
  const renderToggleView = (type: "monthly" | "daily") => {
    const rendering = () => {
      setState(type);
      scheduleUI.resetState();
    };
    if (isOpenDrawer) {
      setIsOpenDrawer(false);
      setTimeout(() => {
        rendering();
      }, 200);
    } else {
      rendering();
    }
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
