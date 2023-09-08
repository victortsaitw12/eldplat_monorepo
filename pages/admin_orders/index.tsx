import { Pane, Text } from "evergreen-ui";
import { GetServerSideProps, NextPageWithLayout } from "next";
import React, { useEffect, useState, useMemo, ReactNode } from "react";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
//@contents
import AdminOrdersList from "@contents/AdminOrders/AdminOrdersList";
import AdminOrderCreateForm from "@contents/AdminOrders/AdminOrderCreateForm";

// import Vendor from "@contents/Vendor";
//@services
import { getQuotationByFilter } from "@services/admin_orders/getQuotationByFilter";
import { deleteQuotation } from "@services/admin_orders/deleteQuotation";
import { assignmentClosed } from "@services/admin_orders/assignmentClosed";

//@components
import Drawer from "@components/Drawer";
import { I_Data } from "@components/Table/Table";
import LabelTag from "@components/LabelTag";

//@contexts
import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock-data
// import { mock_GetQuotationByFilterList } from "@mock-data/adminOrders/mockData";

const isFullWidth = false;
const ORDER_STATUS_TEXT: { [key: string]: { label: string; value: string } } = {
  "2": { label: "收到詢價", value: "2" },
  "3": { label: "送出報價", value: "3" },
  "5": { label: "接受報價", value: "5" },
  "6": { label: "已付全額", value: "6" },
  "7": { label: "已付訂金", value: "7" },
  "8": { label: "已付尾款", value: "8" },
  "9": { label: "訂金逾期", value: "9" },
  "10": { label: "尾款逾期", value: "10" },
  "11": { label: "繳款逾期", value: "11" },
  "13": { label: "預約派車", value: "13" },
  "14": { label: "預約完成", value: "14" },
  "15": { label: "結案", value: "15" }
};
const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = ({ locale, setPageType }) => {
  const router = useRouter();
  const [data, setData] = useState<I_Data[] | any>();
  const [nowTab, setNowTab] = useState(
    (router?.query?.status as string) || "1"
  );
  console.log("💕💕💕💕nowTab", nowTab);
  const [isDrawerFullWidth, setIsDrawerFullWidth] = useState(false);
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useAdminOrderStore();

  useEffect(() => {
    if (router.pathname.includes("admin_orders")) setPageType("admin_orders");
  }, [router, setPageType]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [router.query.codeType, setDrawerOpen]);

  useEffect(() => {
    getDataByTab(nowTab);
    let isCanceled = false;
    //串接API中
    getQuotationByFilter(subFilter)
      .then((data) => {
        // const orderData =mapping_to_table(data.contentList)
        // console.log(data.conditionList);
        // setData(data.contentList || []);
        // setData(orderData);
        if (!subFilter) {
          localStorage.setItem(
            "adminOrderFilter",
            JSON.stringify(data.conditionList)
          );
          initializeSubFilter();
        }
        if (isCanceled) {
          console.log("canceled");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isCanceled = true;
    };
  }, [subFilter]);

  const goToCreatePage = () => {
    // router.push("/vendor/create");
    setDrawerOpen(true);
  };
  //進入詢價檢視頁
  const goToDetailPage = (id: string, item: any) => {
    if (nowTab == "6") {
      router.push(
        "/admin_orders/detail/" +
          id +
          "?type=" +
          (item.quote_type.value || item.quote_type) +
          "&viewonly=1"
      );
    } else {
      router.push(
        "/admin_orders/detail/" +
          id +
          "?type=" +
          (item.quote_type.value || item.quote_type)
      );
    }
  };
  //進入詢價編輯頁
  const goToEditPageHandler = (id: string, item: any) => {
    //TODO:type代表是哪種訂單0:客製包車,1:接送機
    router.push(
      "/admin_orders/detail/" +
        id +
        "?type=" +
        item.quote_type.value +
        "&editPage=edit"
    );
  };
  //刪除該筆供應商
  const deleteItemHandler = async (id: string) => {
    try {
      const res = await deleteQuotation(id);
      const res_assignmentClosed = await assignmentClosed(id, "02");
      console.log(res);
      console.log(res_assignmentClosed);
      getDataByTab(nowTab);
    } catch (e) {
      console.log(e);
    }
  };
  const mapping_to_table = (data: any) => {
    if (!data) {
      return null;
    }
    const newdata = data.map((order: any) => {
      return {
        id: { label: order["quote_no"], value: order["quote_no"] },
        quote_no: {
          label: (
            <Text
              style={{
                cursor: "pointer"
              }}
              onClick={() => {
                goToDetailPage(order["quote_no"], order);
              }}
            >
              {order["quote_no"]}
            </Text>
          ),
          value: order["quote_no"]
        },
        quote_type: {
          label: order["quote_type"] == "1" ? "客製包車" : "接送機",
          value: order["quote_type"]
        },
        name: {
          label: order["family_name"] + order["name"],
          value: order["name"]
        },
        contact_phone: {
          label: (
            <span>
              {order["contact_phone_code"]} {order["contact_phone"]}
              <br />
              {order["contact_tel_code"]} {order["contact_tel"]}
            </span>
          ),
          value: order["contact_phone"]
        },
        contact_email: {
          label: order["contact_email"],
          value: order["contact_email"]
        },
        status_code: {
          label:
            ORDER_STATUS_TEXT[order["status_code"]]?.label ||
            "窩不知道狀態文字對應是啥",
          value: ORDER_STATUS_TEXT[order["status_code"]]?.value || "99"
        },
        //接單下階段才會做
        person_name: {
          label: "--",
          value: "--"
        },
        order_label: {
          label: order["label_name_list"].map(
            (child: { label_name: string }, i: number) => {
              return <LabelTag key={i} text={child.label_name} />;
            }
          ),
          value: order["order_label"]
        }
      };
    });

    return newdata;
  };
  const getDataByTab = async (tab_code: string) => {
    try {
      const res = await getQuotationByFilter(subFilter, tab_code);
      const orderData = mapping_to_table(res.contentList);
      // setData(data.contentList || []);
      setData(orderData);
    } catch {
      //刷新列表失敗
    }
  };
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
    setData([]);
    // updateSubFilter("status_code", value);
    getDataByTab(value);
    router.push({
      pathname: "/admin_orders/",
      query: { status: value }
    });
  };
  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "全部", value: "1" },
      { id: 2, label: "詢價", value: "2" },
      { id: 3, label: "報價", value: "3" },
      { id: 4, label: "訂單", value: "4" },
      { id: 5, label: "結案", value: "5" },
      { id: 6, label: "已取消", value: "6" }
    ],
    []
  );

  return (
    <BodySTY>
      {!isFullWidth ? (
        <>
          <TableWrapper
            viewOnly={true}
            isHide={isDrawerFullWidth}
            onChangeTab={changeMainFilterHandler}
            mainFilter={nowTab}
            mainFilterArray={mainFilterArray}
          >
            <FilterWrapper
              updateFilter={updateSubFilter}
              resetFilter={() => {
                initializeSubFilter();
              }}
              filter={subFilter}
            >
              {/* <FormattedMessage id="vendor_name" /> */}
              <AdminOrdersList
                listData={data}
                goToDetailPage={goToDetailPage}
                goToCreatePage={goToCreatePage}
                {...(nowTab !== "6" && { goToEditPageHandler })}
                {...(nowTab !== "6" && { deleteItemHandler })}
              ></AdminOrdersList>
            </FilterWrapper>
          </TableWrapper>
          {isDrawerOpen && (
            <Drawer
              tabName={["新增詢價單"]}
              isFullScreen={isDrawerFullWidth}
              closeDrawer={() => {
                setDrawerOpen(false);
                setIsDrawerFullWidth(false);
              }}
              toggleFullScreenDrawer={() => {
                setIsDrawerFullWidth(!isDrawerFullWidth);
              }}
            >
              <AdminOrderCreateForm
                reloadData={() => {
                  setDrawerOpen(false);
                  setData([]);
                  getDataByTab(nowTab);
                }}
              />
            </Drawer>
          )}
          {/* <SideBookMark /> */}
        </>
      ) : (
        <Pane
          width="100%"
          height="100%"
          background="#fff"
          borderRadius="10px"
          overflow="auto"
        >
          {/* Put your component here */}
        </Pane>
      )}
    </BodySTY>
  );
};

export const getServerSideProps: GetServerSideProps<Params> = async (
  context
) => {
  const { query } = context;
  return {
    props: {}
  };
};
// Page.getLayout = getLayout;
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
