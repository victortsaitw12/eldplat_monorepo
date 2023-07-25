import React, { useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar } from "evergreen-ui";

import { mappingQueryData } from "@utils/mappingQueryData";
import SearchEmployee from "@contents/Driver/SearchEmployee";
import { getAllDriver, defaultPageInfo } from "@services/driver/getAllDrivers";
import { deleteDriver } from "@services/driver/deleteDriver";
import { updateDriverStatus } from "@services/driver/updateDriverStatus";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getLayout } from "@layout/MainLayout";
import DriverList from "@contents/Driver/DriverList";
import { BodySTY, StyledDot, UserSTY } from "./style";
import Drawer from "@components/Drawer";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import { I_PageInfo } from "@components/PaginationField";

const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
];

const Page: NextPageWithLayout<never> = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [isDrawerFullWidth, setIsDrawerFullWidth] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [nowTab, setNowTab] = useState("1");
  const { initializeSubFilter, subFilter, updateSubFilter } = useDriverStore();
  React.useEffect(() => {
    let isCanceled = false;
    fetchDriverData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);

  const fetchDriverData = React.useCallback(
    async (
      isCanceled: boolean,
      mainFilter = "1",
      pageQuery = defaultPageInfo
    ) => {
      getAllDriver(subFilter, mainFilter, pageQuery).then((res) => {
        const driverData = mappingQueryData(
          res.contentList || [],
          driverPattern,
          driverParser
        );
        const getPageInfo = { ...res.pageInfo };
        console.log("res:", res);
        console.log("res.contentList: ", res.contentList);
        console.log("driverData: ", driverData);
        setPageInfo(getPageInfo);
        if (isCanceled) return;

        if (!subFilter) {
          localStorage.setItem(
            "driverInitFilter",
            JSON.stringify(res.conditionList)
          );
          initializeSubFilter();
        }
        setData(driverData);
      });
    },
    []
  );
  // ordered data pattern
  const driverPattern = {
    id: true,
    user_Name: true,
    user_Email: true,
    carteam: true,
    car: true,
    group_Name: true,
    loginCount: true,
    first_Login: true,
    invt_Status: true
  };

  const driverParser = (data: any, key: string): { label: any; value: any } => {
    if (key === "id") {
      return {
        label: data["driver_No"] || null,
        value: data["driver_No"] || null
      };
    }
    if (key === "user_Name") {
      return {
        label:
          (
            <UserSTY>
              <Avatar
                name={data["user_Name"]}
                size={32}
                style={{ padding: "8px", justifyContent: "center" }}
              />
              <Link
                href={{
                  pathname: "/driver/detail/[id]",
                  query: { id: data["driver_No"], editPage: "edit" }
                }}
              >
                {data["user_Name"]}
              </Link>
              {/* {data["license_No"].trim() === "" && (
                <IssueIcon size={16} color={"#D14343"} />
              )} */}
            </UserSTY>
          ) || "--",
        value: data["user_Name"] || null
      };
    }
    if (key === "invt_Status") {
      return {
        label:
          (
            <div
              style={{
                padding: "8px 12px",
                borderRadius: "10px",
                background: "#F8FAFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              }}
            >
              <StyledDot value={data["invt_Status"] as string} />
              <div>{data["invt_Status"]}</div>
            </div>
          ) || "--",
        value: data["invt_Status"] || null
      };
    }
    return {
      label: data[key] || "--",
      value: data[key] || null
    };
  };

  const changeMainFilterHandler = (value: string) => setNowTab(value);

  const handleOpenSearch = () => {
    setIsOpenDrawer((prev) => !prev);
  };

  const handleDeleteDriver = (id: string) => {
    updateDriverStatus(id, "2").then(() => {
      fetchDriverData(false, nowTab);
    });
  };
  const handleRecoverDriver = (id: string) => {
    updateDriverStatus(id, "1").then(() => {
      fetchDriverData(false, nowTab);
    });
  };
  const handlePageChange = React.useCallback(
    (pageQuery: I_PageInfo) => {
      fetchDriverData(false, nowTab, pageQuery);
    },
    [fetchDriverData, nowTab]
  );

  return (
    <BodySTY isOpenDrawer={isOpenDrawer}>
      <TableWrapper
        isHide={isDrawerFullWidth}
        onChangeTab={changeMainFilterHandler}
        mainFilter={nowTab}
        mainFilterArray={mainFilterArray}
        viewOnly={true}
      >
        <FilterWrapper
          updateFilter={updateSubFilter}
          resetFilter={() => {
            initializeSubFilter();
          }}
          filter={subFilter}
        >
          <DriverList
            listType={nowTab}
            driverData={data}
            pageInfo={pageInfo}
            goToCreatePage={handleOpenSearch}
            handleDeleteDriver={handleDeleteDriver}
            handleRecoverDriver={handleRecoverDriver}
            handlePageChange={handlePageChange}
          />
        </FilterWrapper>
      </TableWrapper>
      {isOpenDrawer && (
        <Drawer
          tabName={["新增駕駛"]}
          closeDrawer={() => {
            setIsOpenDrawer(false);
            setIsDrawerFullWidth(false);
          }}
          isFullScreen={isDrawerFullWidth}
          toggleFullScreenDrawer={() => {
            setIsDrawerFullWidth(!isDrawerFullWidth);
          }}
        >
          <SearchEmployee
            closeSearch={setIsOpenDrawer.bind(null, false)}
            refetch={fetchDriverData}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};
/*

      
*/
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
