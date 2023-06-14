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
import ShuttleInfo from "./ShuttleInfo";
import PaymentInfoView from "./PaymentInfo/PaymentInfoView";
import PaymentInfoEdit from "./PaymentInfo/PaymentInfoEdit";
import CarInfoView from "./CarInfo/CarInfoView";
import CarInfoEdit from "./CarInfo/CarInfoEdit";
import FlightInfoView from "./FlightInfo/FlightInfoView";
import FlightInfoEdit from "./FlightInfo/FlightInfoEdit";
import ContactInfoView from "./ContactInfo/ContactInfoView";
import ContactInfoEdit from "./ContactInfo/ContactInfoEdit";
import PassengerInfoView from "./PassengerInfo/PassengerInfoView";
import PassengerInfoEdit from "./PassengerInfo/PassengerInfoEdit";
import TakeBusInfoView from "./TakeBusInfo/TakeBusInfoView";
import TakeBusInfoEdit from "./TakeBusInfo/TakeBusInfoEdit";
import SpecialInfoView from "./SpecialInfo/SpecialInfoView";
import SpecialInfoEdit from "./SpecialInfo/SpecialInfoEdit";
//@util

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
  orderType: "1" | "2";
  orderData: any;
}

const AdminOrdersDetal = ({ isEdit, orderType = "1", orderData }: I_Props) => {
  console.log("🤣🤣🤣🤣detail頁的orderData", orderData);
  console.log("📃📃📃📃📃isEdit", isEdit);
  console.log("orderType", orderType);
  console.log("🤣🤣🤣🤣", orderData.order_contact_list);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      order_itinerary_list: [
        {
          day_number: "1",
          day_date: "2023/06/05",
          stopover_addresses: [
            {
              location: "桃園國際機場"
            },
            {
              location: "你家"
            }
          ]
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
  const contactListByType = (array: any[], type: string) => {
    const newArr = array.filter((child) => {
      return child.contact_type === type;
    });
    console.log(newArr);
  };
  console.log(contactListByType(orderData.order_contact_list, "2"));
  const r_template: { "1": React.ReactNode; "2": React.ReactNode } = {
    //客製包車
    "1": (
      <>
        <Collapse opened={true} title={orderData?.quote_no}>
          <Pane style={{ padding: "20px" }}>
            <ProgressList dataLists={[...mock_progressdata]} />
          </Pane>
        </Collapse>
        <Collapse opened={true} title="付款方式">
          {isEdit ? <PaymentInfoEdit /> : <PaymentInfoView />}
        </Collapse>
        <Collapse opened={true} title="客製包車">
          {isEdit ? (
            <CarInfoEdit />
          ) : (
            <CarInfoView
              listArray={[
                {
                  title: "用車目的",
                  value: orderData?.purpose
                },
                {
                  title: "訂車注意事項",
                  value: "客戶同意"
                }
              ]}
            />
          )}
        </Collapse>
        <Collapse opened={true} title="訂單聯絡人">
          {isEdit ? (
            <ContactInfoEdit />
          ) : (
            <ContactInfoView data={order_contact} />
          )}
        </Collapse>
        <Collapse opened={true} title="旅客代表人">
          {isEdit ? (
            <PassengerInfoEdit />
          ) : (
            <PassengerInfoView data={order_represent} />
          )}
        </Collapse>
        {/*接送資訊*/}
        <ShuttleInfo
          arrayName="order_itinerary_list"
          isEdit={isEdit}
          shuttleList={order_shuttleList}
        />
        <Collapse opened={true} title="乘車資訊">
          {isEdit ? <TakeBusInfoEdit /> : <TakeBusInfoView />}
        </Collapse>
        <Collapse opened={true} title="特殊需求">
          {isEdit ? (
            <SpecialInfoEdit />
          ) : (
            <SpecialInfoView data={order_sepcial} />
          )}
        </Collapse>
        <Collapse opened={true} title="標籤">
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
    ),
    //接送機
    "2": (
      <>
        <Collapse opened={true} title="ORDER229999">
          <Pane style={{ padding: "20px" }}>
            <ProgressList dataLists={[...mock_progressdata]} />
          </Pane>
        </Collapse>
        <Collapse opened={true} title="付款方式">
          {isEdit ? <PaymentInfoEdit /> : <PaymentInfoView />}
        </Collapse>
        <Collapse opened={true} title="機場接送">
          {isEdit ? (
            <CarInfoEdit />
          ) : (
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
          )}
        </Collapse>
        <Collapse opened={true} title="訂單聯絡人">
          {isEdit ? (
            <ContactInfoEdit />
          ) : (
            <ContactInfoView data={order_contact} />
          )}
        </Collapse>
        <Collapse opened={true} title="旅客代表人">
          {isEdit ? (
            <PassengerInfoEdit />
          ) : (
            <PassengerInfoView data={order_represent} />
          )}
        </Collapse>
        <Collapse opened={true} title="航班資訊">
          {isEdit ? <FlightInfoEdit /> : <FlightInfoView data={order_flight} />}
        </Collapse>
        {/*接送資訊*/}
        <ShuttleInfo
          arrayName="order_itinerary_list"
          isEdit={isEdit}
          shuttleList={order_shuttleList}
        />
        <Collapse opened={true} title="乘車資訊">
          {isEdit ? <TakeBusInfoEdit /> : <TakeBusInfoView />}
        </Collapse>
        <Collapse opened={true} title="特殊需求">
          {isEdit ? (
            <SpecialInfoEdit />
          ) : (
            <SpecialInfoView data={order_sepcial} />
          )}
        </Collapse>
        <Collapse opened={true} title="標籤">
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
    )
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
          <Pane
            style={{
              background: "#ffffff",
              borderRadius: "10px",
              overflow: "hidden"
            }}
          >
            {r_template[orderType]}
          </Pane>
        </form>
      </FormProvider>
    </BodySTY>
  );
};

export default AdminOrdersDetal;
