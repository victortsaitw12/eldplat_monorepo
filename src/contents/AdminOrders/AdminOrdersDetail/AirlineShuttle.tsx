import React from "react";
import { Pane } from "evergreen-ui";
//@component
import LabelTag from "@components/LabelTag";
import Collapse from "@components/Collapse";
import ProgressList from "@components/ProgressList";
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

//@mock_data
import { mock_progressdata } from "@mock-data/adminOrders/mockData";

interface I_Props {
  isEdit: boolean;
  orderData: any;
  busData: any;
  methods: any;
}
//詢議價檢視編輯-接送機
const AirlineShuttle = ({ isEdit, orderData, busData, methods }: I_Props) => {
  const contactListByType = (array: any[], type: string) => {
    const newArr = array.filter((child) => {
      return child.contact_type === type;
    });
    return newArr;
  };
  return (
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
            quote_total_amount={orderData.quote_total_amount}
            deposit={orderData.deposit}
            final_payment={orderData.final_payment}
            full_payment_amount={orderData.full_payment_amount}
            full_payment_check={orderData.full_payment_check}
            full_payment_tax={orderData.full_payment_tax}
            full_payment_period={orderData.full_payment_period}
            full_payment_history={orderData.full_payment_history}
            actual_full_payment_date={orderData.actual_full_payment_date}
            deposit_check={orderData.deposit_check}
            deposit_tax={orderData.deposit_tax}
            deposit_percent={orderData.deposit_percent}
            deposit_amount={orderData.deposit_amount}
            deposit_period={orderData.deposit_period}
            deposit_history={orderData.deposit_history}
            actual_deposit_date={orderData.actual_deposit_date}
            balance_amount={orderData.balance_amount}
            balance_period={orderData.balance_period}
            balance_history={orderData.balance_history}
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
            name={contactListByType(orderData.order_contact_list, "2")[0]?.name}
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
            name={contactListByType(orderData.order_contact_list, "1")[0]?.name}
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
        isCustomBus={false}
      />
      <Collapse opened={true} title="乘車資訊">
        {isEdit ? (
          <TakeBusInfoEdit busData={busData} methods={methods} />
        ) : (
          <TakeBusInfoView
            adult={orderData.adult}
            child={orderData.child}
            infant={orderData.infant}
            check_in_luggage={orderData.check_in_luggage}
            carry_on_luggage={orderData.carry_on_luggage}
            bus_data={orderData.bus_data}
          />
        )}
      </Collapse>
      <Collapse opened={true} title="特殊需求">
        {isEdit ? (
          <SpecialInfoEdit methods={methods} />
        ) : (
          <SpecialInfoView
            pickup_sign_check={orderData.pickup_sign_check}
            pickup_sign_remark={orderData.pickup_sign_remark}
            driver_guide_check={orderData.driver_guide_check}
            driver_guide_charge={orderData.driver_guide_charge}
            bus_age_check={orderData.bus_age_check}
            bus_age_charge={orderData.bus_age_charge}
            special_luggage_check={orderData.special_luggage_check}
            special_luggage_charge={orderData.special_luggage_charge}
            bring_pets_check={orderData.bring_pets_check}
            bring_pets_radio={orderData.bring_pets_radio}
            bring_pets_charge={orderData.bring_pets_charge}
            mineral_water_check={orderData.mineral_water_check}
            mineral_water_charge={orderData.mineral_water_charge}
            bottled_water_check={orderData.bottled_water_check}
            bottled_water_box={orderData.bottled_water_box}
            bottled_water_charge={orderData.bottled_water_charge}
            child_seat_check={orderData.child_seat_check}
            child_seat_seller={orderData.child_seat_seller}
            child_seat_yourself={orderData.chilchild_seat_yourselfd_seat_seller}
            child_seat_charge={orderData.child_seat_charge}
            infant_seat_check={orderData.infant_seat_check}
            infant_seat_seller={orderData.infant_seat_seller}
            infant_seat_yourself={orderData.infant_seat_yourself}
            infant_seat_charge={orderData.infant_seat_charge}
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
  );
};
export default AirlineShuttle;
