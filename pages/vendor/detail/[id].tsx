import React, { useEffect, useState, useMemo } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Pane } from "evergreen-ui";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
//@services
import { updateVendor } from "@services/vendor/updateVendor";
import { getVendorById } from "@services/vendor/getVendorById";

import VendorDetail from "@contents/Vendor/VendorDetail";

import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//
const Index: NextPageWithLayout<never> = ({ vendor_id }) => {
  const router = useRouter();
  const { editPage } = router.query;//是否為編輯頁的判斷1或0

  const [loading, setLoading] = useState(false);
  const [oldVendorData, setOldVendorData] = useState(null);
  const [isEdit, setIsEdit] = useState(editPage === '1' || false);
  //TableWrapper
  const changeMainFilterHandler = () => {
    console.log('changeMainFilterHandler');
  };
  //
  const mainFilterArray = useMemo(
    () => [
      { id: 1, label: "供應商資料", value: "all" }
    ],
    []
  );

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
      {!loading && oldVendorData &&
        <Pane
          width="100%"
          height="100%"
          overflow="auto"
        >
          <button onClick={
            () => {
              setIsEdit(!isEdit);
            }
          }>
            編輯
          </button>
          <TableWrapper
            onChangeTab={changeMainFilterHandler}
            mainFilter={"all"}
            mainFilterArray={mainFilterArray}
          >
            <VendorDetail
              submitForm={asyncSubmitForm}
              isEdit={isEdit}
              vendorData={oldVendorData}
            />
          </TableWrapper>
        </Pane>
      }
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
