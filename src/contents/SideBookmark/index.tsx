import { RightBookData } from "@contents/MainBookmark/ContentFrame/data";
import {
  Pane,
  Tablist,
  Tab,
  Icon,
  PlusIcon,
  FullscreenIcon,
  CrossIcon,
  Card
} from "evergreen-ui";
import React, { useState } from "react";
import { BodySTY } from "./style";

function SideBookMark() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <BodySTY>
      <Pane height="100%">
        {/* 主頁籤 */}
        <Tablist
          flexBasis={240}
          marginRight={24}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className="top-bookmark"
        >
          <Pane className="title" display="flex">
            {RightBookData.map((tab, index) => {
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

        {/* 內容欄 */}
        <Card
          height="calc(100% - 40px)"
          background="#FFFFFF"
          borderRadius="10px"
        />
      </Pane>
    </BodySTY>
  );
}

export default SideBookMark;
