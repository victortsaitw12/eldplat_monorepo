import React, { useEffect, useState, useMemo, useRef } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Pane } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

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

const Index: NextPageWithLayout<never> = ({
  p_quote_type,
  p_order_no,
  editPage
}) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  // const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [busData, setBusData] = useState([]);

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
      // console.log("response of order edit: ", res);
      router.push({
        pathname: "/admin_orders/detail/" + p_order_no,
        query: { type: p_quote_type }
      });
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
        const res = await getQuotationByID(p_order_no);
        const bus_res = await getBusType();
        setBusData(bus_res);
        setOrderData(res.data);
      } catch (e: any) {
        console.log(e);
      }
      setLoading(false);
    };
    getCustomerData();
    setLoading(false);
  }, [p_order_no]);

  return (
    <BodySTY>
      {!loading && orderData && (
        <>
          <Pane>
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
                  pathname: "/admin_orders/detail/" + p_order_no,
                  query: { type: p_quote_type, editPage: "edit" }
                });
              }}
              onClose={() => {
                router.push("/admin_orders/");
              }}
            >
              <AdminOrdersDetal
                submitRef={submitRef}
                busData={busData}
                submitForm={asyncSubmitForm}
                isEdit={editPage}
                quoteType={p_quote_type}
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
  p_order_no: string;
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
        editPage: query.editPage == "edit",
        p_quote_type: query.type,
        p_order_no: params ? params.id : ""
      }
    };
  }
};
Index.getLayout = getLayout;
export default Index;
