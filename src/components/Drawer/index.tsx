import { Pane } from "evergreen-ui";
import React from "react";
import { DrawerSTY } from "./style";
import DrawerTabs from "@components/Drawer/DrawerTabs";
import cx from "classnames";
interface DrawerProps {
  isFullScreen?: boolean;
  tabName?: string[];
  isTabShown?: boolean;
  children: React.ReactNode;
  closeDrawer?: () => void | undefined;
  toggleFullScreenDrawer?: () => void;
}

const Drawer = ({
  isFullScreen = false,
  tabName,
  isTabShown,
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
        isTabShown={isTabShown}
        closeDrawer={closeDrawer}
        toggleFullScreenDrawer={toggleFullScreenDrawer}
      />
      <div className="drawer__content">{children}</div>
    </DrawerSTY>
  );
};

export default Drawer;
