import React from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  PanelTableIcon,
  CalendarIcon,
  GridViewIcon,
  LayoutGridIcon,
  PropertiesIcon,
  TimelineAreaChartIcon,
  GanttChartIcon,
  ArrowLeftIcon
} from "evergreen-ui";
//
import { BodySTY } from "./style";
import UserInfo from "./UserInfo";
import MenuList from "./MenuList";
import Search from "./Search";
import { MenuDataType } from "@mock-data/side-bar/data";
import FooterItem from "./Footer/FooterItem";
//
interface Props {
  menuData: MenuDataType;
  personalData: MenuDataType;
}
//
function SideBar({ menuData, personalData }: Props) {
  console.log("Side Bar init");
  const [isPersonal, setIsPersonal] = React.useState(false);
  return (
    <BodySTY>
      <UserInfo
        onClick={() => {
          setIsPersonal(true);
        }}
      />
      <div className="container">
        {isPersonal && (
          <span
            className="back_to"
            onClick={() => {
              setIsPersonal(false);
            }}
          >
            <ArrowLeftIcon size={16} />
            返回公司首頁
          </span>
        )}
        {!isPersonal && <Search />}
        {menuData && (
          <MenuList menuData={!isPersonal ? menuData : personalData} />
        )}
      </div>
      <div className="footer">
        <button className="footer-button">
          <p>新增欄位</p>
          <div className="icon-container">
            <ChevronUpIcon size={16} color="#567190" className="open-button" />
            <ChevronDownIcon
              size={16}
              color="#567190"
              className="close-button"
            />
          </div>
        </button>
        <div className="footer-list">
          <FooterItem name="表格">
            <PanelTableIcon size={16} color="#3670C9" />
          </FooterItem>
          <FooterItem name="日曆">
            <CalendarIcon size={16} color="#D14343" />
          </FooterItem>
          <FooterItem name="卡片流">
            <GridViewIcon size={16} color="#70B0FF" />
          </FooterItem>
          <FooterItem name="看板">
            <LayoutGridIcon size={16} color="#FD8ADC" />
          </FooterItem>
          <FooterItem name="清單">
            <PropertiesIcon size={16} color="#8F59EF" />
          </FooterItem>
          <FooterItem name="時間軸" isPro>
            <TimelineAreaChartIcon size={16} color="#FF9D66" />
          </FooterItem>
          <FooterItem name="甘特圖 " isPro>
            <GanttChartIcon size={16} color="#678AF7" />
          </FooterItem>
          <FooterItem name="自訂欄位" isPro />
        </div>
      </div>
    </BodySTY>
  );
}

export default SideBar;
