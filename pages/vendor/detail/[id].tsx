import React, { useEffect, useState, useMemo, useRef, ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";

//@services
import { updateVendor } from "@services/vendor/updateVendor";
import { getVendorById } from "@services/vendor/getVendorById";

//@contents
import VendorDetail from "@contents/Vendor/VendorDetail";
import VendorSubPoint from "@contents/Vendor/VendorSubPoint";

//@util
import { keysToLowercase } from "@utils/keysToLowercase";

//@context
import { useVendorStore } from "@contexts/filter/vendorStore";
//
const Index: NextPageWithLayout<never> = ({ vendor_id, editPage }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  // const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [oldVendorData, setOldVendorData] = useState(null);
  const [nowTab, setNowTab] = useState("vendor");
  const { initializeSubFilter, subFilter, updateSubFilter } = useVendorStore();

  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "供應商資料", value: "vendor" },
      { id: 2, label: "子據點", value: "subpoint" }
    ],
    []
  );
  //TableWrapper
  const changeMainFilterHandler = (value: string) => {
    console.log("changeMainFilterHandler", value);
    setNowTab(value);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("edited data", data);
    setLoading(true);
    try {
      const res = await updateVendor(vendor_id, data);
      console.log("response of vendor edit: ", res);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
    router.push({
      pathname: "/vendor/detail/" + vendor_id,
      query: { editPage: "view" }
    });
    getDefaultData();
  };
  const getDefaultData = async () => {
    setLoading(true);
    try {
      const data = await getVendorById(vendor_id);
      console.log("✨✨✨✨✨Get data by id", data);
      data.vendor_Contact_List = data.vendor_Contact_List.map(
        (child: { [key: string]: string }) => {
          return keysToLowercase(child);
        }
      );
      setOldVendorData(data);
    } catch (e: any) {
      console.log("取單一供應商data的時候錯了", e);
      console.log(e);
    }
    setLoading(false);
  };
  //
  useEffect(() => {
    getDefaultData();
  }, [vendor_id]);

  return (
    <BodySTY>
      {!loading && oldVendorData && (
        <TableWrapper
          isEdit={editPage}
          onChangeTab={(value) => changeMainFilterHandler(value)}
          mainFilter={nowTab}
          mainFilterArray={mainFilterArray}
          onSave={() => {
            submitRef.current && submitRef.current.click();
          }}
          onEdit={() => {
            router.push({
              pathname: "/vendor/detail/" + vendor_id,
              query: { editPage: "edit" }
            });
          }}
          onClose={() => {
            router.push("/vendor");
          }}
        >
          {nowTab === "vendor" && (
            <VendorDetail
              submitRef={submitRef}
              submitForm={asyncSubmitForm}
              isEdit={editPage}
              vendorData={oldVendorData}
            />
          )}
          {nowTab === "subpoint" && (
            // <FilterWrapper
            //   updateFilter={updateSubFilter}
            //   resetFilter={() => {
            //     initializeSubFilter();
            //   }}
            //   filter={subFilter}
            // >
            //   <VendorSubPoint isEdit={editPage} />
            // </FilterWrapper>
            <VendorSubPoint isEdit={editPage} />
          )}
        </TableWrapper>
      )}
    </BodySTY>
  );
};
interface Props {
  vendor_id: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params, query } = context;
  return {
    props: {
      editPage: query.editPage == "edit",
      vendor_id: params ? params.id : ""
    }
  };
};
Index.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Index;
