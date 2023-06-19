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
import AutoAssignBtn from "@contents/Assignment/AssignmentList/AutoAssignBtn";
import ManualAssignBtn from "@contents/Assignment/AssignmentList/ManualAssignBtn";
import AssignManualCreate from "@contents/Assignment/AssignManualCreate";
import {
  assignParser,
  assignPattern,
  getAllAssignments
} from "@services/assignment/getAllAssignment";

import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import { I_ManualCreateType } from "@typings/assignment_type";
import SecondCarAssignManualCreate from "@contents/Assignment/AssignManualCreate/SecondCarManualCreate";
import SecondDriverAssignManualCreate from "@contents/Assignment/AssignManualCreate/SecondDriverManualCreate";
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
  const [secondDrawerOpen, setSecondDrawerOpen] = useState<boolean>(false);
  const [orderInfo, setOrderInfo] = useState<any>(null);
  const [showSecondTitle, setShowSecondTitle] = useState<any>();
  const [createAssignData, setCreateAssignData] = useState<I_ManualCreateType>({
    quote_no: "",
    manual_driver: [
      {
        driver_no: "",
        bus_day_number: 1,
        bus_group: "",
        task_start_time: "",
        task_end_time: "",
        remark: ""
      }
    ],
    manual_bus: [
      {
        bus_no: "",
        bus_day_number: 1,
        bus_group: "",
        task_start_time: "",
        task_end_time: "",
        remark: ""
      }
    ]
  });

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

  const fetchAssignData = async () => {
    //---------------------------------------------------------------
    getAllAssignments()
      .then((data) => {
        console.log("data", data);

        // ✅設定子列表的狀態
        const newSubData = data.contentList.map(
          (item: { assignments: any }) => {
            console.log("item", item);
            return item.assignments;
          }
        );

        setSubAssignData(newSubData);

        // ✅設定外層列表狀態
        const assignData = mappingQueryData(
          data.contentList,
          assignPattern,
          assignParser
        );
        const newData = [...assignData];
        newData.map((v, idx) => {
          const item_no = idx < 9 ? `000${idx + 1}` : `00${idx + 1}`;
          v["no"] = { label: item_no, value: item_no };
          if (v.maintenance_quote_no.label.substring(0, 3) === "ORD")
            v["auto_assign"] = {
              label: <AutoAssignBtn></AutoAssignBtn>,
              value: null
            };
          if (v.maintenance_quote_no.label.substring(0, 3) === "ORD")
            v["manual_assign"] = {
              label: (
                <ManualAssignBtn
                  id={v.maintenance_quote_no.label}
                  isDrawerOpen={isDrawerOpen}
                  setDrawerOpen={setDrawerOpen}
                  setOrderInfo={setOrderInfo}
                />
              ),
              value: null
            };
        });
        console.log("newData", newData);
        setData(newData);
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
      fetchAssignData();
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
    fetchAssignData();
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
            assignData={data}
            reloadData={() => {
              fetchAssignData();
              setDrawerOpen(false);
            }}
            secondDrawerOpen={secondDrawerOpen}
            setSecondDrawerOpen={setSecondDrawerOpen}
            orderInfo={orderInfo}
            setShowSecondTitle={setShowSecondTitle}
          />
        </Drawer>
      )}

      {secondDrawerOpen && (
        <Drawer
          closeDrawer={() => {
            setSecondDrawerOpen(false);
          }}
        >
          {showSecondTitle.assignType === "car" ? (
            <SecondCarAssignManualCreate
              createAssignData={createAssignData}
              showSecondTitle={showSecondTitle}
            ></SecondCarAssignManualCreate>
          ) : (
            <SecondDriverAssignManualCreate
              createAssignData={createAssignData}
              showSecondTitle={showSecondTitle}
            ></SecondDriverAssignManualCreate>
          )}
        </Drawer>
      )}
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
