import { I_Data } from "@components/Table/Table";
import MainBookmark from "@contents/MainBookmark";
import SideBookMark from "@contents/SideBookmark";
import Vendor from "@contents/Vendor";
import { getAllVendors } from "@services/vendor/getAllVendors";
import { useBusStore } from "@contexts/filter/busStore";
import { I_Add_Vendors_Type } from "@typings/vendors_type";
import { Pane } from "evergreen-ui";
import { NextPageWithLayout } from "next";
import React, { useEffect, useState } from "react";
import { getLayout } from "src/Layout/MainLayout";
import { BodySTY } from "./style";

const isFullWidth = true;

const Page: NextPageWithLayout<never> = () => {
  const [vendorDATA, setVendorDATA] = useState<
    I_Add_Vendors_Type[] | I_Data[] | any
  >();
  const filter = useBusStore((state) => state.subFilter);
  const updateFilter = useBusStore((state) => state.updateSubFilter);
  const initializeFilter = useBusStore((state) => state.initializeSubFilter);

  useEffect(() => {
    let isCanceled = false;
    console.log("filter", filter);
    getAllVendors(filter).then((data) => {
      console.log("data", data);
      const newData = data.contentList.map((vendors: I_Add_Vendors_Type) => {
        return {
          vendor_name: vendors.vendor_name,
          vendor_city: vendors.vendor_city,
          vendor_phone: vendors.vendor_phone,
          vendor_website: vendors.vendor_website,
          vendor_contact_name: vendors.vendor_contact_name,
          vendor_contact_email: vendors.vendor_contact_email,
          vendor_label: vendors.vendor_label
        };
      });
      if (isCanceled) {
        console.log("canceled");
        return;
      }
      if (!filter) {
        localStorage.setItem("initFilter", JSON.stringify(data.conditionList));
        initializeFilter();
      }
      setVendorDATA(newData);
    });
    return () => {
      isCanceled = true;
    };
  }, [filter, initializeFilter]);

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
            <Vendor data={vendorDATA} />
          </MainBookmark>
          <SideBookMark />
        </>
      ) : (
        <Pane
          width="100%"
          height="100%"
          background="#fff"
          borderRadius="10px"
          overflow="auto"
          // backgroundColor="#999999"
        >
          {/* Put your component here */}
          {/* <AddVendor></AddVendor> */}
          {/* <FuelEntryList></FuelEntryList> */}
          {/* <VendorDetail></VendorDetail> */}
          <Vendor data={vendorDATA} />
        </Pane>
      )}
    </BodySTY>
  );
};

Page.getLayout = getLayout;
export default Page;
