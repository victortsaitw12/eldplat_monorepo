import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Pane } from "evergreen-ui";
import { StyledForm } from "./style";
//@component
import Collapse from "@components/Collapse";
//@contents
import SummaryInfoView from "@contents/Client/Quote/Detail/SummaryInfoView";
import ShuttleInfo from "./ShuttleInfo";
import TakeBusInfoView from "./TakeBusInfoView";
import FlightInfoView from "./FlightInfoView";
import SpecialInfoView from "./SpecialInfoView";
import ContactInfoView from "./ContactInfoView";
//@mock_data
import {
  mappingContactInfo,
  mappingSpecailNeededsInfo
} from "@services/client/mappingQuotationData";

interface I_Props {
  isEdit: boolean;
  orderData: any;
}

const OrdersDetail = ({ isEdit, orderData }: I_Props) => {
  const contactInfo = mappingContactInfo(orderData["order_contact_list"][0]);
  const passengerInfo = mappingContactInfo(orderData["order_contact_list"][1]);
  const specialInfo = mappingSpecailNeededsInfo(orderData);
  const methods = useForm({
    defaultValues: {
      ...orderData
    }
  });

  const asyncSubmitForm = async (data: any) => {
    try {
      console.log("response of vendor edit: ");
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
  };

  const r_template = () => {
    return (
      <>
        <Collapse opened={true} title="總覽">
          <SummaryInfoView
            listArray={[
              {
                title: "訂單編號",
                value: orderData["quote_no"]
              },
              {
                title: "用車目的",
                value:
                  orderData["quote_type"] === "2"
                    ? "接機"
                    : orderData["quote_type"] === "3"
                    ? "送機"
                    : orderData["purpose"]
              }
            ]}
          />
        </Collapse>
        <Collapse opened={true} title="訂單聯絡人">
          <ContactInfoView listArray={contactInfo} />
        </Collapse>

        {/*以下為變動*/}
        {orderData["quote_type"] === "1" ? (
          <ShuttleInfo arrayName="order_itinerary_list" isEdit={isEdit} />
        ) : (
          <Collapse opened={true} title="航班資訊">
            <FlightInfoView data={orderData} />
          </Collapse>
        )}
        {/*變動*/}
        <Collapse title="乘車資訊" opened={true}>
          <TakeBusInfoView
            adult={orderData.adult}
            child={orderData.child}
            infant={orderData.infant}
            check_in_luggage={orderData.check_in_luggage}
            carry_on_luggage={orderData.carry_on_luggage}
            bus_data={orderData.bus_data}
          />
        </Collapse>
        <Collapse title="特殊需求" opened={true}>
          <SpecialInfoView
            listArray={specialInfo}
            remark={orderData["remark"]}
          />
        </Collapse>
        <Collapse opened={true} title="旅客代表人">
          <ContactInfoView listArray={passengerInfo} />
        </Collapse>
      </>
    );
  };
  return (
    <FormProvider {...methods}>
      <StyledForm
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
          asyncSubmitForm({ ...data });
        })}
      >
        {r_template()}
      </StyledForm>
    </FormProvider>
  );
};

export default OrdersDetail;
