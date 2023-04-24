import React from "react";

import {
  Badge,
  Table,
  // Icon
  CalendarIcon
} from "evergreen-ui";
import DetailTable from "@components/Table/DetailTable";

import {
  EXPENSE_lIST_DETAIL_TITLE,
  EXPENSE_lIST_DETAIL_DATA
} from "src/mock-data/reminders/service-reminders/02DetailsOverview";
import { StatusCount } from "./_common";

import { DetailsOverviewSTY, BoxItemSTY } from "./style";

interface I_DetailsOverview {
  [key: string]: {
    title: string;
    data: any;
  };
}

interface I_BoxItem {
  title: string;
  content: React.ReactNode;
  moreInfo?: {
    remark?: string;
    hrefText: {
      text: string;
      href: string;
    };
  };
}

const sampleData: I_DetailsOverview = {
  Detail: {
    title: EXPENSE_lIST_DETAIL_TITLE,
    data: EXPENSE_lIST_DETAIL_DATA
  }
};

function BoxItem(props: I_BoxItem) {
  return (
    <BoxItemSTY>
      <div className="head">
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        {props.moreInfo && (
          <div className="more-info">
            <div className="remark">{props.moreInfo.remark}</div>
            <a className="href-text" href={props.moreInfo.hrefText.href}>
              {props.moreInfo.hrefText.text}
            </a>
          </div>
        )}
      </div>
      <div className="content">{props.content}</div>
    </BoxItemSTY>
  );
}

function DetailsOverview() {
  return (
    <DetailsOverviewSTY>
      <div className="left-wrap box-wrap">
        <BoxItem
          title={sampleData.Detail.title}
          content={<DetailTable title="" data={sampleData.Detail.data} />}
        />
      </div>
      <div className="right-wrap box-wrap">
        <BoxItem
          title="Next Due"
          content={
            <Table className="table next-duo-table">
              <Table.Head className="thead">
                <Table.TextCell>Scheduled Date</Table.TextCell>
                <Table.TextCell>Primary Meter</Table.TextCell>
              </Table.Head>
              <Table.Body className="tbody">
                <Table.Row className="tr value">
                  <Table.TextCell className="td">
                    <CalendarIcon className="icon" />
                    06/03/2023
                  </Table.TextCell>
                  <Table.TextCell className="td">21,278 mi</Table.TextCell>
                </Table.Row>
                <Table.Row className="tr interval">
                  <Table.TextCell className="td">
                    3 months from now
                  </Table.TextCell>
                  <Table.TextCell className="td warning">
                    467 miles remaining
                  </Table.TextCell>
                </Table.Row>
                <Table.Row className="tr remark">
                  <Table.TextCell className="td">Upcoming</Table.TextCell>
                  <Table.TextCell className="td" />
                </Table.Row>
              </Table.Body>
            </Table>
          }
          moreInfo={{
            remark: "Improve compliance with Forecasting",
            hrefText: {
              text: "Learn More",
              href: "#"
            }
          }}
        />
        <BoxItem
          title="History"
          content={
            <>
              <StatusCount>
                <li className="item">
                  <div className="title">Overdue Vehicles</div>
                  <div className="value error">2</div>
                </li>
                <li className="item">
                  <div className="title">Overdue Vehicles</div>
                  <div className="value error">2</div>
                </li>
                <li className="item">
                  <div className="title">Overdue Vehicles</div>
                  <div className="value error">2</div>
                </li>
              </StatusCount>
              <Table className="table history-table">
                <Table.Head className="thead">
                  <Table.TextCell>Due</Table.TextCell>
                  <Table.TextCell>Completed</Table.TextCell>
                  <Table.TextCell>Compliance</Table.TextCell>
                </Table.Head>
                <Table.Body className="tbody">
                  <Table.Row className="tr value">
                    <Table.TextCell className="td">
                      <div className="due-wrap">
                        <div className="date">Sep 5, 2023</div>
                        <div className="value">10,000 mi</div>
                      </div>
                    </Table.TextCell>
                    <Table.TextCell className="td">
                      <div className="completed-wrap">
                        <div className="date">12/04/2022</div>
                        <div className="value">11,278 mi</div>
                      </div>
                    </Table.TextCell>
                    <Table.TextCell className="td">
                      <div className="completed-wrap">
                        <div className="badge">
                          <Badge color="red">Late</Badge>
                        </div>
                        <div className="status">
                          9 months ahead·1,278 miles behind
                        </div>
                      </div>
                    </Table.TextCell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </>
          }
          moreInfo={{
            hrefText: {
              text: "View History",
              href: "#"
            }
          }}
        />
      </div>
    </DetailsOverviewSTY>
  );
}

export default DetailsOverview;
