import React, { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useRouter } from "next/router";
import { Pane, Icon, FloppyDiskIcon, EditIcon, TextInput } from "evergreen-ui";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//@component

//@services

//@contents
import PriceInfoEdit from "./PriceInfo/PriceInfoEdit";
import PriceInfoView from "./PriceInfo/PriceInfoView";
import CustomBus from "./CustomBus";
import AirlineShuttle from "./AirlineShuttle";
import dayjs from "dayjs";

//@util

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
  busData: I_busType[];
}

const AdminOrdersDetal = ({
  submitRef,
  submitForm,
  isEdit,
  quoteType = "1",
  orderData,
  busData
}: I_Props) => {
  console.log("🤣🤣🤣🤣detail頁的orderData", orderData, busData);
  const modifyDefaultValues = (data: any) => {
    const newData = { ...orderData };
    newData["full_payment_period"] =
      orderData["full_payment_period"] &&
      dayjs(orderData["full_payment_period"]).format("YYYY-MM-DD");

    newData["deposit_period"] =
      orderData["deposit_period"] &&
      dayjs(orderData["deposit_period"]).format("YYYY-MM-DD");

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
    for (const key in busData) {
      formatedBusData.push({
        type_name: busData[key].type_name,
        ddl_code: busData[key].ddl_code,
        bus_list: busData[key].bus_list.map((child: any) => {
          return {
            bus_name: child.bus_name,
            bus_seat: child.bus_seat,
            bus_type: child.type,
            order_quantity:
              res_bus_data[busData[key].type_name + "-" + child.bus_seat] || 0
          };
        })
      });
    }
    newData["bus_data"] = formatedBusData;
    console.log("💕💕💕💕💕💕💕modify後的資料", newData);
    return newData;
  };
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      ...modifyDefaultValues(orderData)
    }
  });
  const { watch } = methods;
  // const watchAllFields = watch();
  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name == "full_payment_check") {
        if (value.full_payment_check == "1") {
          //當為全額支付的時候
          methods.setValue("deposit_check", "0");
          methods.setValue("deposit_period", null);
        }
      }
      if (name == "deposit_check") {
        if (value.deposit_check == "1") {
          //當為訂金支付的時候
          methods.setValue("full_payment_check", "0");
          methods.setValue("full_payment_period", null);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const r_template: { "1": React.ReactNode; "2": React.ReactNode } = {
    //客製包車
    "1": (
      <CustomBus
        orderData={orderData}
        methods={methods}
        busData={busData}
        isEdit={isEdit}
      />
    ),
    //接送機
    "2": (
      <AirlineShuttle
        orderData={orderData}
        methods={methods}
        busData={busData}
        isEdit={isEdit}
      />
    )
  };

  return (
    <BodySTY>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log("🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡order", data);
            // if (data.full_payment_check == "1" || data.deposit_check == "1") {
            //   submitForm && submitForm({ ...data });
            // } else {
            //   alert("請最少選擇一種支付方式");
            // }
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
