import React, { useEffect, useState, useMemo, ReactNode } from "react";
import { Pane } from "evergreen-ui";
import { NextPageWithLayout } from "next";
import { getLayout } from "@layout/MainLayout";
import { useEmployeeFilterStore } from "@contexts/filter/employeeFilterStore";
import { useRouter } from "next/router";
import {
  getAllEmployees,
  defaultPageInfo
} from "@services/employee/getAllEmployee";
import EmployeeList from "@contents/Employee/EmployeeList";
import { BodySTY } from "./style";
import Drawer from "@components/Drawer";
import FilterWrapper from "@layout/FilterWrapper";
import TableWrapper from "@layout/TableWrapper";
import EmployeeCreateForm from "@contents/Employee/EmployeeCreateForm";
import { deleteEmployee } from "@services/employee/deleteEmployee";
import { createBriefEmployee } from "@services/employee/createEmployee";
import RegionProvider from "@contexts/regionContext/regionProvider";
import { I_PageInfo } from "@components/PaginationField";

//
const fakeData = [
  {
    login_Times: "10",
    first_Login: "2023-01-01"
  },
  {
    login_Times: "10",
    first_Login: "2023-01-01"
  },
  {
    login_Times: "10",
    first_Login: "2023-01-01"
  },
  {
    login_Times: "10",
    first_Login: "2023-01-01"
  },
  {
    login_Times: "10",
    first_Login: "2023-02-11"
  },
  {
    login_Times: "10",
    first_Login: "2023-02-11"
  },
  {
    login_Times: "10",
    first_Login: "2023-02-11"
  },
  {
    login_Times: "10",
    first_Login: "2023-02-11"
  },
  {
    login_Times: "10",
    first_Login: "2023-02-11"
  },
  {
    login_Times: "10",
    first_Login: "2023-02-11"
  }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
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
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "啟用", value: "1" },
      { id: 2, label: "停用", value: "2" }
    ],
    []
  );
  const [nowTab, setNowTab] = useState(
    (router?.query?.status as string) || "1"
  );

  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
    // alert(value);
    updateMainFilter(value);
    router.push({
      pathname: "/employee/",
      query: { ...router?.query, status: value }
    });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [employeeListData, setEmployeeListData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // const initializeFilter = useFilterStore((state) => state.initializeFilter);
  // const updateFilter = useFilterStore((state) => state.updateFilter);
  const filter = useEmployeeFilterStore((state) => state.filter);

  // useEffect(() => {
  //   const isCanceled = false;
  //   // fetchEmployeeData(false, nowTab, pageInfo);
  //   getAllEmployees(filter).then((data) => {
  //     console.log("💡get employees data from api :", data);
  //     const newData = data.contentList.map((item: any, index: any) => {
  //       return {
  //         // user_No: item["user_No"],
  //         id: { label: item.user_No, value: item.user_No },
  //         user_Name: {
  //           label: (
  //             <Pane className="user_td">
  //               <div className="user_icon">
  //                 <span>{item.user_Name.charAt(0)}</span>
  //               </div>
  //               <div className="user_name">{item.user_Name}</div>
  //             </Pane>
  //           ),
  //           // label: item.user_Name,
  //           value: item.user_name
  //         },
  //         user_Email: { label: item.user_Email, value: item.user_Email },
  //         group_Name: { label: item.group_Name, value: item.group_Name },
  //         login_Times: {
  //           label:
  //             index < fakeData.length
  //               ? fakeData[index].login_Times
  //               : item.login_Times,
  //           value: item.login_Times
  //         },
  //         first_Login: {
  //           label:
  //             index < fakeData.length
  //               ? fakeData[index].first_Login
  //               : item.first_Login,
  //           value: item.first_Login
  //         },
  //         invt_Status: {
  //           label: item.invt_Status,
  //           value: item.invt_Status
  //         }
  //       };
  //     });
  //     if (isCanceled) {
  //       console.log("canceled");
  //       return;
  //     }
  //     if (!filter) {
  //       localStorage.setItem(
  //         "employeeInitFilter",
  //         JSON.stringify(data.contentList)
  //       );
  //       initializeSubFilter();
  //     }
  //     const getPageInfo = { ...data.pageInfo };
  //     setPageInfo(getPageInfo);
  //     setEmployeeListData(newData);
  //   });
  // }, [filter, initializeSubFilter]);

  // Delete Employee
  const deleteItemHandler = async (id: string) => {
    deleteEmployee(id).then((res) => {
      console.log("delete user res------------------", res);
      router.reload();
    });
  };
  const recoverItemHandler = async (id: string) => {
    console.log("上一動");
  };
  const goToEditPageHandler = (id: string) => {
    router.push(`/employee/edit/${id}`);
  };
  const goToDetailPageHandler = (id: string) => {
    router.push(`/employee/detail/${id}`);
  };
  const createEmployeeHandler = async (employeeData: any) => {
    console.log("1️⃣employeeData", employeeData);
    const { user_first_name, user_name, user_email, user_phone } = employeeData;

    setLoading(true);
    try {
      const res = await createBriefEmployee(
        user_first_name,
        user_name,
        user_email,
        user_phone
      );
      console.log("3️⃣res", res);
      // router.reload();
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
  };
  const fetchEmployeeData = React.useCallback(
    async (
      isCanceled: boolean,
      mainFilter = "1",
      pageQuery = defaultPageInfo
    ) => {
      // console.log("fetchEmployeeData");
      getAllEmployees(filter, pageQuery).then((data) => {
        console.log("💡get employees data from api :", data);
        const newData = data.contentList.map((item: any, index: any) => {
          return {
            // user_No: item["user_No"],
            id: { label: item.user_No, value: item.user_No },
            user_Name: {
              label: (
                <Pane className="user_td">
                  <div className="user_icon">
                    <span>{item.user_Name.charAt(0)}</span>
                  </div>
                  <div className="user_name">{item.user_Name}</div>
                </Pane>
              ),
              // label: item.user_Name,
              value: item.user_name
            },
            user_Email: { label: item.user_Email, value: item.user_Email },
            group_Name: { label: item.group_Name, value: item.group_Name },
            login_Times: {
              label:
                index < fakeData.length
                  ? fakeData[index].login_Times
                  : item.login_Times,
              value: item.login_Times
            },
            first_Login: {
              label:
                index < fakeData.length
                  ? fakeData[index].first_Login
                  : item.first_Login,
              value: item.first_Login
            },
            invt_Status: {
              label: item.invt_Status,
              value: item.invt_Status
            }
          };
        });
        if (isCanceled) {
          console.log("canceled");
          return;
        }
        if (!filter) {
          localStorage.setItem(
            "employeeInitFilter",
            JSON.stringify(data.conditionList || [])
          );
          initializeSubFilter();
        }
        const getPageInfo = { ...data.pageInfo };
        setPageInfo(getPageInfo);
        setEmployeeListData(newData);
      });
    },
    []
  );
  const handlePageChange = React.useCallback(
    (pageQuery: I_PageInfo) => {
      console.log("handlePageChange!!!!!!");
      console.log(pageQuery);
      fetchEmployeeData(false, nowTab, pageQuery);
    },
    [fetchEmployeeData, nowTab]
  );

  React.useEffect(() => {
    let isCanceled = false;
    fetchEmployeeData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);

  return (
    <RegionProvider>
      <BodySTY>
        <TableWrapper
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
            filter={filter}
          >
            {/* Put your component here */}
            <EmployeeList
              listType={nowTab}
              data={employeeListData}
              goToCreatePage={() => {
                setDrawerOpen(true);
              }}
              deleteItemHandler={deleteItemHandler}
              goToDetailPageHandler={goToDetailPageHandler}
              goToEditPageHandler={goToEditPageHandler}
              recoverItemHandler={recoverItemHandler}
              pageInfo={pageInfo}
              handlePageChange={handlePageChange}
            />
          </FilterWrapper>
        </TableWrapper>
        {isDrawerOpen && (
          <Drawer
            tabName={["新增員工"]}
            closeDrawer={() => {
              setDrawerOpen(false);
            }}
          >
            <EmployeeCreateForm createEmployee={createEmployeeHandler} />
          </Drawer>
        )}
      </BodySTY>
    </RegionProvider>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
