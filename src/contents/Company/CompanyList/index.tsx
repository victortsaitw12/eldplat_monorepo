import React, { useContext } from "react";
import { BodySTY } from "./style";
import Router from "next/router";

import {
  Pane,
  Text,
  Button,
  IconButton,
  FullscreenIcon,
  SmallCrossIcon,
  majorScale,
  EditIcon
} from "evergreen-ui";
import Basic from "@contents/Company/CompanyList/Basic";
import CountrySet from "./CountrySet";
import CompanyRule from "./CompanyRule";
import Admin from "./Admin";
import Contact from "./Contact";
import LeaveSet from "./LeaveSet";

const ComapnyList = () => {
  return (
    <BodySTY>
      <Pane display="flex" justifyContent="space-between" className="title-bar">
        <Text className="title-label">公司設定</Text>
        <Pane className="right-function">
          <Button
            iconBefore={EditIcon}
            className="save"
            onClick={() => {
              Router.push("/company/edit");
            }}
          >
            編輯
          </Button>
          <IconButton icon={FullscreenIcon} />
          <IconButton icon={SmallCrossIcon} marginRight={majorScale(1)} />
        </Pane>
      </Pane>

      {/* 新增表格區塊們 */}
      <Pane className="add-blocks">
        <Pane className="left-blocks">
          <Basic />
          <CountrySet />
          <CompanyRule />
        </Pane>
        <Pane className="right-blocks">
          <Admin />
          <Contact />
          <LeaveSet />
        </Pane>
      </Pane>
    </BodySTY>
  );
};

export default ComapnyList;
