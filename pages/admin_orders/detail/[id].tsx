import React, { useEffect, useState, useMemo, useRef } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon, Text } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";

//@content
import AdminOrdersDetal from "@contents/AdminOrders/AdminOrdersDetail";

//@services
import { getQuotationByID } from "@services/admin_orders/getQuotationByID";
import { updateQuotation } from "@services/admin_orders/updateQuotation";
import { getBusType } from "@services/client/getBusType";

//@context
// import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock_data

const Index: NextPageWithLayout<never> = ({ quote_type, order_id }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [busType, setBusType] = useState([]);
  const [isEdit, setIsEdit] = useState(editPage === "edit" || false);
  const [nowTab, setNowTab] = useState("order");

  // const {
  //     initializeSubFilter,
  //     mainFilter,
  //     updateMainFilter,
  //     subFilter,
  //     updateSubFilter,
  //     isDrawerOpen,
  //     setDrawerOpen
  // } = useAdminOrderStore();

  //
  const mainFilterArray = useMemo(
    () => [{ id: 1, label: "訂單內容", value: "order" }],
    []
  );
  //TableWrapper
  const changeMainFilterHandler = (value: string) => {
    console.log("changeMainFilterHandler", value);
    setNowTab(value);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("✨✨✨✨✨✨✨✨✨✨✨✨edited data", data);
    // setLoading(true);
    try {
      const res = await updateQuotation(data);
      console.log("response of order edit: ", res);
    } catch (e: any) {
      console.log(e);
      // alert(e.message);
    }
    // setLoading(false);
  };

  //
  useEffect(() => {
    setLoading(true);
    const getCustomerData = async () => {
      setLoading(true);
      try {
        const res = await getQuotationByID(order_id);
        const bus_res = await getBusType();
        console.log("✨✨✨✨✨Get data by id", res.data);
        console.log("👽👽👽👽👽👽👽bus_res", bus_res);
        setBusType(bus_res);
        setOrderData(res.data);
      } catch (e: any) {
        console.log("getQuotationByID Error:", e);
        console.log(e);
      }
      setLoading(false);
    };
    getCustomerData();
    setLoading(false);
  }, [order_id]);

  return (
    <BodySTY>
      {!loading && orderData && (
        <>
          <Pane>
            <TableWrapper
              isEdit={isEdit}
              onChangeTab={(value) => changeMainFilterHandler(value)}
              mainFilter={nowTab}
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
              <AdminOrdersDetal
                busType={busType}
                submitForm={asyncSubmitForm}
                isEdit={isEdit}
                quoteType={quote_type}
                orderData={orderData}
              />
            </TableWrapper>
          </Pane>
        </>
      )}
    </BodySTY>
  );
};
interface Props {
  order_id: string;
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params, query } = context;
  if (!query.type) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin_orders"
      },
      props: {}
    };
  } else {
    return {
      props: {
        quote_type: query.type,
        order_id: params ? params.id : ""
      }
    };
  }
};
Index.getLayout = getLayout;
export default Index;
