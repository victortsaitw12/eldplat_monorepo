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
import ContactInfoView from "./ContactInfo/ContactInfoView";
import ContactInfoEdit from "./ContactInfo/ContactInfoEdit";
import PassengerInfoView from "./PassengerInfo/PassengerInfoView";
import PassengerInfoEdit from "./PassengerInfo/PassengerInfoEdit";
import TakeBusInfoView from "./TakeBusInfo/TakeBusInfoView";
import TakeBusInfoEdit from "./TakeBusInfo/TakeBusInfoEdit";
import SpecialInfoView from "./SpecialInfo/SpecialInfoView";
import SpecialInfoEdit from "./SpecialInfo/SpecialInfoEdit";
import LabelInfoView from "./LabelInfo/LabelInfoView";

//@mock_data
import { mock_progressdata } from "@mock-data/adminOrders/mockData";

interface I_Props {
  isEdit: boolean;
  orderData: any;
  busData: any;
  methods: any;
}
//詢議價檢視編輯-客製包車
const CustomBus = ({ isEdit, orderData, busData, methods }: I_Props) => {
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
      {/*接送資訊*/}
      <ShuttleInfo
        quote_no={orderData.quote_no}
        arrayName="order_itinerary_list"
        isEdit={isEdit}
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
        <LabelInfoView label_list={orderData.label_list} />
      </Collapse>
    </>
  );
};
export default CustomBus;
