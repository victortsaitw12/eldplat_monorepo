import React from "react";
import { Pane } from "evergreen-ui";

import VerticalDetail from "@components/VerticalDetail";

interface I_Props {
  adult?: string | number;
  child?: string | number;
  infant?: string | number;
  check_in_luggage?: string | number;
  carry_on_luggage?: string | number;
  bus_data?: any[];
}

const TakeBusInfoView = ({
  adult,
  child,
  infant,
  check_in_luggage,
  carry_on_luggage,
  bus_data
}: I_Props) => {
  console.log("busdata in takebusinfo", bus_data);
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
        items={bus_data?.map((child) => {
          return {
            label: (
              <span style={{ marginRight: "8px" }}>
                {child.bus_type + "(" + child.bus_seat + "人)"}
              </span>
            ),
            value: child.order_quantity
          };
        })}
      />
    </Pane>
  );
};
export default TakeBusInfoView;
