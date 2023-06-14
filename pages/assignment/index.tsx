import React, { useState, useEffect, useCallback } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import {
  getAllCustomers,
  customerParser,
  customerPattern
} from "@services/customer/getAllCustomers";
import LoadingSpinner from "@components/LoadingSpinner";
import { mappingQueryData } from "@utils/mappingQueryData";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import { deleteCustomer } from "@services/customer/deleteCustomer";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
import Drawer from "@components/Drawer";
import AssignmentList from "@contents/Assignment/AssignmentList";
import { assignment_mock_data } from "@services/assignment/mock_data";
import AutoAssignBtn from "@contents/Assignment/AssignmentList/AutoAssignBtn";
import ManualAssignBtn from "@contents/Assignment/AssignmentList/ManualAssignBtn";
import AssignManualCreate from "@contents/Assignment/AssignManualCreate";
import {
  assignParser,
  assignPattern,
  getAllAssignments
} from "@services/assignment/getAllAssignment";

import { useAssignmentStore } from "@contexts/filter/assignmentStore";
//
const mainFilterArray = [
  { id: 1, label: "啟用", value: "1" },
  { id: 2, label: "停用", value: "2" }
];
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [subAssignData, setSubAssignData] = useState<any[]>([]);
  const [nowTab, setNowTab] = useState("1");
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useAssignmentStore();
  //
  const fetchAssignData = async (isCanceled: boolean, mainFilter = "1") => {
    //---------------------------------------------------------------
    // getAllCustomers(subFilter, mainFilter).then((res) => {
    //   const customerData = mappingQueryData(
    //     res.contentList,
    //     customerPattern,
    //     customerParser
    //   );
    getAllAssignments()
      .then((data) => {
        console.log("data", data);

        // ✅設定子列表的狀態
        const newSubData = data.dataList.map((item: { assignments: any }) => {
          return item.assignments;
        });
        setSubAssignData(newSubData);

        // ✅設定外層列表狀態
        const assignData = mappingQueryData(
          data.dataList,
          assignPattern,
          assignParser
        );
        console.log("assignData", assignData);
        const newData = [...assignData];
        newData.map((v, idx) => {
          const item_no = idx < 9 ? `000${idx + 1}` : `00${idx + 1}`;
          v["no"] = { label: item_no, value: item_no };
          v["auto_assign"] = {
            label: <AutoAssignBtn></AutoAssignBtn>,
            value: null
          };
          v["manual_assign"] = {
            label: (
              <ManualAssignBtn
                id={v.maintenance_quote_no.label}
                isDrawerOpen={isDrawerOpen}
                setDrawerOpen={setDrawerOpen}
              ></ManualAssignBtn>
            ),
            value: null
          };
        });
        console.log("newData", newData);
        setData(newData);

        // console.log("1️⃣data in assignment list", data);
        // const newData = [...data.dataList];
        // newData.map((item, idx) => {
        //   console.log("item by api", item);
        //   const item_no = idx < 10 ? `000${idx}` : `00${idx}`;
        //   return {
        //     no: item_no,
        //     maintenance_quote_no: item.maintenance_quote_no,
        //     maintenance_quote_type_name: item.maintenance_quote_type_name,
        //     task_start_time: convertDateAndTimeFormat(item.task_start_time),
        //     task_end_time: convertDateAndTimeFormat(item.task_end_time),
        //     auto_assign: <AutoAssignBtn></AutoAssignBtn>,
        //     manual_assign: <ManualAssignBtn
        //       id={item.quote_no.label}
        //       isDrawerOpen={isDrawerOpen}
        //       setDrawerOpen={setDrawerOpen}
        //     ></ManualAssignBtn>
        //   };
        // });
      })
      .catch((err) => {
        console.error("error in assignment list", err);
      });

    // const newData = [...assignment_mock_data];
    // newData?.map((item) => {
    //   console.log("🎈item", item);
    //   item["auto_assign"].label = <AutoAssignBtn></AutoAssignBtn>;
    //   item["manual_assign"].label = (
    //     <ManualAssignBtn
    //       id={item.quote_no.label}
    //       isDrawerOpen={isDrawerOpen}
    //       setDrawerOpen={setDrawerOpen}
    //     ></ManualAssignBtn>
    //   );
    // });

    // if (isCanceled) {
    //   console.log("canceled");
    //   return;
    // }
    // if (!subFilter) {
    //   localStorage.setItem(
    //     "customerInitFilter",
    //     JSON.stringify(res.conditionList)
    //   );
    //   initializeSubFilter();
    // }

    //   setData(customerData);
    // });
  };
  //
  const deleteItemHandler = async (id: string) => {
    deleteCustomer(id).then((res) => {
      console.log("res", res);
      fetchAssignData(false);
    });
  };
  //進入供應商編輯頁
  const goToEditPageHandler = (id: string) => {
    router.push("/customer/detail/" + id + "?editPage=edit");
  };
  const goToDetailPageHandler = (id: string) => {
    router.push(`/customer/detail/${id}?editPage=view`);
  };
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
  };
  //
  useEffect(() => {
    let isCanceled = false;
    fetchAssignData(isCanceled, nowTab);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);
  if (!data) {
    return <LoadingSpinner />;
  }

  console.log("assignment data", data);
  console.log("subAssignData", subAssignData);
  console.log("isDrawerOpen", isDrawerOpen);

  return (
    <BodySTY>
      {/* <TableWrapper
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
        > */}
      <AssignmentList
        assignData={data}
        subAssignData={subAssignData}
        goToCreatePage={() => {
          setDrawerOpen(true);
        }}
        deleteItemHandler={deleteItemHandler}
        goToEditPageHandler={goToEditPageHandler}
        goToDetailPage={goToDetailPageHandler}
      />
      {/* </FilterWrapper>
      </TableWrapper> */}
      {isDrawerOpen && (
        <Drawer
          tabName={["手動派單"]}
          closeDrawer={() => {
            setDrawerOpen(false);
          }}
        >
          <AssignManualCreate
            reloadData={() => {
              fetchAssignData(false);
              setDrawerOpen(false);
            }}
          />
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
