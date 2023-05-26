import React, { useState } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar } from "evergreen-ui";

import { mappingQueryData } from "@utils/mappingQueryData";
import SearchEmployee from "@contents/Driver/SearchEmployee";
import { getAllDriver } from "@services/driver/getAllDrivers";
import { deleteDriver } from "@services/driver/deleteDriver";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getLayout } from "@layout/MainLayout";
import DriverList from "@contents/Driver/DriverList";
import { BodySTY, StyledDot, UserSTY } from "./style";
import Drawer from "@components/Drawer";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";

const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
];

const Page: NextPageWithLayout<never> = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [nowTab, setNowTab] = useState("1");
  const { initializeSubFilter, subFilter, updateSubFilter } = useDriverStore();
  React.useEffect(() => {
    let isCanceled = false;
    fetchDriverData(isCanceled, nowTab);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);

  const fetchDriverData = async (isCanceled: boolean, mainFilter = "1") => {
    getAllDriver(subFilter, mainFilter).then((res) => {
      const driverData = mappingQueryData(
        res.contentList || [],
        driverPattern,
        driverParser
      );
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
  };

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
              <Avatar name={data["user_Name"]} size={32} />
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
          ) || null,
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
          ) || null,
        value: data["invt_Status"] || null
      };
    }
    return {
      label: data[key] || null,
      value: data[key] || null
    };
  };

  const changeMainFilterHandler = (value: string) => setNowTab(value);

  const handleOpenSearch = () => {
    setIsOpenDrawer((prev) => !prev);
  };

  const handleDeleteDriver = (id: string) => {
    deleteDriver(id);
    fetchDriverData(false);
  };

  return (
    <BodySTY isOpenDrawer={isOpenDrawer}>
      <TableWrapper
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
            driverData={data}
            goToCreatePage={handleOpenSearch}
            handleDeleteDriver={handleDeleteDriver}
          />
        </FilterWrapper>
      </TableWrapper>
      {isOpenDrawer && (
        <Drawer
          tabName={["新增駕駛"]}
          closeDrawer={setIsOpenDrawer.bind(null, false)}
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
Page.getLayout = getLayout;
export default Page;
