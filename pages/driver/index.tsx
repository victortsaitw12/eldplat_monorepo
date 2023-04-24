import React, { useState } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";

import SearchEmployee from "@contents/Driver/SearchEmployee";
import { getAllDriver } from "@services/driver/getAllDrivers";

import { getLayout } from "@layout/MainLayout";
import DriverList from "@contents/Driver/DriverList";
import MainBookmark from "@contents/MainBookmark";
import { useFilterStore } from "@contexts/filter/driverFilterStore";
import { convertValueToText } from "@utils/convertValueToText";
import { Avatar } from "evergreen-ui";
import { BodySTY, StyledDot, UserSTY } from "./style";
//
const fakeData = [
  {
    carTeam: "北部",
    car: "001-V5",
    first_Login: "2023-01-01"
  },
  {
    carTeam: "北部",
    car: "001-VV",
    first_Login: "2023-01-01"
  },
  {
    carTeam: "中部",
    car: "002-VV",
    first_Login: "2023-01-01"
  },
  {
    carTeam: "中部",
    car: "003-VV",
    first_Login: "2023-01-01"
  },
  {
    carTeam: "南部",
    car: "006-VV",
    first_Login: "2023-02-11"
  }
];
//
const Page: NextPageWithLayout<never> = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const initializeFilter = useFilterStore(
    (state: any) => state.initializeFilter
  );
  const updateFilter = useFilterStore((state: any) => state.updateFilter);
  const filter = useFilterStore((state: any) => state.filter);
  React.useEffect(() => {
    let isCanceled = false;
    console.log("filter", filter);
    getAllDriver(filter).then((res) => {
      console.log("res", res);
      const orderedEmptyResult = res.contentList ? [...res.contentList] : [];
      console.log("orderedEmptyResult", orderedEmptyResult);
      const driverData = orderedEmptyResult.map((driver: any, index) => {
        return {
          id: { label: driver.user_No, value: driver.user_No },
          user_Name: {
            label: (
              <UserSTY>
                <Avatar name={driver.user_Name} size={32} />
                <Link
                  href={{
                    pathname: "/driver/create/[id]",
                    query: { id: driver.user_No }
                  }}
                >
                  {driver.user_Name}
                </Link>
                {/* {driver["license_No"].trim() === "" && (
                  <IssueIcon size={16} color={"#D14343"} />
                )} */}
              </UserSTY>
            ),
            value: driver.user_Name
          },
          user_Email: {
            label: driver.user_Email,
            value: driver.user_Email
          },
          carteam: {
            label:
              index < fakeData.length
                ? fakeData[index].carTeam
                : driver.carteam,
            value: driver.carteam
          },
          car: {
            label: index < fakeData.length ? fakeData[index].car : driver.car,
            value: driver.car
          },
          group_Name: {
            label: driver.group_Name,
            value: driver.group_Name
          },
          loginCount: {
            label: driver.loginCount,
            value: driver.loginCount
          },
          first_Login: {
            label:
              index < fakeData.length
                ? fakeData[index].first_Login
                : driver.first_Login,
            value: driver.first_Login
          },
          invt_Status: {
            label: (
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
                <StyledDot value={driver.invt_Status as string} />
                <div>{driver.invt_Status}</div>
              </div>
            ),
            value: driver.invt_Status
          }
        };
      });
      console.log("driverData", driverData);
      const convertedDriverData = convertValueToText(driverData);
      if (isCanceled) {
        console.log("canceled");
        return;
      }
      if (!filter) {
        console.log("conditionList", res.conditionList);
        localStorage.setItem(
          "driverInitFilter",
          JSON.stringify(res.conditionList)
        );
        initializeFilter();
      }
      setData(convertedDriverData);
    });
    return () => {
      isCanceled = true;
    };
  }, [filter]);
  //
  const refetchHandler = () => {
    getAllDriver(filter).then((res) => {
      console.log("res", res);
      const orderedEmptyResult = res.contentList ? [...res.contentList] : [];
      const driverData = orderedEmptyResult.map((driver: any) => {
        return {
          id: { label: driver.user_No, value: driver.user_No },
          user_Name: {
            label: (
              <UserSTY>
                <Avatar name={driver.user_Name} size={32} />
                <Link
                  href={{
                    pathname: "/driver/create/[id]",
                    query: { id: driver.user_No }
                  }}
                >
                  {driver.user_Name}
                </Link>
                {/* {driver["license_No"].trim() === "" && (
                  <IssueIcon size={16} color={"#D14343"} />
                )} */}
              </UserSTY>
            ),
            value: driver.user_Name
          },
          user_Email: {
            label: driver.user_Email,
            value: driver.user_Email
          },
          carteam: { label: driver.carteam, value: driver.carteam },
          car: {
            label: driver.car,
            value: driver.car
          },
          group_Name: {
            label: driver.group_Name,
            value: driver.group_Name
          },
          loginCount: {
            label: driver.loginCount,
            value: driver.loginCount
          },
          first_Login: {
            label: driver.first_Login,
            value: driver.first_Login
          },
          invt_Status: {
            label: (
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
                <StyledDot value={driver.invt_Status as string} />
                <div>{driver.invt_Status}</div>
              </div>
            ),
            value: driver.invt_Status
          }
        };
      });
      console.log("driverData", driverData);
      const convertedDriverData = convertValueToText(driverData);
      if (!filter) {
        console.log("conditionList", res.conditionList);
        localStorage.setItem(
          "driverInitFilter",
          JSON.stringify(res.conditionList)
        );
        initializeFilter();
      }
      setData(convertedDriverData);
    });
  };
  //
  const handleOpenSearch = () => {
    setIsSearch((prev) => !prev);
  };
  //
  const closeSearchHandler = () => {
    setIsSearch(false);
  };
  return (
    <BodySTY>
      <MainBookmark
        updateFilter={updateFilter}
        resetFilter={() => {
          initializeFilter();
        }}
        filter={filter}
      >
        {
          /* Put your component here */
          <DriverList driverData={data} goToCreatePage={handleOpenSearch} />
        }
        {isSearch && (
          <SearchEmployee
            closeSearch={closeSearchHandler}
            refetch={refetchHandler}
          />
        )}
      </MainBookmark>
    </BodySTY>
  );
};
/*

      
*/
Page.getLayout = getLayout;
export default Page;
