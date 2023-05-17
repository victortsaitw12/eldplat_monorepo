import React, { useEffect, useState } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";

import { updateVendor } from "@services/vendor/updateVendor";
import { getVendorById } from "@services/vendor/getVendorById";

import VendorEditForm from "@contents/Vendor/VendorEditForm";

import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//🕯️🕯️🕯️此頁面未來會刪除
const Index: NextPageWithLayout<never> = ({ vendor_id }) => {
  const [loading, setLoading] = useState(false);
  const [oldVendorData, setOldVendorData] = useState(null);

  const router = useRouter();
  const asyncSubmitForm = async (data: any) => {
    console.log("edited data", data);
    setLoading(true);
    try {
      const res = await updateVendor(vendor_id, data);
      console.log("response of vendor edit: ", res);
      router.push("/vendor");
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
  };

  //
  useEffect(() => {
    const getCustomerData = async () => {
      setLoading(true);
      try {
        const data = await getVendorById(vendor_id);
        setOldVendorData(data);
      } catch (e: any) {
        console.log(e);
      }
      setLoading(false);
    };
    getCustomerData();
  }, [vendor_id]);
  return (
    <BodySTY>
      <Pane
        width="100%"
        height="100%"
        // background="#fff"
        // borderRadius="10px"
        overflow="auto"
      >
        {/* Put your component here */}
        {loading || <VendorEditForm onCancel={() => { router.push("/vendor") }} submitForm={asyncSubmitForm} oldData={oldVendorData} />}
      </Pane>
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
