import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon, TextInput } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@component
import LabelTag from "@components/LabelTag";
import Collapse from "@components/Collapse";
import ProgressList from "@components/ProgressList";
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
import PriceInfoEdit from "./PriceInfo/PriceInfoEdit";
import PriceInfoView from "./PriceInfo/PriceInfoView";
//@util

//@context
// import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

//@mock_data
import { mock_progressdata } from "@mock-data/adminOrders/mockData";
export interface I_busItem {
  type: string;
  bus_name: string;
  bus_seat: number;
}
export interface I_busType {
  bus_list: I_busItem[];
  ddl_code: string;
  type_name: string;
}
interface I_Props {
  submitForm?: (data: any) => void;
  isEdit: boolean;
  quoteType: "1" | "2"; //1:客製包車 2:接送機
  orderData: any;
  busType: I_busType[];
}

const AdminOrdersDetal = ({
  submitForm,
  isEdit,
  quoteType = "1",
  orderData,
  busType
}: I_Props) => {
  console.log("🤣🤣🤣🤣detail頁的orderData", orderData, busType);
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    defaultValues: {
      ...orderData
    }
  });

  const contactListByType = (array: any[], type: string) => {
    const newArr = array.filter((child) => {
      return child.contact_type === type;
    });
    return newArr;
  };
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
          {isEdit ? (
            <PaymentInfoEdit />
          ) : (
            <PaymentInfoView
              payment_status={orderData.payment_status}
              payment_time={orderData.payment_time}
              full_payment_amount={orderData.full_payment_amount}
              full_payment_period={orderData.full_payment_period}
              deposit_percent={orderData.deposit_percent}
              deposit_amount={orderData.deposit_amount}
              deposit_period={orderData.deposit_period}
              balance_amount={orderData.balance_amount}
              balance_period={orderData.balance_period}
            />
          )}
        </Collapse>
        <Collapse opened={true} title="客製包車">
          {isEdit ? (
            <CarInfoEdit />
          ) : (
            <CarInfoView purpose={orderData?.purpose} />
          )}
        </Collapse>
        <Collapse opened={true} title="訂單聯絡人">
          {isEdit ? (
            <ContactInfoEdit />
          ) : (
            <ContactInfoView
              family_name={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.family_name
              }
              name={
                contactListByType(orderData.order_contact_list, "2")[0]?.name
              }
              contact_phone_code={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_phone_code
              }
              contact_phone={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_phone
              }
              contact_tel_code={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_tel_code
              }
              contact_tel={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_tel
              }
              contact_email={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_email
              }
              social_media_type={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.social_media_type
              }
              social_media={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.social_media
              }
            />
          )}
        </Collapse>
        <Collapse opened={true} title="旅客代表人">
          {isEdit ? (
            <PassengerInfoEdit />
          ) : (
            <PassengerInfoView
              family_name={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.family_name
              }
              name={
                contactListByType(orderData.order_contact_list, "1")[0]?.name
              }
              contact_phone_code={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_phone_code
              }
              contact_phone={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_phone
              }
              contact_tel_code={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_tel_code
              }
              contact_tel={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_tel
              }
              contact_email={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_email
              }
              social_media_type={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.social_media_type
              }
              social_media={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.social_media
              }
            />
          )}
        </Collapse>
        {/*接送資訊*/}
        <ShuttleInfo
          quote_no={orderData.quote_no}
          arrayName="order_itinerary_list"
          isEdit={isEdit}
        />
        <Collapse opened={true} title="乘車資訊">
          {isEdit ? (
            <TakeBusInfoEdit busType={busType} methods={methods} />
          ) : (
            /*TODO：車型車輛的API之後會改成另一隻*/
            <TakeBusInfoView
              adult={orderData.adult}
              child={orderData.child}
              infant={orderData.infant}
              check_in_luggage={orderData.check_in_luggage}
              carry_on_luggage={orderData.carry_on_luggage}
              bus_type_list={orderData.bus_type_list}
            />
          )}
        </Collapse>
        <Collapse opened={true} title="特殊需求">
          {isEdit ? (
            <SpecialInfoEdit methods={methods} />
          ) : (
            <SpecialInfoView
              pickup_sign_check={orderData.pickup_sign_check}
              driver_guide_check={orderData.driver_guide_check}
              bus_age_check={orderData.bus_age_check}
              special_luggage_check={orderData.special_luggage_check}
              bring_pets_check={orderData.bring_pets_check}
              bring_pets_radio={orderData.bring_pets_radio}
              mineral_water_check={orderData.mineral_water_check}
              bottled_water_check={orderData.bottled_water_check}
              bottled_water_box={orderData.bottled_water_box}
              child_seat_check={orderData.child_seat_check}
              child_seat_seller={orderData.child_seat_seller}
              child_seat_yourself={orderData.child_seat_yourself}
              remark={orderData.remark}
            />
          )}
        </Collapse>
        <Collapse opened={true} title="標籤">
          <Pane
            className="special-content"
            style={{ padding: "20px", display: "flex", gap: "10px" }}
          >
            {orderData.label_list &&
              orderData.label_list.map(
                (child: { label_name: string }, i: number) => {
                  return <LabelTag key={i} text={child.label_name} />;
                }
              )}
          </Pane>
        </Collapse>
      </>
    ),
    //接送機
    "2": (
      <>
        <Collapse opened={true} title={orderData?.quote_no}>
          <Pane style={{ padding: "20px" }}>
            <ProgressList dataLists={[...mock_progressdata]} />
          </Pane>
        </Collapse>
        <Collapse opened={true} title="付款方式">
          {isEdit ? (
            <PaymentInfoEdit />
          ) : (
            <PaymentInfoView
              payment_status={orderData.payment_status}
              payment_time={orderData.payment_time}
              full_payment_amount={orderData.full_payment_amount}
              full_payment_period={orderData.full_payment_period}
              deposit_percent={orderData.deposit_percent}
              deposit_amount={orderData.deposit_amount}
              deposit_period={orderData.deposit_period}
              balance_amount={orderData.balance_amount}
              balance_period={orderData.balance_period}
            />
          )}
        </Collapse>
        <Collapse opened={true} title="機場接送">
          {isEdit ? (
            <CarInfoEdit />
          ) : (
            <CarInfoView purpose={orderData?.purpose} />
          )}
        </Collapse>
        <Collapse opened={true} title="訂單聯絡人">
          {isEdit ? (
            <ContactInfoEdit />
          ) : (
            <ContactInfoView
              family_name={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.family_name
              }
              name={
                contactListByType(orderData.order_contact_list, "2")[0]?.name
              }
              contact_phone_code={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_phone_code
              }
              contact_phone={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_phone
              }
              contact_tel_code={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_tel_code
              }
              contact_tel={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_tel
              }
              contact_email={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.contact_email
              }
              social_media_type={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.social_media_type
              }
              social_media={
                contactListByType(orderData.order_contact_list, "2")[0]
                  ?.social_media
              }
            />
          )}
        </Collapse>
        <Collapse opened={true} title="旅客代表人">
          {isEdit ? (
            <PassengerInfoEdit />
          ) : (
            <PassengerInfoView
              family_name={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.family_name
              }
              name={
                contactListByType(orderData.order_contact_list, "1")[0]?.name
              }
              contact_phone_code={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_phone_code
              }
              contact_phone={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_phone
              }
              contact_tel_code={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_tel_code
              }
              contact_tel={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_tel
              }
              contact_email={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.contact_email
              }
              social_media_type={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.social_media_type
              }
              social_media={
                contactListByType(orderData.order_contact_list, "1")[0]
                  ?.social_media
              }
            />
          )}
        </Collapse>
        <Collapse opened={true} title="航班資訊">
          {isEdit ? (
            <FlightInfoEdit />
          ) : (
            <FlightInfoView
              flight_date={orderData.flight_date}
              flight_number={orderData.flight_number}
              airport={orderData.airport}
              terminal={orderData.terminal}
              flight_departure_time={orderData.flight_departure_time}
              airline={orderData.airline}
            />
          )}
        </Collapse>
        {/*接送資訊*/}
        <ShuttleInfo
          quote_no={orderData.quote_no}
          arrayName="order_itinerary_list"
          isEdit={isEdit}
        />
        <Collapse opened={true} title="乘車資訊">
          {isEdit ? (
            <TakeBusInfoEdit busType={busType} methods={methods} />
          ) : (
            <TakeBusInfoView
              adult={orderData.adult}
              child={orderData.child}
              infant={orderData.infant}
              check_in_luggage={orderData.check_in_luggage}
              carry_on_luggage={orderData.carry_on_luggage}
              bus_type_list={orderData.bus_type_list}
            />
          )}
        </Collapse>
        <Collapse opened={true} title="特殊需求">
          {isEdit ? (
            <SpecialInfoEdit methods={methods} />
          ) : (
            <SpecialInfoView
              pickup_sign_check={orderData.pickup_sign_check}
              driver_guide_check={orderData.driver_guide_check}
              bus_age_check={orderData.bus_age_check}
              special_luggage_check={orderData.special_luggage_check}
              bring_pets_check={orderData.bring_pets_check}
              bring_pets_radio={orderData.bring_pets_radio}
              mineral_water_check={orderData.mineral_water_check}
              bottled_water_check={orderData.bottled_water_check}
              bottled_water_box={orderData.bottled_water_box}
              child_seat_check={orderData.child_seat_check}
              child_seat_seller={orderData.child_seat_seller}
              child_seat_yourself={orderData.child_seat_yourself}
              remark={orderData.remark}
            />
          )}
        </Collapse>
        <Collapse opened={true} title="標籤">
          {orderData.label_list &&
            orderData.label_list.map(
              (child: { label_name: string }, i: number) => {
                return <LabelTag key={i} text={child.label_name} />;
              }
            )}
        </Collapse>
      </>
    )
  };

  return (
    <BodySTY>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log("🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡order", data);
            submitForm && submitForm({ ...data });
          })}
        >
          <Pane
            style={{
              background: "#ffffff",
              borderRadius: "10px",
              overflow: "hidden"
            }}
          >
            {r_template[quoteType == "1" ? quoteType : "2"]}
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
              <PriceInfoView orderData={orderData} />
            )}
            <button type="submit">發送表單</button>
          </Pane>
        </form>
      </FormProvider>
    </BodySTY>
  );
};

export default AdminOrdersDetal;
