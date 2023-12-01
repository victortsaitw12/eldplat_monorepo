import React from "react";
import { NextPageWithLayout } from "next";
import { getLayout } from "@layout/MainLayout";
import {
  DriveTimeIcon,
  WrenchIcon,
  PersonIcon,
  PeopleIcon,
  DocumentIcon,
  ThDerivedIcon
} from "evergreen-ui";
import styled from "styled-components";
import EntranceList from "@contents/Home/EntranceList";
//
const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
  > .home-header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: ${({ theme }) => theme.color.N700};
    > .header-title {
      font-size: 24px;
      font-weight: 600;
    }
    > .header-description {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
//
const routerList: Array<{
  iconImage: React.ReactNode;
  label: string;
  pathUrl: string;
}> = [
  {
    iconImage: <DriveTimeIcon />,
    label: "汽車分配",
    pathUrl: "/bus"
  },
  {
    iconImage: <WrenchIcon />,
    label: "維保任務",
    pathUrl: "/maintenance/record"
  },
  { iconImage: <PersonIcon />, label: "駕駛", pathUrl: "/driver" },
  { iconImage: <PeopleIcon />, label: "客戶", pathUrl: "/customer" },
  { iconImage: <DocumentIcon />, label: "訂單", pathUrl: "/admin_orders" },
  { iconImage: <ThDerivedIcon />, label: "派單", pathUrl: "/assignment" }
];
const Home: NextPageWithLayout<never> = () => {
  return (
    <BodySTY>
      <div className="home-header">
        <div className="header-title">{"嗨！讓我們開始吧。"}</div>
        <div className="header-description">
          {"利用這些核心功能開始建立您的車隊。"}
        </div>
      </div>
      <div className="home-body">
        <EntranceList routerList={routerList} />
      </div>
    </BodySTY>
  );
};

Home.getLayout = getLayout;
export default Home;
