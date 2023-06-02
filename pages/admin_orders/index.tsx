import {
  I_Add_Vendors_Type,
  I_Select_Vendors_Type
} from "@typings/vendors_type";
import { Pane, GlobeIcon } from "evergreen-ui";
import { GetServerSideProps, NextPageWithLayout } from "next";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
//@contents
import AdminOrdersList from "@contents/AdminOrders/AdminOrdersList";

// import Vendor from "@contents/Vendor";
//@services


//@components
import Drawer from "@components/Drawer";
import { I_Data } from "@components/Table/Table";
import LabelTag from "@components/LabelTag";

//@contexts
import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock-data
import { mock_subFilter, mock_adminOrdersList } from "@mock-data/adminOrders/mockData";

const isFullWidth = false;

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = ({ locale, setPageType }) => {
  const router = useRouter();
  const [data, setData] = useState<I_Select_Vendors_Type[] | I_Data[] | any>();
  const [nowTab, setNowTab] = useState("1");
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
    let isCanceled = false;

    if (!subFilter) {
      localStorage.setItem(
        "adminOrderFilter",
        JSON.stringify(mock_subFilter)
      );
      initializeSubFilter();
    }
    const orderData = mock_adminOrdersList.map((order: any) => {

      return {
        id: { label: order["quote_no"], value: order["quote_no"] },
        quote_no: { label: order["quote_no"], value: order["quote_no"] },
        order_type: { label: order["order_type"], value: order["order_type"] },
        contact_name: { label: order["contact_name"], value: order["contact_name"] },
        contact_phone: {
          label: <span>
            + {order["contact_phone_code"]} {order["contact_phone"]}<br />
            + {order["contact_tel_code"]} {order["contact_tel"]}
          </span>,
          value: order["contact_phone"]
        },
        contact_mail: {
          label: order["contact_mail"],
          value: order["contact_mail"]
        },
        order_status: {
          label: order["order_status"],
          value: order["order_status"]
        },
        person_name: {
          label: order["person_name"],
          value: order["person_name"]
        },
        order_label: {
          label: (
            <LabelTag text="服務讚" />
          ),
          value: order["order_label"]
        }
      }
    })
    setData(orderData);
    return () => {
      isCanceled = true;
    };
  }, [subFilter]);

  const getResult = async () => {
    try {
      setData([]);
    } catch {
      //刷新列表失敗
    }
  }

  const goToCreatePage = () => {
    // router.push("/vendor/create");
    setDrawerOpen(true)
  };
  //進入詢價檢視頁
  const goToDetailPage = (id: string) => {
    //TODO:type代表是哪種訂單0:客製包車,1:接機,2:送機
    router.push("/admin_orders/detail/" + id + "?type=0");
  }
  //進入詢價編輯頁
  const goToEditPageHandler = (id: string) => {
    //TODO:type代表是哪種訂單0:客製包車,1:接送機
    router.push("/admin_orders/detail/" + id + "?type=0" + "&editPage=edit");
  }
  //刪除該筆供應商
  const deleteItemHandler = async (id: string) => {
    console.log("deleteItemHandler", id);
  }
  //套用新版filter(上方Tab切換)
  const changeMainFilterHandler = (value: string) => {
    console.log("切換上方頁簽", value)
    setNowTab(value);
    setData([]);
    getResult();
  }
  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "啟用", value: "1" },
      { id: 2, label: "停用", value: "2" },
      { id: 3, label: "報價", value: "3" },
      { id: 4, label: "訂單", value: "4" },
      { id: 5, label: "已取消", value: "5" }
    ],
    []
  );

  return (
    <BodySTY>
      {!isFullWidth ? (
        <>
          <TableWrapper
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
                goToEditPageHandler={goToEditPageHandler}
                deleteItemHandler={deleteItemHandler}
              ></AdminOrdersList>
            </FilterWrapper>
          </TableWrapper>
          {isDrawerOpen && (
            <Drawer
              tabName={["新增詢價單"]}
              closeDrawer={() => {
                setDrawerOpen(false);
              }}
            >
              <br />
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
Page.getLayout = getLayout;
export default Page;
