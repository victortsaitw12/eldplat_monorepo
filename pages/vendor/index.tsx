import { I_Data } from "@components/Table/Table";
import MainBookmark from "@contents/MainBookmark";
import Vendor from "@contents/Vendor";
import { getAllVendors } from "@services/vendor/getAllVendors";
import { useFilterStore } from "@contexts/filter/vendorFilterStore";
import {
  I_Add_Vendors_Type,
  I_Select_Vendors_Type
} from "@typings/vendors_type";
import { Pane, GlobeIcon } from "evergreen-ui";
import { NextPageWithLayout } from "next";
import React, { useEffect, useState } from "react";
import { getLayout } from "@layout/MainLayout";
import VendorList from "@contents/Vendor/VendorList";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { deleteVendor } from "@services/vendor/deleteVendor";
import { FormattedMessage } from "react-intl";
import TitlteBar from "@components/TitleBar";

const isFullWidth = false;

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = ({ locale, setPageType }) => {
  const router = useRouter();
  const [data, setData] = useState<I_Select_Vendors_Type[] | I_Data[] | any>();
  const filter = useFilterStore((state) => state.filter);
  const updateFilter = useFilterStore((state) => state.updateFilter);
  const initializeFilter = useFilterStore((state) => state.initializeFilter);
  interface Vendor extends I_Select_Vendors_Type {
    vendor_No: string;
  }

  useEffect(() => {
    if (router.pathname.includes("vendor")) setPageType("vendor");
  }, [router, setPageType]);

  useEffect(() => {
    let isCanceled = false;
    getAllVendors(filter).then((data) => {
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
      if (!filter) {
        localStorage.setItem(
          "vendorInitFilter",
          JSON.stringify(data.conditionList)
        );
        initializeFilter();
      }
      setData(vendorData);
    });
    return () => {
      isCanceled = true;
    };
  }, [filter]);

  const reloadResult = async () => {
    setData([])
    try {
      const res = await getAllVendors(filter)
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
    router.push("/vendor/create");
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
  return (
    <BodySTY>
      {!isFullWidth ? (
        <>
          <MainBookmark
            beforeChildren={<TitlteBar titleLabel="全部" />}
            filter={filter}
            updateFilter={updateFilter}
            resetFilter={() => {
              initializeFilter();
            }}
          >
            {/* Put your component here */}
            {/* <Vendor data={data}></Vendor> */}
            <FormattedMessage id="vendor_name" />
            <VendorList
              vendorData={data}
              goToDetailPage={goToDetailPage}
              goToCreatePage={goToCreatePage}
              goToEditPageHandler={goToEditPageHandler}
              deleteItemHandler={deleteItemHandler}
            ></VendorList>
          </MainBookmark>
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
