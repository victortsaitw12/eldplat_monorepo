import React from "react";
import { Pane } from "evergreen-ui";
import { useFormContext, useWatch } from "react-hook-form";
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
import LabelInfoView from "./LabelInfo/LabelInfoView";

//@utils
import mappingProgressInfo from "@utils/mappingProgressInfo";
interface I_Props {
  isEdit: boolean;
  busListData: any;
}
//詢議價檢視編輯-接送機
const AirlineShuttle = ({ isEdit, busListData }: I_Props) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  const { quote_no, order_status_list } = useWatch({
    control
  });
  return (
    <>
      <Collapse opened={true} title={quote_no}>
        <Pane style={{ padding: "20px" }}>
          <ProgressList dataLists={mappingProgressInfo(order_status_list)} />
        </Pane>
      </Collapse>
      <Collapse opened={true} title="付款方式">
        {isEdit ? <PaymentInfoEdit /> : <PaymentInfoView />}
      </Collapse>
      <Collapse opened={true} title="機場接送">
        {isEdit ? <CarInfoEdit /> : <CarInfoView />}
      </Collapse>
      <Collapse opened={true} title="訂單聯絡人">
        {isEdit ? <ContactInfoEdit /> : <ContactInfoView />}
      </Collapse>
      <Collapse opened={true} title="旅客代表人">
        {isEdit ? <PassengerInfoEdit /> : <PassengerInfoView />}
      </Collapse>
      <Collapse opened={true} title="航班資訊">
        {isEdit ? <FlightInfoEdit /> : <FlightInfoView />}
      </Collapse>
      {/*接送資訊*/}
      <ShuttleInfo isEdit={isEdit} />
      <Collapse opened={true} title="乘車資訊">
        {isEdit ? (
          <TakeBusInfoEdit busListData={busListData} />
        ) : (
          <TakeBusInfoView />
        )}
      </Collapse>
      <Collapse opened={true} title="特殊需求">
        {isEdit ? <SpecialInfoEdit /> : <SpecialInfoView />}
      </Collapse>
      <Collapse opened={true} title="標籤">
        <LabelInfoView />
      </Collapse>
    </>
  );
};
export default AirlineShuttle;
