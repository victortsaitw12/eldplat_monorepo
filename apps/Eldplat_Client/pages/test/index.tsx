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

import DetailsOverview from "@features/reminders/service-reminders/DetailsOverview";
import DetailsHistory from "@features/reminders/service-reminders/DetailsHistory";
import Add from "@features/reminders/service-reminders/Add";
import { BodySTY } from "./style";

const isFullWidth = true;
//= ===============================================================

function TestPage() {
  const [lightBoxIsOpen, setLightBoxIsOpen] = useState<boolean>(false);
  const openLightBox = () => setLightBoxIsOpen(true);
  const closeLightBox = () => setLightBoxIsOpen(false);
  const [visibleForm, setVisibleForm] = useState<string>("Dimensions");
  const [currentTab, setCurrentTab] = useState(0);

  const tabList = [
    { index: 0, label: "駕駛資訊", content: <DetailsOverview /> },
    { index: 1, label: "提醒事項", content: <Add /> }
    // { index: 2, label: "Temp", content: <DetailsHistory /> },
  ];

  return (
    <BodySTY>
      <Pane display="flex" justifyContent="space-between" className="title-bar">
        <Group>
          {tabList.map((item) => {
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
      {tabList.map((item) => {
        return (
          <Pane
            key={`content-${item.index}`}
            className={`pane ${item.index === currentTab ? "current" : ""}`}
            width="100%"
            height="100%"
            background="#fff"
            borderRadius="10px"
            overflow="auto"
          >
            {item.content}
          </Pane>
        );
      })}
    </BodySTY>
  );
}

TestPage.getLayout = getLayout;

export default TestPage;
