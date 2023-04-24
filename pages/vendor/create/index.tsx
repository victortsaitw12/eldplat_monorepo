import React, { useCallback, useState } from "react";
import { NextPageWithLayout } from "next";
//
import { getLayout } from "@layout/MainLayout";
import { createVendor } from "@services/vendor/createVendor";
import { useRouter } from "next/router";
import LoadingSpinner from "@components/LoadingSpinner";
import VendorEditForm from "@contents/Vendor/VendorEditForm";
import { BodySTY } from "./style";
//
const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await createVendor(data);
      console.log("response of vendor create: ", res);
      router.push("/vendor");
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
  };
  const cancelFormHandler = useCallback(() => {
    router.push("/vendor");
  }, [router]);
  return (
    <BodySTY>
      {/* Put your component here */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <VendorEditForm
          submitForm={asyncSubmitForm}
          onCancel={cancelFormHandler}
        />
      )}
    </BodySTY>
  );
};
Page.getLayout = getLayout;
export default Page;
