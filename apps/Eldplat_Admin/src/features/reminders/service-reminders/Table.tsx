import React from "react";

import {
  TextInput,
  SearchInput,
  Popover,
  Position,
  Button,
  IconButton,
  // Icon
  ChevronDownIcon,
  FilterListIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "evergreen-ui";
import Table from "@components/Table/Table";
import { StatusSTY } from "@components/Table/style";
import {
  MOCK_TITLES,
  MOCK_DATA
} from "src/mock-data/reminders/service-reminders/01Table";
import { StatusCount } from "./_common";

import {
  TableSTY,
  OperateBarSTY,
  PopoverSTY,
  StatusGuideBarSTY
} from "./style";

interface I_FastSearchButton {
  btName?: string;
}

function StatusGuideBar() {
  return (
    <StatusGuideBarSTY>
      <span className="item active">ALL</span>
      <StatusSTY className="item" status="warning">
        Due Soon
      </StatusSTY>
      <StatusSTY className="item" status="error">
        Overdue
      </StatusSTY>
      <StatusSTY className="item">Snoozed</StatusSTY>
    </StatusGuideBarSTY>
  );
}

function OperateBar() {
  function FastSearchButton(props: I_FastSearchButton) {
    return (
      <Popover
        content={({ close }) => (
          <PopoverSTY className="popover fast-search-popover">
            <TextInput width="100%" placeholder="Select item(s)" />
            <div className="search-result-list">TODO：SearchResult</div>
            <div className="button-wrap">
              <a className="cancel button" onClick={close}>
                Cancel
              </a>
              <Button className="apply button">Apply</Button>
            </div>
          </PopoverSTY>
        )}
        position={Position.BOTTOM_LEFT}
      >
        {/* TODO: 此處待套用共用Button */}
        <Button
          className="fast-search-button button"
          iconAfter={ChevronDownIcon}
        >
          {props.btName}
        </Button>
      </Popover>
    );
  }

  return (
    <OperateBarSTY>
      <div className="left-wrap">
        <SearchInput placeholder="Search" className="search-bar" />
        <FastSearchButton btName="Vehicle" />
        <FastSearchButton btName="Service Task" />
        <FastSearchButton btName="Vehicle Group" />
        <FastSearchButton btName="Watcher" />
        <Button iconBefore={FilterListIcon} className="button filter">
          Filters
        </Button>
      </div>
      <div className="right-wrap">
        <div className="guide-wrap">
          <span className="page">1 - 11 of 11</span>
          <span className="button-wrap">
            <IconButton icon={ChevronLeftIcon} />
            <IconButton icon={ChevronRightIcon} />
          </span>
        </div>
        <Popover
          content={({ close }) => (
            <PopoverSTY className="popover view-mode">
              <ul className="view-mode-list">
                <li className="item" onClick={close}>
                  None
                </li>
                <li className="item" onClick={close}>
                  Vehicle
                </li>
              </ul>
            </PopoverSTY>
          )}
          position={Position.BOTTOM_RIGHT}
        >
          {/* TODO: 此處待套用共用Button */}
          <Button
            className="fast-search-button button"
            iconAfter={ChevronDownIcon}
          >
            Group: None
          </Button>
        </Popover>
        <IconButton icon={CogIcon} />
      </div>
    </OperateBarSTY>
  );
}

function ServiceTable() {
  return (
    <TableSTY>
      <StatusGuideBar />
      <OperateBar />
      <StatusCount>
        <li className="item">
          <div className="title">Overdue Vehicles</div>
          <div className="value error">2</div>
        </li>
        <li className="item">
          <div className="title">Due Soon Vehicles</div>
          <div className="value warning">3</div>
        </li>
        <li className="item">
          <div className="title">Snoozed Vehicles</div>
          <div className="value">0</div>
        </li>
        <li className="item">
          <div className="title">Average Compliance</div>
          <div className="value">
            <span className="num warning">40%</span>
            <span className="unit">on-time</span>
          </div>
        </li>
      </StatusCount>
      <Table titles={MOCK_TITLES} data={MOCK_DATA} />
    </TableSTY>
  );
}

export default ServiceTable;
