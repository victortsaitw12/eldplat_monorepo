import React, { useEffect, useState, useMemo, useRef } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon, Text } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";

//@content
import AdminOrdersDetal from "@contents/AdminOrders/AdminOrdersDetail";
import PriceInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/PriceInfo/PriceInfoEdit";
import PriceInfoView from "@contents/AdminOrders/AdminOrdersDetail/PriceInfo/PriceInfoView";

//@services
import { getQuotationByID } from "@services/admin_orders/getQuotationByID";

//@context
// import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock_data

const Index: NextPageWithLayout<never> = ({ order_type, order_id }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
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

  //
  useEffect(() => {
    setLoading(true);
    const getCustomerData = async () => {
      setLoading(true);
      try {
        const res = await getQuotationByID(order_id);
        console.log("✨✨✨✨✨Get data by id", res.data);
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
                isEdit={isEdit}
                orderType={order_type}
                orderData={orderData}
              />
            </TableWrapper>
          </Pane>
          <Pane>
            {isEdit ? (
              <PriceInfoEdit
                status={"1"}
                priceList={[
                  {
                    label: "基本車資",
                    name: "basic"
                  }
                ]}
              />
            ) : (
              <PriceInfoView />
            )}
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
        order_type: query.type,
        order_id: params ? params.id : ""
      }
    };
  }
};
Index.getLayout = getLayout;
export default Index;
