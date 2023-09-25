import React from "react";
import { Spinner } from "evergreen-ui";

import {
  I_ManualAssignType,
  I_ManualCreateType
} from "@typings/assignment_type";
import Drawer from "@components/Drawer";
import AssignAutoCreate from "@contents/Assignment/AssignAutoCreate";
import AssignManualCreate from "@contents/Assignment/AssignManualCreate";
import CarEdit from "@contents/Assignment/AssignManualEdit/CarEdit";
import DriverEdit from "@contents/Assignment/AssignManualEdit/DriverEdit";
import AssignmentAdditional from "@contents/Assignment/AssignmentAdditional";
import SecondCarAssignManualCreate from "@contents/Assignment/AssignManualCreate/SecondCarManualCreate";
import SecondDriverAssignManualCreate from "@contents/Assignment/AssignManualCreate/SecondDriverManualCreate";

// ----- variables stateless ----- //
export type I_FirstDrawer =
  | "autoAssign"
  | "manualAssign"
  | "editCar"
  | "editDriver"
  | "additionalCar"
  | "additionalDriver"
  | "";

interface Props {
  firstDrawerOpen: I_FirstDrawer;
  setFirstDrawerOpen: (v: I_FirstDrawer) => void;
  orderInfo: I_ManualAssignType[];
  refetch: any;
  setDisabledAutoList: any;
  editData: any;
}

const defaultAssignData = {
  quote_no: "",
  manual_driver: [],
  manual_bus: []
};

// ----- React component ----- //
function AssignmentDrawers({
  firstDrawerOpen,
  setFirstDrawerOpen,
  refetch,
  orderInfo,
  setDisabledAutoList,
  editData
}: Props) {
  const [secondDrawerOpen, setSecondDrawerOpen] = React.useState<string>("");
  const [secondDrawerInfo, setSecondDrawerInfo] = React.useState<any>();
  const [createAssignData, setCreateAssignData] =
    React.useState<I_ManualCreateType>(defaultAssignData);
  const [orderIndex, setOrderIndex] = React.useState<number>(1);

  // console.log("2️⃣secondDrawerInfo", secondDrawerInfo);
  // console.log("5️⃣createAssignData", createAssignData);
  // console.log("7️⃣orderIndex", orderIndex);

  // ----- function ----- //
  const handleAssign = (
    type: "manual_bus" | "manual_driver",
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    const updatedData = { ...createAssignData };
    const updatedSingleAssign = {
      ...updatedData[type][orderIndex],
      [e.target.name]: e.target.value,
      bus_day_number: secondDrawerInfo.car
    };

    updatedData[type][orderIndex] = updatedSingleAssign;
    updatedData["quote_no"] = orderInfo[0].quote_no;
    setCreateAssignData(updatedData);
  };

  // ----- render ----- //
  const firstDrawerList = new Map([
    [
      "autoAssign",
      {
        tabName: "設定排程",
        conponent: (
          <AssignAutoCreate
            orderInfo={orderInfo}
            setDisabledAutoList={setDisabledAutoList}
            refetch={refetch}
            setFirstDrawerOpen={setFirstDrawerOpen}
          />
        )
      }
    ],
    [
      "manualAssign",
      {
        tabName: "手動派單",
        conponent: (
          <AssignManualCreate
            refetch={refetch}
            secondDrawerOpen={secondDrawerOpen}
            setSecondDrawerOpen={setSecondDrawerOpen}
            orderInfo={orderInfo}
            secondDrawerInfo={secondDrawerInfo}
            setSecondDrawerInfo={setSecondDrawerInfo}
            createAssignData={createAssignData}
            setOrderIndex={setOrderIndex}
          />
        )
      }
    ],
    [
      "editCar",
      {
        tabName: "編輯派車",
        conponent: <CarEdit editData={editData} refetch={refetch} />
      }
    ],
    [
      "editDriver",
      {
        tabName: "編輯派工",
        conponent: <DriverEdit editData={editData} refetch={refetch} />
      }
    ],
    [
      "additionalCar",
      {
        tabName: "新增派車",
        conponent: (
          <AssignmentAdditional
            type="car"
            orderInfo={orderInfo}
            refetch={refetch}
          />
        )
      }
    ],
    [
      "additionalDriver",
      {
        tabName: "新增派工",
        conponent: (
          <AssignmentAdditional
            type="driver"
            orderInfo={orderInfo}
            refetch={refetch}
          />
        )
      }
    ]
  ]);
  return (
    <>
      <Drawer
        tabName={[firstDrawerList.get(firstDrawerOpen)?.tabName || "--"]}
        closeDrawer={
          !secondDrawerOpen ? setFirstDrawerOpen.bind(null, "") : undefined
        }
      >
        {firstDrawerList.get(firstDrawerOpen)?.conponent || <Spinner />}
      </Drawer>
      {firstDrawerOpen === "manualAssign" && secondDrawerOpen !== "" && (
        <Drawer
          isTabShown={false}
          closeDrawer={setSecondDrawerOpen.bind(null, "")}
        >
          {/* //TODO: don't unmount them, just hide  */}
          {secondDrawerOpen === "派車" && (
            <SecondCarAssignManualCreate
              createAssignData={createAssignData}
              secondDrawerInfo={secondDrawerInfo}
              handleAssign={handleAssign.bind(null, "manual_bus")}
            />
          )}
          {secondDrawerOpen === "派工" && (
            <SecondDriverAssignManualCreate
              createAssignData={createAssignData}
              secondDrawerInfo={secondDrawerInfo}
              handleAssign={handleAssign.bind(null, "manual_driver")}
            />
          )}
        </Drawer>
      )}
    </>
  );
}

export default AssignmentDrawers;
