import React from "react";

import { Badge, Table } from "evergreen-ui";
import Image from "next/image";

import DetailTable from "@components/Table/DetailTable";

import { StatusCount } from "./_common";

import { DetailsOverviewSTY, BoxItemSTY, BasicSTY } from "./style";

import { DETAIL_TITLE, DETAIL_RESUME_DATA, DETAIL_BASIC } from "../detail.data";

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
    title: DETAIL_TITLE,
    data: DETAIL_RESUME_DATA
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
          title="基本資料"
          content={
            <BasicSTY>
              <Image
                width="120"
                height="120"
                src="/images/avatar1.jpg"
                alt="test"
              />
              <DetailTable title="" data={DETAIL_BASIC} />
            </BasicSTY>
          }
        />
        <BoxItem
          title={sampleData.Detail.title}
          content={<DetailTable title="" data={sampleData.Detail.data} />}
        />
      </div>
      <div className="right-wrap box-wrap">
        {/* <BoxItem
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
									<Table.TextCell className="td"></Table.TextCell>
								</Table.Row>
							</Table.Body>
						</Table>
					}
					moreInfo={{
						remark: "Improve compliance with Forecasting",
						hrefText: {
							text: "Learn More",
							href: "#",
						},
					}}
				/> */}
        <BoxItem
          title="歷史紀錄"
          content={
            <>
              <StatusCount>
                <li className="item">
                  <div className="title">過期車輛</div>
                  <div className="value error">2</div>
                </li>
                <li className="item">
                  <div className="title">過期車輛</div>
                  <div className="value error">2</div>
                </li>
                <li className="item">
                  <div className="title">過期車輛</div>
                  <div className="value error">2</div>
                </li>
              </StatusCount>
              <Table className="table history-table">
                <Table.Head className="thead">
                  <Table.TextCell>到期日</Table.TextCell>
                  <Table.TextCell>駕駛時數</Table.TextCell>
                  <Table.TextCell>遵守</Table.TextCell>
                </Table.Head>
                <Table.Body className="tbody">
                  <Table.Row className="tr value">
                    <Table.TextCell className="td">
                      <div className="due-wrap">
                        <div className="date">2023/9/5 </div>
                        <div className="value">16,100公里</div>
                      </div>
                    </Table.TextCell>
                    <Table.TextCell className="td">
                      <div className="completed-wrap">
                        <div className="date">2022/12/04</div>
                        <div className="value">18,150公里</div>
                      </div>
                    </Table.TextCell>
                    <Table.TextCell className="td">
                      <div className="completed-wrap">
                        <div className="badge">
                          <Badge color="red">延遲</Badge>
                        </div>
                        <div className="status">尚逾九個月 - 2,057公里</div>
                      </div>
                    </Table.TextCell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </>
          }
          moreInfo={{
            hrefText: {
              text: "觀看歷史紀錄",
              href: "#"
            }
          }}
        />
      </div>
    </DetailsOverviewSTY>
  );
}

export default DetailsOverview;
