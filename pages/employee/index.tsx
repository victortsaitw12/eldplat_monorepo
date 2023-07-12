import React, { useEffect, useState, useMemo, ReactNode } from "react";
import { Pane } from "evergreen-ui";
import { NextPageWithLayout } from "next";
import { getLayout } from "@layout/MainLayout";
import { useEmployeeFilterStore } from "@contexts/filter/employeeFilterStore";
import { useRouter } from "next/router";
import { getAllEmployees } from "@services/employee/getAllEmployee";
import EmployeeList from "@contents/Employee/EmployeeList";
import { BodySTY } from "./style";
import Drawer from "@components/Drawer";
import FilterWrapper from "@layout/FilterWrapper";
import TableWrapper from "@layout/TableWrapper";
import EmployeeCreateForm from "@contents/Employee/EmployeeCreateForm";
import { deleteEmployee } from "@services/employee/deleteEmployee";
import { createBriefEmployee } from "@services/employee/createEmployee";
import RegionProvider from "@contexts/regionContext/regionProvider";

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
    updateMainFilter("all");
  }, []);
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "全部", value: "all" },
      { id: 2, label: "停用", value: "seal" }
    ],
    []
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [employeeListData, setEmployeeListData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // const initializeFilter = useFilterStore((state) => state.initializeFilter);
  // const updateFilter = useFilterStore((state) => state.updateFilter);
  const filter = useEmployeeFilterStore((state) => state.filter);

  useEffect(() => {
    const isCanceled = false;
    getAllEmployees(filter).then((data) => {
      console.log("💡get employees data from api :", data);
      const newData = data.contentList.map((item: any, index: any) => {
        return {
          // user_No: item["user_No"],
          id: { label: item.user_No, value: item.user_No },
          user_Name: {
            label: item.user_Name,
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
          JSON.stringify(data.contentList)
        );
        initializeSubFilter();
      }
      setEmployeeListData(newData);
    });
  }, [filter, initializeSubFilter]);

  // Delete Employee
  const deleteItemHandler = async (id: string) => {
    deleteEmployee(id).then((res) => {
      console.log("delete user res------------------", res);
      router.reload();
    });
  };

  const goToEditPageHandler = (id: string) => {
    router.push(`/employee/edit/${id}`);
  };
  const changeMainFilterHandler = (value: string) => {
    alert(value);
    updateMainFilter(value);
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
      router.reload();
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
  };
  return (
    <RegionProvider>
      <BodySTY>
        <TableWrapper
          onChangeTab={changeMainFilterHandler}
          mainFilter={mainFilter}
          mainFilterArray={mainFilterArray}
        >
          <FilterWrapper
            updateFilter={updateSubFilter}
            resetFilter={() => {
              initializeSubFilter();
            }}
            filter={filter}
          >
            {/* Put your component here */}
            <Pane>
              <EmployeeList
                data={employeeListData}
                goToCreatePage={() => {
                  setDrawerOpen(true);
                }}
                deleteItemHandler={deleteItemHandler}
                goToEditPageHandler={goToEditPageHandler}
              />
            </Pane>
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
  getLayout(page, { ...layoutProps, title: <span>員工設定</span> });
export default Page;
