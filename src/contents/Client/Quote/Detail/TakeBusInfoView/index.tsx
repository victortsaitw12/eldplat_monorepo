import React from "react";
import { Pane } from "evergreen-ui";

import VerticalDetail from "@components/VerticalDetail";

interface I_Props {
  adult?: string | number;
  child?: string | number;
  infant?: string | number;
  check_in_luggage?: string | number;
  carry_on_luggage?: string | number;
  bus_data?: Array<any>;
}

const TakeBusInfoView = ({
  adult,
  child,
  infant,
  check_in_luggage,
  carry_on_luggage,
  bus_data
}: I_Props) => {
  console.log("bus_data: ", bus_data);
  const mappedBusData = bus_data?.reduce(
    (
      resultArray: Array<{ label: string; value: string | number }>,
      child: any
    ) => {
      child.bus_list.forEach((bus: any) => {
        if (bus.order_quantity) {
          resultArray.push({
            label: child.type_name + "(" + bus.bus_seat + "人)",
            value: bus.order_quantity
          });
        }
      });
      return resultArray;
    },
    []
  );
  console.log("mappedBusData: ", mappedBusData);
  return (
    <Pane
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <VerticalDetail
        title="乘客數量"
        items={[
          {
            label: "成人",
            value: adult || "0"
          },
          {
            label: "兒童",
            value: child || "0"
          },
          {
            label: "嬰兒",
            value: infant || "0"
          }
        ]}
      />
      <VerticalDetail
        title="行李件數"
        items={[
          {
            label: "托運行李 (21吋以上)",
            value: check_in_luggage || "0"
          },
          {
            label: "手提行李 (20吋以下)",
            value: carry_on_luggage || "0"
          }
        ]}
      />
      {/*TODO：車型車輛的API之後會改成另一隻API*/}
      <VerticalDetail
        title="車型及數量"
        items={
          // bus_data
          //   ? bus_data.map((child: any) => {
          //       console.log("child: ", child);
          //       return {
          //         label: child.bus_type + "(" + child.bus_seat + "人)",
          //         value: child.order_quantity
          //       };
          //     })
          //   : []
          mappedBusData
        }
      />
    </Pane>
  );
};
export default TakeBusInfoView;
