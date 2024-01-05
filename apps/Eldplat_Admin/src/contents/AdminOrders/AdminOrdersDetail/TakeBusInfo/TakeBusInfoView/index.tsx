import React from "react";
import { Pane } from "evergreen-ui";

import VerticalDetail from "@components/VerticalDetail";
import { useFormContext, useWatch } from "react-hook-form";

const TakeBusInfoView = () => {
  const { control } = useFormContext();
  const {
    adult,
    child,
    infant,
    check_in_luggage,
    carry_on_luggage,
    bus_data,
    quote_no
  } = useWatch({ control });

  const flatternBusData: any[] = [];
  bus_data.forEach((item: any) => {
    const busList = item.bus_list;
    for (const listData of busList) {
      if (listData.order_quantity !== 0) {
        flatternBusData.push({
          quote_no: quote_no.quote_no,
          bus_type: item.type_name,
          bus_seat: listData.bus_seat,
          order_quantity: listData.order_quantity
        });
      }
    }
  });

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
            label: "手提行李（20吋以下）",
            value: carry_on_luggage || "0"
          }
        ]}
      />
      <VerticalDetail
        title="車型及數量"
        items={flatternBusData?.map((ele: any) => {
          return {
            label: (
              <span style={{ marginRight: "8px" }}>
                {ele.bus_type + "(" + ele.bus_seat + "人)"}
              </span>
            ),
            value: ele.order_quantity
          };
        })}
      />
    </Pane>
  );
};
export default TakeBusInfoView;
