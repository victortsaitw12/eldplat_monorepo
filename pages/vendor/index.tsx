import {
  I_Add_Vendors_Type,
  I_Select_Vendors_Type
} from "@typings/vendors_type";
import { Pane, GlobeIcon } from "evergreen-ui";
import { GetServerSideProps, NextPageWithLayout } from "next";
import Link from "next/link";
import React, { useEffect, useState, useMemo, ReactNode } from "react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";
//@contents
import VendorList from "@contents/Vendor/VendorList";
import VendorCreateForm from "@contents/Vendor/VendorCreateForm";
// import Vendor from "@contents/Vendor";
//@services
import { deleteVendor } from "@services/vendor/deleteVendor";
import { getAllVendors, defaultPageInfo } from "@services/vendor/getAllVendors";

//@components
import Drawer from "@components/Drawer";
import { I_Data } from "@components/Table/Table";
import LabelTag from "@components/LabelTag";
import { I_PageInfo } from "@components/PaginationField";
//@contexts
import { useVendorStore } from "@contexts/filter/vendorStore";
import RegionProvider from "@contexts/regionContext/regionProvider";

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = ({ locale, setPageType }) => {
  const router = useRouter();
  const [pageInfo, setPageInfo] = useState<I_PageInfo>(defaultPageInfo);
  const [data, setData] = useState<I_Select_Vendors_Type[] | I_Data[] | any>();
  const [nowTab, setNowTab] = useState(
    (router?.query?.status as string) || "1"
  );
  const [isDrawerFullWidth, setIsDrawerFullWidth] = useState(false);
  const {
    initializeSubFilter,
    mainFilter,
    updateMainFilter,
    subFilter,
    updateSubFilter,
    isDrawerOpen,
    setDrawerOpen
  } = useVendorStore();
  interface Vendor extends I_Select_Vendors_Type {
    vendor_No: string;
  }

  useEffect(() => {
    if (router.pathname.includes("vendor")) setPageType("vendor");
  }, [router, setPageType]);

  // useEffect(() => {
  //   setDrawerOpen(false);
  //   getResult(nowTab);
  // }, [router.query.codeType, setDrawerOpen]);

  const returnTableItem = (vendors: Vendor) => {
    return {
      id: { label: vendors["vendor_No"], value: vendors["vendor_No"] },
      vendor_no: {
        label: vendors["vendor_No"],
        value: vendors["vendor_No"]
      },
      vendor_data: {
        label: (
          <Pane
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            無
          </Pane>
        ),
        value: "無"
      },
      vendor_name: {
        label: (
          <span
            onClick={goToDetailPage.bind(null, vendors["vendor_No"])}
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            {vendors["vendor_Name"]}
          </span>
        ),
        value: vendors["vendor_Name"]
      },
      vendor_fullAddress: {
        label: vendors["vendor_city_name"],
        value: vendors["vendor_City"]
      },
      vendor_Tel: {
        label:
          vendors["vendor_Tel_Code"] && vendors["vendor_Tel"]
            ? vendors["vendor_Tel_Code"] + " " + vendors["vendor_Tel"]
            : "",
        value:
          vendors["vendor_Tel_Code"] && vendors["vendor_Tel"]
            ? vendors["vendor_Tel_Code"] + " " + vendors["vendor_Tel"]
            : ""
      },
      vendor_email: {
        label: vendors["vendor_Email"],
        value: vendors["vendor_Email"]
      },
      contact_Name: {
        label: vendors["contact_Name"],
        value: vendors["contact_Name"]
      },
      contact_Tel: {
        label: (
          <Pane>
            {vendors["contact_Tel_Code"] && vendors["contact_Tel"]
              ? vendors["contact_Tel_Code"] + " " + vendors["contact_Tel"]
              : ""}
            <br />
            {vendors["contact_Phone_Code"] && vendors["contact_Phone"]
              ? vendors["contact_Phone_Code"] + " " + vendors["contact_Phone"]
              : ""}
          </Pane>
        ),
        value:
          vendors["contact_Tel_Code"] && vendors["contact_Tel"]
            ? vendors["contact_Tel_Code"] + " " + vendors["contact_Tel"]
            : ""
      },
      vendor_website: {
        label: (
          <Pane
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <a
              href={vendors["vendor_Website"]}
              target="_blank"
              rel="noreferrer"
            >
              <GlobeIcon size={16} color="#718BAA" />
            </a>
          </Pane>
        ),
        value: vendors["vendor_Website"]
      },
      vendor_label: {
        label: <LabelTag text="服務讚" />,
        value: vendors["vendor_Label"]
      }
    };
  };

  // useEffect(() => {
  //   let isCanceled = false;
  //   getAllVendors(subFilter, "1", router.query.codeType as string).then(
  //     (data) => {
  //       if (isCanceled) {
  //         console.log("canceled");
  //         return;
  //       }
  //       if (!subFilter) {
  //         localStorage.setItem(
  //           "vendorInitFilter",
  //           JSON.stringify(data.conditionList)
  //         );
  //         initializeSubFilter();
  //       }
  //     }
  //   );
  //   return () => {
  //     isCanceled = true;
  //   };
  // }, [subFilter]);

  React.useEffect(() => {
    let isCanceled = false;
    fetchVendorsData(isCanceled, nowTab, pageInfo);
    return () => {
      isCanceled = true;
    };
  }, [nowTab]);

  const fetchVendorsData: any = React.useCallback(
    async (
      isCanceled: boolean,
      mainFilter = "1",
      pageQuery = defaultPageInfo
    ) => {
      // console.log("fetchEmployeeData");
      getAllVendors(
        subFilter,
        mainFilter,
        router.query.codeType as string,
        pageQuery
      ).then((data) => {
        if (!subFilter) {
          localStorage.setItem(
            "vendorInitFilter",
            JSON.stringify(data.conditionList)
          );
          initializeSubFilter();
        }
        const vendorData = data.contentList.map((vendors: Vendor) => {
          return returnTableItem(vendors);
        });
        setData(vendorData);
        const getPageInfo = { ...data.pageInfo };
        setPageInfo(getPageInfo);
      });
    },
    []
  );

  // const getResult = async (status: string) => {
  //   try {
  //     const res = await getAllVendors(
  //       subFilter,
  //       status,
  //       router.query.codeType as string
  //     );
  //     const vendorData = res.contentList.map((vendors: Vendor) => {
  //       return returnTableItem(vendors);
  //     });
  //     setData(vendorData);
  //   } catch {
  //     //刷新列表失敗
  //   }
  // };
  const handlePageChange = React.useCallback(
    (pageQuery: I_PageInfo) => {
      fetchVendorsData(false, nowTab, pageQuery);
      setPageInfo(pageQuery);
    },
    [fetchVendorsData, nowTab]
  );
  const goToCreatePage = () => {
    // router.push("/vendor/create");
    setDrawerOpen(true);
  };
  //進入供應商詳細頁
  const goToDetailPage = (id: string) => {
    router.push("/vendor/detail/" + id + "?editPage=view");
  };
  //進入供應商編輯頁
  const goToEditPageHandler = (id: string) => {
    router.push("/vendor/detail/" + id + "?editPage=edit");
  };
  //刪除該筆供應商
  const deleteItemHandler = async (id: string) => {
    try {
      const res = await deleteVendor(id, "2");
      console.log("response of vendor edit: ", res);
      setData([]);
      fetchVendorsData(false, "1", pageInfo);
    } catch (e: any) {
      console.log(e);
      alert("删除供應商失敗：" + e.message);
    }
  };

  const recoverItem = async (id: string) => {
    try {
      const res = await deleteVendor(id, "1");
      console.log("response of vendor edit: ", res);
      setData([]);
      fetchVendorsData(false, "2", pageInfo);
    } catch (e: any) {
      console.log(e);
      alert("删除供應商失敗：" + e.message);
    }
  };
  //套用新版filter
  const changeMainFilterHandler = (value: string) => {
    console.log("changeMainFilterHandler");
    setNowTab(value);
    setData([]);
    router.push({
      pathname: "/vendor/",
      query: { ...router?.query, status: value }
    });
    fetchVendorsData(false, value, pageInfo);
  };
  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "啟用", value: "1" },
      { id: 2, label: "停用", value: "2" }
    ],
    []
  );

  return (
    <RegionProvider>
      <BodySTY>
        <>
          <TableWrapper
            isHide={isDrawerFullWidth}
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
            >
              {/* <FormattedMessage id="vendor_name" /> */}
              {data && (
                <VendorList
                  vendor_code={router.query.codeType as string}
                  listType={nowTab}
                  vendorData={data}
                  goToDetailPage={goToDetailPage}
                  goToCreatePage={goToCreatePage}
                  goToEditPageHandler={goToEditPageHandler}
                  deleteItemHandler={deleteItemHandler}
                  recoverItem={recoverItem}
                  pageInfo={pageInfo}
                  handlePageChange={handlePageChange}
                ></VendorList>
              )}
            </FilterWrapper>
          </TableWrapper>
          {/* <SideBookMark /> */}
          {isDrawerOpen && (
            <Drawer
              tabName={["新增供應商"]}
              isFullScreen={isDrawerFullWidth}
              closeDrawer={() => {
                setDrawerOpen(false);
                setIsDrawerFullWidth(false);
              }}
              toggleFullScreenDrawer={() => {
                setIsDrawerFullWidth(!isDrawerFullWidth);
              }}
            >
              <VendorCreateForm
                reloadData={() => {
                  setDrawerOpen(false);
                  setData([]);
                  fetchVendorsData(false, "1", pageInfo);
                }}
              />
            </Drawer>
          )}
        </>
      </BodySTY>
    </RegionProvider>
  );
};

export const getServerSideProps: GetServerSideProps<Params> = async (
  context
) => {
  const { query } = context;
  if (!query.codeType) {
    return {
      redirect: {
        permanent: false,
        destination: "/vendor?codeType=01"
      },
      props: {}
    };
  } else {
    return {
      props: {}
    };
  }
};
Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
