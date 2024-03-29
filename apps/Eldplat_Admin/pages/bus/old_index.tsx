import React, { useState, useEffect, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import Link from "next/link";

import { getLayout } from "@layout/MainLayout";
import BusList from "@contents/Bus/BusList";
import { getAllBuses, busPattern } from "@services/bus/getAllBuses";
import LoadingSpinner from "@components/LoadingSpinner";
import { useRouter } from "next/router";
import { useBusStore } from "@contexts/filter/busStore";
import { BodySTY } from "./style";
import { mappingQueryData } from "@utils/mappingQueryData";
import { deleteBus } from "@services/bus/deleteBus";
import TabsWrapper from "@layout/TabsWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import BusCreateForm from "@contents/Bus/BusCreateForm";
import { getCreateBusOptions } from "@services/bus/getCreateBusOptions";
import { I_PageInfo } from "@components/PaginationField";

const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
];

const busParser = (data: any, key: string): { label: any; value: any } => {
  if (key === "id") {
    return {
      label: data["bus_no"] || null,
      value: data["bus_no"] || null
    };
  } else if (key === "age") {
    return {
      label: data["age"] + "年" || null,
      value: data["age"] || null
    };
  } else if (key === "type") {
    return {
      label: data["type_name"] || null,
      value: data["type"] || null
    };
  } else if (key === "model") {
    return {
      label: data["model_name"] || null,
      value: data["model"] || null
    };
  } else if (key === "make") {
    return {
      label: data["make_name"] || null,
      value: data["make"] || null
    };
  } else if (key === "bus_group") {
    return {
      label: data["bus_group_name"] || null,
      value: data["bus_group"] || null
    };
  } else if (key === "ownership") {
    return {
      label: data["ownership_name"] || null,
      value: data["ownership"] || null
    };
  } else if (key === "bus_name" || key === "license_plate") {
    return {
      label:
        (
          <Link
            href={{
              pathname: `/bus/detail/${data["bus_no"]}`,
              query: { editPage: "view", license_plate: data["license_plate"] }
            }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {data[key]}
          </Link>
        ) || null,
      value: data[key] || null
    };
  }
  return {
    label: data[key] || null,
    value: data[key] || null
  };
};
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [nowTab, setNowTab] = useState(
    (router?.query?.status as string) || "1"
  );
  const [options, setOptions] = useState<any>(null);
  const [pageInfo, setPageInfo] = useState<I_PageInfo>({
    Arrangement: "desc",
    Orderby: null,
    Page_Index: 1,
    Page_Size: 10,
    Last_Page: 10
  });

  const { initializeSubFilter, updateMainFilter, subFilter, updateSubFilter } =
    useBusStore();

  const fetchBusData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo: I_PageInfo
  ) => {
    getAllBuses(pageInfo, subFilter, mainFilter).then((res) => {
      const busesData = mappingQueryData(
        res.contentList,
        busPattern,
        busParser
      );
      if (isCanceled) {
        console.log("canceled");
        return;
      }
      if (!subFilter) {
        localStorage.setItem(
          "busInitFilter",
          JSON.stringify(res.conditionList)
        );
        initializeSubFilter();
      }
      console.log("busData", busesData);
      setData(busesData);
      setPageInfo(res.pageInfo);
    });
  };

  useEffect(() => {
    updateMainFilter("1");
    getCreateBusOptions().then((res) => {
      setOptions(res.dataList[0]);
    });
  }, []);

  useEffect(() => {
    let isCanceled = false;
    fetchBusData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);

  const upDatePageHandler = (newPageInfo: I_PageInfo) => {
    fetchBusData(false, nowTab, newPageInfo);
  };

  const goToEditPageHandler = (id: string, item: any) => {
    const license_plate = item?.license_plate?.value;
    router.push(
      "/bus/detail/" + id + "?editPage=edit&license_plate=" + license_plate
    );
  };

  const goToDetailPageHandler = (id: string, item: any) => {
    const license_plate = item?.license_plate?.value;
    router.push(
      `/bus/detail/${id}?editPage=view&license_plate=${license_plate}`
    );
  };

  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
    router.push({
      pathname: "/bus/",
      query: { ...router?.query, status: value }
    });
  };

  const deleteItemHandler = async (id: string) => {
    deleteBus(id).then((res) => {
      fetchBusData(false, nowTab, pageInfo);
    });
  };
  const recoverItemHandler = async (id: string) => {
    console.log("上一動");
  };

  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <BodySTY>
      <FilterWrapper
        updateFilter={updateSubFilter}
        resetFilter={() => {
          initializeSubFilter();
        }}
        filter={subFilter}
      ></FilterWrapper>
      <BusList busData={data} pageInfo={pageInfo} />
    </BodySTY>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
