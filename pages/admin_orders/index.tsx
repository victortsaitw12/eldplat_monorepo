import { Pane } from "evergreen-ui";
import { GetServerSideProps, NextPageWithLayout } from "next";
import React, { useEffect, useState, useMemo } from "react";
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

//@components
import Drawer from "@components/Drawer";
import { I_Data } from "@components/Table/Table";
import LabelTag from "@components/LabelTag";

//@contexts
import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock-data
import { mock_GetQuotationByFilterList } from "@mock-data/adminOrders/mockData";

const isFullWidth = false;

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = ({ locale, setPageType }) => {
  const router = useRouter();
  const [data, setData] = useState<I_Data[] | any>();
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
    //TODO:過篩條件待開發
    console.log("🤣🤣🤣🤣🤣🤣", subFilter);
    //串接API中
    getQuotationByFilter(subFilter)
      .then((data) => {
        console.log("💫💫💫💫", data);
        console.log(data.contentList);
        const orderData = mock_GetQuotationByFilterList.map((order: any) => {
          return {
            id: { label: order["quote_no"], value: order["quote_no"] },
            quote_no: { label: order["quote_no"], value: order["quote_no"] },
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
            order_status: {
              label: order["order_status"],
              value: order["order_status"]
            },
            //接單下階段才會做
            person_name: {
              label: "-",
              value: "-"
            },
            order_label: {
              label: <LabelTag text="服務讚" />,
              value: order["order_label"]
            }
          };
        });
        // setData(data.contentList || []);
        setData(orderData);
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

  const getResult = async () => {
    try {
      const res = await getQuotationByFilter(subFilter);
      console.log("res.contentList", res.contentList);
      const orderData = mock_GetQuotationByFilterList.map((order: any) => {
        return {
          id: { label: order["quote_no"], value: order["quote_no"] },
          quote_no: { label: order["quote_no"], value: order["quote_no"] },
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
          order_status: {
            label: order["order_status"],
            value: order["order_status"]
          },
          //接單下階段才會做
          person_name: {
            label: "-",
            value: "-"
          },
          order_label: {
            label: <LabelTag text="服務讚" />,
            value: order["order_label"]
          }
        };
      });
      // setData(data.contentList || []);
      setData(orderData);
    } catch {
      //刷新列表失敗
    }
  };

  const goToCreatePage = () => {
    // router.push("/vendor/create");
    setDrawerOpen(true);
  };
  //進入詢價檢視頁
  const goToDetailPage = (id: string, item: any) => {
    console.log("😊😊😊😊😊item", item);
    //TODO:type代表是哪種訂單0:客製包車,1:接機,2:送機
    router.push(
      "/admin_orders/detail/" + id + "?type=" + item.quote_type.value
    );
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
    console.log("deleteItemHandler", id);
  };
  //套用新版filter(上方Tab切換)
  const changeMainFilterHandler = (value: string) => {
    setNowTab(value);
    setData([]);
    getResult();
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
              <AdminOrderCreateForm />
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
