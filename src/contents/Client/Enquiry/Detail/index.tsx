import React, { useState } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon, TextInput } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@layout
import { getLayout } from "@layout/MainLayout";
import TableWrapper from "@layout/TableWrapper";
import FilterWrapper from "@layout/FilterWrapper";

//@component
import LabelTag from "@components/LabelTag";
import Collapse from "@components/Collapse";
import ProgressList from "@components/ProgressList";
import VerticalDetail from "@components/VerticalDetail";
import DetailList from "@components/DetailList";
import CheckBoxWrapper from "@components/CheckBoxWrapper";
//@services

//@contents
import ShuttleInfoView from "@contents/AdminOrders/AdminOrdersDetail/ShuttleInfo/ShuttleInfoView";
import CarInfoView from "@contents/AdminOrders/AdminOrdersDetail/CarInfo/CarInfoView";
import CarInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/CarInfo/CarInfoEdit";
import ContactInfoView from "@contents/AdminOrders/AdminOrdersDetail/ContactInfo/ContactInfoView";
import ContactInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/ContactInfo/ContactInfoEdit";
import PassengerInfoView from "@contents/AdminOrders/AdminOrdersDetail/PassengerInfo/PassengerInfoView";
import PassengerInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/PassengerInfo/PassengerInfoEdit";
import TakeBusInfoView from "@contents/AdminOrders/AdminOrdersDetail/TakeBusInfo/TakeBusInfoView";
import TakeBusInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/TakeBusInfo/TakeBusInfoEdit";
import FlightInfoView from "@contents/AdminOrders/AdminOrdersDetail/FlightInfo/FlightInfoView";
import FlightInfoEdit from "@contents/AdminOrders/AdminOrdersDetail/FlightInfo/FlightInfoEdit";
//@util
import { keysToLowercase } from "@utils/keysToLowercase";

//@context
// import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock_data
import {
  mock_progressdata,
  order_contact,
  order_represent,
  order_shuttleList,
  order_sepcial,
  order_flight
} from "@mock-data/adminOrders/mockData";

interface I_Props {
  isEdit: boolean;
  orderType?: "0" | "1";
  orderData: any;
}

const OrdersDetail = ({ isEdit, orderType = "0", orderData }: I_Props) => {
  console.log("🤣🤣🤣🤣detail頁的orderData", orderData);
  console.log("📃📃📃📃📃isEdit", isEdit);
  console.log("orderType", orderType);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      "schedule-list": [
        {
          label: "",
          location: "桃園國際機場"
        },
        {
          label: "",
          location: "你家"
        }
      ]
    }
  });

  const asyncSubmitForm = async (data: any) => {
    console.log("edited data", data);
    setLoading(true);
    try {
      console.log("response of vendor edit: ");
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
  };

  const r_template = (orderType: "0" | "1") => {
    return (
      <>
        <Collapse opened={true} title="總覽">
          <CarInfoView
            listArray={[
              {
                title: "用車目的",
                value: "送機"
              },
              {
                title: "訂車注意事項",
                value: "客戶同意"
              }
            ]}
          />
        </Collapse>
        <Collapse opened={true} title="訂單聯絡人">
          <ContactInfoView data={order_contact} />
        </Collapse>

        {/*以下為變動*/}
        {orderType === "0" ? (
          <ShuttleInfoView shuttleList={order_shuttleList} />
        ) : (
          <Collapse opened={true} title="航班資訊">
            {isEdit ? (
              <FlightInfoEdit />
            ) : (
              <FlightInfoView data={order_flight} />
            )}
          </Collapse>
        )}
        {/*變動*/}
        <Collapse title="乘車資訊">
          {isEdit ? <TakeBusInfoEdit /> : <TakeBusInfoView />}
        </Collapse>
        <Collapse title="特殊需求">
          <Pane className="special_content" style={{ padding: "20px" }}>
            <DetailList listArray={order_sepcial} />
          </Pane>
        </Collapse>
        <Collapse opened={true} title="旅客代表人">
          {isEdit ? (
            <PassengerInfoEdit />
          ) : (
            <PassengerInfoView data={order_represent} />
          )}
        </Collapse>
        <Collapse title="標籤">
          <Pane
            className="special-content"
            style={{ padding: "20px", display: "flex", gap: "10px" }}
          >
            <LabelTag text="服務讚" />
            <LabelTag text="服務讚" />
            <LabelTag text="服務讚" />
            <LabelTag text="服務讚" />
          </Pane>
        </Collapse>
      </>
    );
  };
  return (
    <BodySTY>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log(data);
            asyncSubmitForm({ ...data });
          })}
        >
          <Pane style={{ background: "#ffffff" }}>{r_template(orderType)}</Pane>
        </form>
      </FormProvider>
    </BodySTY>
  );
};

export default OrdersDetail;
