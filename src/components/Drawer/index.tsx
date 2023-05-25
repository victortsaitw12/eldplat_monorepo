import { Pane } from "evergreen-ui";
import React from "react";
import { DrawerSTY } from "./style";
import DrawerTabs from "@components/Drawer/DrawerTabs";

interface DrawerProps {
  tabName: string[];
  children: React.ReactNode;
  closeDrawer: () => void;
}

const Drawer = ({ tabName, children, closeDrawer }: DrawerProps) => {
  const titles = tabName || ["輔助視窗"];

  return (
    <DrawerSTY className="drawer__container">
      <DrawerTabs titles={titles} closeDrawer={closeDrawer} />
      <div className="drawer__content">{children}</div>
    </DrawerSTY>
  );
};

export default Drawer;
