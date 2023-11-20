import React, { useEffect, useState, ReactNode } from "react";
import { NextPageWithLayout } from "next";
import { getLayout } from "@layout/MainLayout";
import { useEmployeeFilterStore } from "@contexts/filter/employeeFilterStore";
import { useRouter } from "next/router";
import {
  getAllEmployees,
  employeeParser,
  employeePattern
} from "@services/employee/getAllEmployee";
import EmployeeList from "@contents/Employee/EmployeeList";
import { BodySTY } from "./style";
import Drawer from "@components/Drawer";
import FilterWrapper from "@layout/FilterWrapper";
import TabsWrapper from "@layout/TabsWrapper";
import EmployeeCreateForm from "@contents/Employee/EmployeeCreateForm";
import { deleteEmployee } from "@services/employee/deleteEmployee";
import RegionProvider from "@contexts/regionContext/regionProvider";
import LoadingSpinner from "@components/LoadingSpinner";
import { PageInfoType } from "@services/type";
import { mappingQueryData } from "@utils/mappingQueryData";
import { I_PageInfo } from "@components/PaginationField";

//
const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [employeesData, setEmployeesData] = useState<any>(null);
  const [nowTab, setNowTab] = useState(
    (router?.query?.status as string) || "1"
  );
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    arrangement: "desc",
    orderby: null,
    page_Index: 1,
    page_Size: 10,
    last_Page: 10
  });

  const [loading, setLoading] = useState(false);
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useEmployeeFilterStore();
  useEffect(() => {
    updateMainFilter("1");
  }, []);
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
    updateMainFilter(value);
    router.push({
      pathname: "/employee/",
      query: { ...router?.query, status: value }
    });
  };

  // Delete Employee
  const deleteItemHandler = async (id: string) => {
    deleteEmployee(id).then((res) => {
      fetchEmployeeData(false, nowTab, pageInfo);
    });
  };
  const recoverItemHandler = async (id: string) => {
    console.log("上一動");
  };
  const goToEditPageHandler = (id: string) => {
    router.push(`/employee/edit/${id}?editPage=edit`);
  };
  const goToDetailPageHandler = (id: string) => {
    router.push(`/employee/detail/${id}?editPage=view`);
  };

  const fetchEmployeeData = async (
    isCanceled: boolean,
    mainFilter = "1",
    pageInfo: PageInfoType
  ) => {
    getAllEmployees(pageInfo, subFilter, mainFilter).then((res) => {
      const employeesData = mappingQueryData(
        res.contentList,
        employeePattern,
        employeeParser
      );
      console.log("employeesData", employeesData);
      if (isCanceled) {
        console.log("canceled");
        return;
      }
      if (!subFilter) {
        localStorage.setItem(
          "employeeInitFilter",
          JSON.stringify(res.conditionList)
        );
        initializeSubFilter();
      }
      setEmployeesData(employeesData);
      setPageInfo(res.pageInfo);
    });
  };

  const updatePageHandler = (newPageInfo: PageInfoType) => {
    fetchEmployeeData(false, nowTab, newPageInfo);
  };

  React.useEffect(() => {
    let isCanceled = false;
    fetchEmployeeData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);

  if (!employeesData) {
    return <LoadingSpinner />;
  }

  return (
    <RegionProvider>
      <BodySTY>
        <TabsWrapper
          onChangeTab={changeMainFilterHandler}
          mainFilter={mainFilter}
          mainFilterArray={mainFilterArray}
          viewOnly
        >
          <FilterWrapper
            updateFilter={updateSubFilter}
            resetFilter={() => {
              initializeSubFilter();
            }}
            filter={subFilter}
          >
            <EmployeeList
              listType={nowTab}
              data={employeesData}
              goToCreatePage={() => {
                setDrawerOpen(true);
              }}
              deleteItemHandler={deleteItemHandler}
              goToDetailPageHandler={goToDetailPageHandler}
              goToEditPageHandler={goToEditPageHandler}
              recoverItemHandler={recoverItemHandler}
              pageInfo={pageInfo}
              handlePageChange={updatePageHandler}
            />
          </FilterWrapper>
        </TabsWrapper>
        {isDrawerOpen && (
          <Drawer
            tabName={["新增員工"]}
            closeDrawer={() => {
              setDrawerOpen(false);
            }}
          >
            <EmployeeCreateForm
              reloadData={() => {
                fetchEmployeeData(false, nowTab, pageInfo);
                setDrawerOpen(false);
              }}
            />
          </Drawer>
        )}
      </BodySTY>
    </RegionProvider>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
