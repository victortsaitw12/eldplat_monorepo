import {
  I_Add_Vendors_Type,
  I_Select_Vendors_Type
} from "@typings/vendors_type";
import { Pane, GlobeIcon } from "evergreen-ui";
import { NextPageWithLayout } from "next";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { BodySTY } from "./style";

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
import { getAllVendors } from "@services/vendor/getAllVendors";
//@components
import Drawer from "@components/Drawer";
import { I_Data } from "@components/Table/Table";

//新版的store
import { useVendorStore } from "@contexts/filter/vendorStore";

const isFullWidth = false;

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = ({ locale, setPageType }) => {
  const router = useRouter();
  const [data, setData] = useState<I_Select_Vendors_Type[] | I_Data[] | any>();

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

  useEffect(() => {
    let isCanceled = false;
    getAllVendors(subFilter).then((data) => {
      const vendorData = data.contentList.map((vendors: Vendor) => {
        return {
          id: { label: vendors["vendor_No"], value: vendors["vendor_No"] },
          vendor_name: {
            label: vendors["vendor_Name"],
            value: vendors["vendor_Name"]
          },
          vendor_fullAddress: {
            label: vendors["vendor_City"],
            value: vendors["vendor_City"]
          },
          vendor_phone: {
            label: vendors["vendor_Phone"],
            value: vendors["vendor_Phone"]
          },
          vendor_website: {
            label: (
              <a
                href={vendors["vendor_Website"]}
                target="_blank"
                rel="noreferrer"
              >
                <GlobeIcon size={16} color="#718BAA" />
              </a>
            ),
            value: vendors["vendor_Website"]
          },
          vendor_contact_name: {
            label: vendors["vendor_Contact_Name"],
            value: vendors["vendor_Contact_Name"]
          },
          vendor_contact_email: {
            label: vendors["vendor_Contact_Email"],
            value: vendors["vendor_Contact_Email"]
          },
          vendor_label: {
            label: vendors["vendor_Label"],
            value: vendors["vendor_Label"]
          }
        };
      });
      if (isCanceled) {
        console.log("canceled");
        return;
      }
      if (!subFilter) {
        localStorage.setItem(
          "vendorInitFilter",
          JSON.stringify(data.conditionList)
        );
        initializeSubFilter();
      }
      setData(vendorData);
    });
    return () => {
      isCanceled = true;
    };
  }, [subFilter]);

  const reloadResult = async () => {
    setData([])
    try {
      const res = await getAllVendors(subFilter)
      const vendorData = res.contentList.map((vendors: Vendor) => {
        return {
          id: { label: vendors["vendor_No"], value: vendors["vendor_No"] },
          vendor_name: {
            label: vendors["vendor_Name"],
            value: vendors["vendor_Name"]
          },
          vendor_fullAddress: {
            label: vendors["vendor_City"],
            value: vendors["vendor_City"]
          },
          vendor_phone: {
            label: vendors["vendor_Phone"],
            value: vendors["vendor_Phone"]
          },
          vendor_website: {
            label: (
              <a
                href={vendors["vendor_Website"]}
                target="_blank"
                rel="noreferrer"
              >
                <GlobeIcon size={16} color="#718BAA" />
              </a>
            ),
            value: vendors["vendor_Website"]
          },
          vendor_contact_name: {
            label: vendors["vendor_Contact_Name"],
            value: vendors["vendor_Contact_Name"]
          },
          vendor_contact_email: {
            label: vendors["vendor_Contact_Email"],
            value: vendors["vendor_Contact_Email"]
          },
          vendor_label: {
            label: vendors["vendor_Label"],
            value: vendors["vendor_Label"]
          }
        };
      });
      setData(vendorData);
    } catch {
      //刷新列表失敗
    }
  }

  const goToCreatePage = () => {
    // router.push("/vendor/create");
    setDrawerOpen(true)
  };
  //進入供應商詳細頁
  const goToDetailPage = (id: string) => {
    router.push("/vendor/detail/" + id);
  }
  //進入供應商編輯頁
  const goToEditPageHandler = (id: string) => {
    router.push("/vendor/edit/" + id);
  }
  //刪除該筆供應商
  const deleteItemHandler = async (id: string) => {
    try {
      const res = await deleteVendor(id);
      console.log("response of vendor edit: ", res);
      reloadResult();
    } catch (e: any) {
      console.log(e);
      alert("删除供應商失敗：" + e.message);
    }
    router.push("/vendor");
  }
  //套用新版filter
  const changeMainFilterHandler = () => {
  }
  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "全部", value: "all" },
      { id: 2, label: "停用", value: "seal" },
      { id: 3, label: "tab3", value: "tab3" },
      { id: 3, label: "tab4", value: "tab4" }
    ],
    []
  );

  return (
    <BodySTY>
      {!isFullWidth ? (
        <>
          <TableWrapper
            onChangeTab={changeMainFilterHandler}
            mainFilter={"all"}
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
              <VendorList
                vendorData={data}
                goToDetailPage={goToDetailPage}
                goToCreatePage={goToCreatePage}
                goToEditPageHandler={goToEditPageHandler}
                deleteItemHandler={deleteItemHandler}
              ></VendorList>
            </FilterWrapper>
          </TableWrapper>
          {isDrawerOpen && (
            <Drawer
              tabName={["新增供應商"]}
              closeDrawer={() => {
                setDrawerOpen(false);
              }}
            >
              <VendorCreateForm />
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

Page.getLayout = getLayout;
export default Page;
