import React, { useState } from "react";
import {
  Pane,
  Text,
  IconButton,
  FullscreenIcon,
  SmallCrossIcon,
  ChevronDownIcon
} from "evergreen-ui";
import { BodySTY, TabSTY } from "./style";
interface TabsProps {
  titles?: string[];
  closeDrawer: () => void;
}

const DrawerTabs = ({ titles, closeDrawer }: TabsProps) => {
  const DETAIL_TABS = titles || ["編輯"]; // 顯示頁籤名稱, 預設單一標籤:"編輯"
  const [currentTab, setCurrentTab] = useState(0); //預設選取第一個 tab

  return (
    <BodySTY>
      <div className="tab-container">
        {DETAIL_TABS.map((item, index) => {
          return (
            <TabSTY
              key={"tab-" + index}
              onClick={() => {
                const updateCurrent = index;
                setCurrentTab(updateCurrent);
              }}
              isActive={index === currentTab}
            >
              <span>{item}</span>
              <ChevronDownIcon />
            </TabSTY>
          );
        })}
      </div>
      <Pane className="icons">
        <IconButton icon={FullscreenIcon} />
        <IconButton
          icon={SmallCrossIcon}
          onClick={() => {
            closeDrawer();
          }}
        />
      </Pane>
    </BodySTY>
  );
};

export default DrawerTabs;
