import React from "react";
import { Pane } from "evergreen-ui";
import DetailGrid from "@components/DetailGrid";
import VerticalDetail from "@components/VerticalDetail";

interface I_Props {
  bus_data?: Array<any>;
  takeBusInfo: Array<any>;
}

const TakeBusInfoView = ({
  bus_data,
  takeBusInfo
}: I_Props) => {
  const mappedBusData = bus_data?.reduce(
    (
      resultArray: Array<{ title: string; value: string | number }>,
      child: any
    ) => {
      if ("bus_list" in child) {
        child.bus_list.forEach((bus: any) => {
          if (bus.order_quantity) {
            resultArray.push({
              title: child.type_name + "(" + bus.bus_seat + "人)",
              value: bus.order_quantity
            });
          }
        });
      } else {
        resultArray.push({
          title: child.bus_type + "(" + child.bus_seat + "人)",
          value: child.order_quantity
        });
      }
      return resultArray;
    },
    []
  );

  console.log(mappedBusData)

  return (
    <>
      {takeBusInfo.length !== 0 && takeBusInfo.map((info, index) => {
        return (
          <DetailGrid
            borderRadius={index === 0 ? "4px 4px 0 0" : "0"}
            isCollapse={true} 
            listArray={info.value} 
            title={info.title} 
            key={index} 
          />
          )
        })}
      {
        mappedBusData && mappedBusData.length !== 0 &&
        <DetailGrid 
          borderRadius={"0 0 4px 4px"}
          isCollapse={true} 
          listArray={mappedBusData} 
          title="車型與數量" 
        />
      }
    </>

    // <Pane
    //   style={{
    //     padding: "20px",
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "20px"
    //   }}
    // >
    //   <VerticalDetail
    //     title="乘客數量"
    //     items={[
    //       {
    //         label: "成人",
    //         value: adult || "0"
    //       },
    //       {
    //         label: "兒童",
    //         value: child || "0"
    //       },
    //       {
    //         label: "嬰兒",
    //         value: infant || "0"
    //       }
    //     ]}
    //   />
    //   <VerticalDetail
    //     title="行李件數"
    //     items={[
    //       {
    //         label: "托運行李 (21吋以上)",
    //         value: check_in_luggage || "0"
    //       },
    //       {
    //         label: "手提行李 (20吋以下)",
    //         value: carry_on_luggage || "0"
    //       }
    //     ]}
    //   />
    //   {/*TODO：車型車輛的API之後會改成另一隻API*/}
    //   <VerticalDetail title="車型及數量" items={mappedBusData} />
    // </Pane>
  );
};
export default TakeBusInfoView;
