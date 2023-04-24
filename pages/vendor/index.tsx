import { I_Data } from "@components/Table/Table";
import MainBookmark from "@contents/MainBookmark";
import Vendor from "@contents/Vendor";
import { getAllVendors } from "@services/vendor/getAllVendors";
import { useFilterStore } from "@contexts/filter/vendorFilterStore";
import { I_Add_Vendors_Type } from "@typings/vendors_type";
import { Pane, GlobeIcon } from "evergreen-ui";
import { NextPageWithLayout } from "next";
import React, { useEffect, useState } from "react";
import { getLayout } from "@layout/MainLayout";
import VendorList from "@contents/Vendor/VendorList";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

const isFullWidth = false;

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [data, setData] = useState<I_Add_Vendors_Type[] | I_Data[] | any>();
  const filter = useFilterStore((state) => state.filter);
  const updateFilter = useFilterStore((state) => state.updateFilter);
  const initializeFilter = useFilterStore((state) => state.initializeFilter);
  interface Vendor extends I_Add_Vendors_Type {
    vendor_no: string;
  }
  useEffect(() => {
    let isCanceled = false;
    getAllVendors(filter).then((data) => {
      console.log("vendor-data", data);
      const vendorData = data.contentList.map((vendors: Vendor) => {
        return {
          id: { label: vendors.vendor_no, value: vendors.vendor_no },
          vendor_name: {
            label: vendors.vendor_name,
            value: vendors.vendor_name
          },
          vendor_fullAddress: {
            label: vendors.vendor_city,
            value: vendors.vendor_city
          },
          vendor_phone: {
            label: vendors.vendor_phone,
            value: vendors.vendor_phone
          },
          vendor_website: {
            label: (
              <a href={vendors.vendor_website} target="_blank" rel="noreferrer">
                <GlobeIcon size={16} color="#718BAA" />
              </a>
            ),
            value: vendors.vendor_website
          },
          vendor_contact_name: {
            label: vendors.vendor_contact_name,
            value: vendors.vendor_contact_name
          },
          vendor_contact_email: {
            label: vendors.vendor_contact_email,
            value: vendors.vendor_contact_email
          },
          vendor_label: {
            label: vendors.vendor_label,
            value: vendors.vendor_label
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

  const goToCreatePage = () => {
    router.push("/vendor/create");
  };

  return (
    <BodySTY>
      {!isFullWidth ? (
        <>
          <MainBookmark
            filter={filter}
            updateFilter={updateFilter}
            resetFilter={() => {
              initializeFilter();
            }}
          >
            {/* Put your component here */}
            {/* <Vendor data={data}></Vendor> */}
            <VendorList vendorData={data} goToCreatePage={goToCreatePage} />
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
          <Vendor data={data} />
        </Pane>
      )}
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
