import React, { useState } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";
import { Avatar, Pane, IssueIcon } from "evergreen-ui";

import { mappingQueryData } from "@utils/mappingQueryData";
import SearchEmployee from "@contents/Driver/SearchEmployee";
import { getAllDriver } from "@services/driver/getAllDrivers";
import { deleteDriver } from "@services/driver/deleteDriver";
import { useDriverStore } from "@contexts/filter/driverStore";
import { getLayout } from "@layout/MainLayout";
import DriverList from "@contents/Driver/DriverList";
import MainBookmark from "@contents/MainBookmark";
import { BodySTY, StyledDot, UserSTY } from "./style";
import Drawer from "@components/Drawer";
import Tabs from "@components/Tabs";

const Page: NextPageWithLayout<never> = ({ user }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter
  } = useDriverStore();

  React.useEffect(() => {
    updateMainFilter("info");
  }, []);

  React.useEffect(() => {
    let isCanceled = false;
    fetchDriverData(isCanceled);
    return () => {
      isCanceled = true;
    };
  }, [mainFilter, subFilter, initializeSubFilter]);

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
        label: data["user_No"] || null,
        value: data["user_No"] || null
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
                  query: { id: data["user_No"], editPage: "edit" }
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

  const fetchDriverData = async (isCanceled: boolean) => {
    getAllDriver(subFilter).then((res) => {
      // const resultData = res.contentList ? [...res.contentList] : [];
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

  const handleOpenSearch = () => {
    setIsOpenDrawer((prev) => !prev);
  };

  const handleDeleteDriver = (id: string) => {
    deleteDriver(id);
    fetchDriverData(false);
  };

  return (
    <BodySTY isOpenDrawer={isOpenDrawer}>
      <Pane className="wrapMain">
        <Tabs
          titles={["啟用", "用戶", "無訪問權限", "停用"]}
          setIsOpenDrawer={setIsOpenDrawer}
          isOpenDrawer={isOpenDrawer}
        />
        <MainBookmark
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
        </MainBookmark>
      </Pane>
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
