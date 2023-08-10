import React, { useState } from "react";
import {
  Pane,
  Text,
  IconButton,
  FullscreenIcon,
  SmallCrossIcon
} from "evergreen-ui";
import { TabsSTY } from "./style";

interface I_Tabs {
  titles?: any[];
  selectedIdx?: number;
  setIsOpenDrawer?: (arg: boolean) => void;
  isOpenDrawer?: boolean;
  onSelect?: (arg: any) => void;
}
const Tabs = ({
  titles,
  selectedIdx,
  setIsOpenDrawer,
  isOpenDrawer,
  onSelect
}: I_Tabs) => {
  const DETAIL_TABS = titles || ["編輯"]; // 顯示頁籤名稱, 預設單一標籤:"編輯"
  const [currentTab, setCurrentTab] = useState(selectedIdx || 0); //預設選取第一個 tab

  return (
    <TabsSTY>
      <Pane className="tabs" display="flex">
        {DETAIL_TABS.map((item, index) => {
          return (
            <Text
              className={`tab ${index === currentTab && "current"}`}
              key={"tab-" + index}
              onClick={() => {
                const updateCurrent = index;
                setCurrentTab(updateCurrent);
                onSelect && onSelect(index);
              }}
            >
              {item}
            </Text>
          );
        })}
      </Pane>
      <Pane className="icons">
        {setIsOpenDrawer && (
          <>
            {" "}
            <IconButton
              icon={FullscreenIcon}
              onClick={() => setIsOpenDrawer(false)}
            />
            <IconButton
              icon={SmallCrossIcon}
              onClick={() => setIsOpenDrawer(!isOpenDrawer)}
            />
          </>
        )}
      </Pane>
    </TabsSTY>
  );
};

export default Tabs;
