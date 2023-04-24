import React, { useState } from "react";
import { getLayout } from "@layout/MainLayout";
import {
  Pane,
  Text,
  Group,
  IconButton,
  FullscreenIcon,
  SmallCrossIcon
} from "evergreen-ui";
import Details from "@contents/Driver/Detail";
import History from "@contents/Driver/History";
import { BodySTY } from "./style";

// ================================================================

function DetailPage() {
  const [currentTab, setCurrentTab] = useState(0);

  const DETAIL_TABS = [
    { index: 0, label: "駕駛資訊", content: <Details /> },
    { index: 1, label: "異動紀錄", content: <History /> }
  ];

  return (
    <BodySTY>
      <Pane className="title-bar" display="flex" justifyContent="space-between">
        <Group>
          {DETAIL_TABS.map((item) => {
            return (
              <Text
                className={`tab ${item.index === currentTab ? "current" : ""}`}
                key={`tab-${item.index}`}
                onClick={() => {
                  const updateCurrent = item.index;
                  setCurrentTab(updateCurrent);
                }}
              >
                {item.label}
              </Text>
            );
          })}
        </Group>
        <Pane className="right-function">
          <IconButton icon={FullscreenIcon} />
          <IconButton icon={SmallCrossIcon} />
        </Pane>
      </Pane>
      {DETAIL_TABS.map((item) => {
        return (
          <Group
            key={`content-${item.index}`}
            className={`pane ${item.index === currentTab ? "current" : ""}`}
            width="100%"
            height="100%"
            borderRadius="10px"
            overflow="auto"
          >
            {item.content}
          </Group>
        );
      })}
    </BodySTY>
  );
}

DetailPage.getLayout = getLayout;

export default DetailPage;
