import React, { useEffect, useState, useMemo, useRef } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon } from "evergreen-ui";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
//@services
import { updateVendor } from "@services/vendor/updateVendor";
import { getVendorById } from "@services/vendor/getVendorById";

import VendorDetail from "@contents/Vendor/VendorDetail";

import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { keysToLowercase } from "@utils/keysToLowercase";
//
const Index: NextPageWithLayout<never> = ({ vendor_id }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0

  const [loading, setLoading] = useState(false);
  const [oldVendorData, setOldVendorData] = useState(null);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  //TableWrapper
  const changeMainFilterHandler = () => {
    console.log("changeMainFilterHandler");
  };
  //
  const mainFilterArray = useMemo(
    () => [{ id: 1, label: "供應商資料", value: "all" }],
    []
  );

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
    router.push("/vendor");
  };

  //
  useEffect(() => {
    const getCustomerData = async () => {
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
    getCustomerData();
  }, [vendor_id]);

  return (
    <BodySTY>
      {!loading && oldVendorData && (
        <TableWrapper
          isEdit={isEdit}
          onChangeTab={changeMainFilterHandler}
          mainFilter={"all"}
          mainFilterArray={mainFilterArray}
          onSave={() => {
            // setIsEdit(!isEdit)
            submitRef.current && submitRef.current.click();
          }}
          onEdit={() => {
            setIsEdit(true);
          }}
          onClose={() => {
            router.push("/vendor");
          }}
        >
          <VendorDetail
            submitRef={submitRef}
            submitForm={asyncSubmitForm}
            isEdit={isEdit}
            vendorData={oldVendorData}
          />
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
  const { params } = context;
  return {
    props: {
      vendor_id: params ? params.id : ""
    }
  };
};
Index.getLayout = getLayout;
export default Index;
