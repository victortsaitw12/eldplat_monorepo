import { Pane } from "evergreen-ui";
import React from "react";
import { DrawerSTY } from "./style";
import DrawerTabs from "@components/Drawer/DrawerTabs";
import cx from "classnames";
interface DrawerProps {
  isFullScreen?: boolean;
  tabName?: string[];
  children: React.ReactNode;
  closeDrawer?: () => void;
  toggleFullScreenDrawer?: () => void;
}

const Drawer = ({
  isFullScreen = false,
  tabName,
  children,
  closeDrawer,
  toggleFullScreenDrawer
}: DrawerProps) => {
  const titles = tabName || ["輔助視窗"];

  return (
    <DrawerSTY
      className={cx("drawer__container", { fullscreen: isFullScreen })}
    >
      <DrawerTabs
        isFullScreen={isFullScreen}
        titles={titles}
        closeDrawer={closeDrawer}
        toggleFullScreenDrawer={toggleFullScreenDrawer}
      />
      <div className="drawer__content">{children}</div>
    </DrawerSTY>
  );
};

export default Drawer;
