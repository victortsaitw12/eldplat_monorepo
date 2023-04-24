import {
  Pane,
  Tablist,
  Tab,
  FullscreenIcon,
  Icon,
  CrossIcon,
  PlusIcon
} from "evergreen-ui";
import React, { useState } from "react";
import ContentFrame from "./ContentFrame";
import { tabsData } from "./ContentFrame/data";
import { BodySTY } from "./style";

// TODO: 測試用，之後可以拿掉
interface I_MainBookmark {
  children?: React.ReactNode;
}

function MainBookmarkOneLayer({ children }: I_MainBookmark) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [subBookmarkActive, setSubBookmarkActive] = useState<string>("");
  const [tabs] = useState(tabsData);

  return (
    <BodySTY>
      <Pane height="100%">
        {/* 主頁籤 */}
        <Tablist
          flexBasis={240}
          // marginRight={24}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className="top-bookmark"
        >
          <Pane className="title" display="flex">
            {tabs.map((tab, index) => {
              const tabName = tab.bookmarkTitle.name;
              return (
                <Tab
                  aria-controls={`panel-${tabName}`}
                  isSelected={index === selectedIndex}
                  key={tabName}
                  onSelect={() => setSelectedIndex(index)}
                >
                  {tab.bookmarkTitle.value === "add" && (
                    <Icon icon={PlusIcon} size={12} />
                  )}
                  {tabName}
                </Tab>
              );
            })}
          </Pane>
          <Pane cursor="pointer">
            <Icon
              icon={FullscreenIcon}
              size={16}
              marginY="auto"
              marginX="10px"
              color="#91A9C5"
            />
            <Icon
              icon={CrossIcon}
              size={18}
              marginY="auto"
              marginX="10px"
              color="#91A9C5"
            />
          </Pane>
        </Tablist>

        <Pane
          background="#FFFFFF"
          flex="1"
          borderRadius="10px"
          height="calc(100% - 40px)"
        >
          <Pane height="calc(100% - 50px)" overflowX="auto">
            {/* TODO: Put Testing Component Here!!!!!!!! */}
            {children}
          </Pane>
        </Pane>
      </Pane>
    </BodySTY>
  );
}

export default MainBookmarkOneLayer;
