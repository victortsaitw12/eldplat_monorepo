import React, { useEffect, useState } from "react";
import { Pane } from "evergreen-ui";
import { NextPageWithLayout } from "next";
import { getLayout } from "@layout/MainLayout";
import MainBookmark from "@contents/MainBookmark";
import { useFilterStore } from "@contexts/filter/employeeFilterStore";
import { useRouter } from "next/router";
import { getAllEmployees } from "@services/employee/getAllEmployee";
import EmployeeList from "@contents/Employee/EmployeeList";
import { BodySTY } from "./style";
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [addEmployeeActive, setAddEmployeeActive] = useState<boolean>(false);
  const [employeeListData, setEmployeeListData] = useState<any>(null);

  const initializeFilter = useFilterStore((state) => state.initializeFilter);
  const updateFilter = useFilterStore((state) => state.updateFilter);
  const filter = useFilterStore((state) => state.filter);

  useEffect(() => {
    const isCanceled = false;
    getAllEmployees(filter).then((data) => {
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
          JSON.stringify(data.conditionList)
        );
        initializeFilter();
      }
      setEmployeeListData(newData);
    });
  }, [filter, initializeFilter]);
  const goToCreatePage = () => {
    router.push("/employee/create");
  };

  return (
    <BodySTY addEmployeeActive={addEmployeeActive}>
      <MainBookmark
        filter={filter}
        updateFilter={updateFilter}
        resetFilter={() => {
          initializeFilter();
        }}
      >
        {/* Put your component here */}
        <Pane>
          <EmployeeList
            data={employeeListData}
            setAddEmployeeActive={setAddEmployeeActive}
            goToCreatePage={goToCreatePage}
          />
        </Pane>
      </MainBookmark>
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
