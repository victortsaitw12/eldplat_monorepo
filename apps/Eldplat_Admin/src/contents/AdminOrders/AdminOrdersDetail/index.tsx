import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon, TextInput } from "evergreen-ui";
import { BodySTY } from "./style";

//@component

//@services

//@contents
import PriceInfoEdit from "./PriceInfo/PriceInfoEdit";
import PriceInfoView from "./PriceInfo/PriceInfoView";
import CustomBus from "./CustomBus";
import AirlineShuttle from "./AirlineShuttle";
import dayjs from "dayjs";

//@utils

//@context
// import { useAdminOrderStore } from "@contexts/filter/adminOrdersStore";

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
  submitRef: React.RefObject<HTMLButtonElement>;
  submitForm?: (data: any) => void;
  isEdit: boolean;
  quoteType: "1" | "2" | "3"; //1:客製包車 2:接送機
  orderData: any;
  busListData: I_busType[];
}

const AdminOrdersDetal = ({
  submitRef,
  submitForm,
  isEdit,
  quoteType = "1",
  orderData,
  busListData
}: I_Props) => {
  const modifyDefaultValues = (data: any) => {
    const newData = { ...orderData };
    newData["adult"] = orderData["adult"] || 0;
    newData["child"] = orderData["child"] || 0;
    newData["infant"] = orderData["infant"] || 0;
    newData["check_in_luggage"] = orderData["check_in_luggage"] || 0;
    newData["carry_on_luggage"] = orderData["carry_on_luggage"] || 0;
    if (
      //假如“全額付款”跟“預付訂金”都為false的話就編輯模式下要默認“全額付款”
      orderData["full_payment_check"] !== "1" &&
      orderData["deposit_check"] !== "1" &&
      isEdit == true
    ) {
      newData["full_payment_check"] = "1";
    }
    newData["full_payment_period"] =
      orderData["full_payment_period"] &&
      dayjs(orderData["full_payment_period"]).format("YYYY-MM-DD");

    newData["deposit_period"] =
      orderData["deposit_period"] &&
      dayjs(orderData["deposit_period"]).format("YYYY-MM-DD");
    newData["balance_period"] =
      orderData["balance_period"] &&
      dayjs(orderData["balance_period"]).format("YYYY-MM-DD");
    newData["flight_date"] =
      orderData["flight_date"] &&
      dayjs(orderData["flight_date"]).format("YYYY-MM-DD");

    newData["order_itinerary_list"] = orderData["order_itinerary_list"].map(
      (child: any) => {
        return {
          ...child,
          day_date: dayjs(child.day_date).format("YYYY-MM-DD")
        };
      }
    );
    if (orderData["order_itinerary_list"].length == 0) {
      newData["order_itinerary_list"] = [
        {
          day_date: null,
          day_number: null,
          departure_time: null,
          dropoff_location: null,
          pickup_location: null,
          quote_no: orderData["quote_no"],
          stopover_address_list: []
        }
      ];
    }
    //處理巴士資訊的部分
    let res_bus_data: { [key: string]: number } = {};
    orderData.bus_data.forEach(
      (element: {
        bus_type: string;
        bus_seat: string;
        order_quantity: number;
      }) => {
        if (element.bus_type && element.bus_seat && element.order_quantity) {
          res_bus_data = {
            ...res_bus_data,
            [element.bus_type + "-" + element.bus_seat]: element.order_quantity
          };
        }
      }
    );
    const formatedBusData = [];
    for (const key in busListData) {
      formatedBusData.push({
        type_name: busListData[key].type_name,
        ddl_code: busListData[key].ddl_code,
        bus_list: busListData[key].bus_list.map((child: any) => {
          return {
            bus_name: child.bus_name,
            bus_seat: child.bus_seat,
            bus_type: child.type,
            order_quantity:
              res_bus_data[busListData[key].type_name + "-" + child.bus_seat] ||
              0
          };
        })
      });
    }
    newData["bus_data"] = formatedBusData;
    return newData;
  };
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      ...modifyDefaultValues(orderData)
    }
  });
  React.useEffect(() => {
    if (
      methods.getValues("full_payment_check") !== "1" &&
      methods.getValues("deposit_check") !== "1" &&
      isEdit == true
    ) {
      methods.setValue("full_payment_check", "1");
    }
  }, [isEdit]);
  const r_template: { "1": React.ReactNode; "2": React.ReactNode } = {
    //客製包車
    "1": <CustomBus busListData={busListData} isEdit={isEdit} />,
    //接送機
    "2": <AirlineShuttle busListData={busListData} isEdit={isEdit} />
  };

  return (
    <BodySTY>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log("data when submit", data);
            //乘客數量
            const passenger_amount = data.child + data.adult + data.infant;
            //車數量
            let bus_amount = 0;
            for (const i in data.bus_data) {
              for (const j in data.bus_data[i].bus_list) {
                bus_amount += data.bus_data[i].bus_list[j].order_quantity;
              }
            }
            if (data.full_payment_check == "0" && data.deposit_check == "0") {
              alert("請最少選擇一種支付方式");
            } else if (passenger_amount < 1) {
              alert("請至少選擇一位乘客");
            } else if (bus_amount < 1) {
              alert("請至少選擇一種車種");
            } else {
              submitForm && submitForm({ ...data });
            }
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
              <PriceInfoView />
            )}
            <button style={{ display: "none" }} ref={submitRef} type="submit">
              發送表單
            </button>
          </Pane>
        </form>
      </FormProvider>
    </BodySTY>
  );
};

export default AdminOrdersDetal;
