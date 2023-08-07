import React, { useEffect, useState, useMemo, useRef, ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { Pane, toaster } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@components
import LightBox from "@components/Lightbox";
import LabelButton from "@components/Button/Primary/Label";
import LabelSecondaryButton from "@components/Button/Secondary/Label";

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
  viewonly,
  p_quote_type,
  p_order_no,
  editPage
}) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  // const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [busListData, setBusListData] = useState([]);
  const [isLightOpen, setLightOpen] = useState(false);

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
      router.replace({
        pathname: "/admin_orders/detail/" + p_order_no,
        query: { type: p_quote_type }
      });
      fetch_quotation();
    } catch (e: any) {
      console.log(e);
      // alert(e.message);
    }
    // setLoading(false);
  };
  const fetch_quotation = async () => {
    setLoading(true);
    try {
      const res = await getQuotationByID(p_order_no);
      const bus_res = await getBusType();
      setBusListData(bus_res);
      console.log("詢議價的資料", res.data);
      setOrderData(res.data);
    } catch (e: any) {
      console.log(e);
    }
    setLoading(false);
  };
  //
  useEffect(() => {
    setLoading(true);
    fetch_quotation();
    setLoading(false);
  }, [p_order_no]);

  return (
    <BodySTY>
      {!loading && orderData && (
        <>
          <Pane>
            <TableWrapper
              viewOnly={viewonly}
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
                if (editPage) {
                  setLightOpen(true);
                } else {
                  router.push("/admin_orders/");
                }
              }}
            >
              <AdminOrdersDetal
                submitRef={submitRef}
                busListData={busListData}
                submitForm={asyncSubmitForm}
                isEdit={editPage}
                quoteType={p_quote_type}
                orderData={orderData}
              />
            </TableWrapper>
          </Pane>
        </>
      )}
      <LightBox
        title="確定要離開嗎?"
        isOpen={isLightOpen}
        handleCloseLightBox={() => {
          setLightOpen((prev) => false);
        }}
      >
        如果你現在離開 ，將會遺失未儲存的資料。
        <Pane style={{ display: "flex", justifyContent: "flex-end" }}>
          <LabelSecondaryButton
            style={{
              width: "unset",
              fontSize: "12px",
              fontWeight: "600"
            }}
            onClick={(e) => {
              e.preventDefault();
              setLightOpen((prev) => false);
            }}
            text="取消"
          />
          <LabelButton
            style={{
              width: "unset",
              fontSize: "12px"
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/admin_orders/");
            }}
            text="確定離開"
          />
        </Pane>
      </LightBox>
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
        viewonly: query.viewonly == "1",
        p_quote_type: query.type,
        p_order_no: params ? params.id : ""
      }
    };
  }
};
// Index.getLayout = getLayout;
Index.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Index;
