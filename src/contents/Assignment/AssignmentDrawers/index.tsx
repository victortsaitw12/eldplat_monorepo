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

interface Props {
  firstDrawerOpen: string;
  // "autoAssign"|"manualAssign"| "editCar"| "editDriver"| "additionalCar" | "additionalDriver" | ""
  setFirstDrawerOpen: (v: string) => void;
  secondDrawerOpen: string;
  setSecondDrawerOpen: (v: string) => void;
  orderInfo: I_ManualAssignType[];
  assignData: any;
  refetch: any;
  setDisabledAutoAssign: any;
  showSecondTitle: any;
  setShowSecondTitle: (t: any) => void;
  setPosition: (dayNum: number, carNum: number) => void;
  createAssignData: I_ManualCreateType;
  orderIndex?: number;
  editData: any;
  handleAssignmentCarChange: (e: any) => void;
  timeRef: any;
  handleAssignmentDriverChange: (e: any) => void;
}

function AssignmentDrawers({
  firstDrawerOpen,
  setFirstDrawerOpen,
  secondDrawerOpen,
  setSecondDrawerOpen,
  orderInfo,
  assignData,
  refetch,
  setDisabledAutoAssign,
  showSecondTitle,
  setShowSecondTitle,
  setPosition,
  createAssignData,
  orderIndex,
  editData,
  handleAssignmentCarChange,
  timeRef,
  handleAssignmentDriverChange
}: Props) {
  const firstDrawerList = new Map([
    [
      "autoAssign",
      {
        tabName: "設定排程",
        conponent: (
          <AssignAutoCreate
            orderInfo={orderInfo}
            setDisabledAutoAssign={setDisabledAutoAssign}
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
            assignData={assignData}
            refetch={refetch}
            secondDrawerOpen={secondDrawerOpen}
            setSecondDrawerOpen={setSecondDrawerOpen}
            orderInfo={orderInfo}
            showSecondTitle={showSecondTitle}
            setShowSecondTitle={setShowSecondTitle}
            setPosition={setPosition}
            createAssignData={createAssignData}
            orderIndex={orderIndex}
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
          !secondDrawerOpen ? () => setFirstDrawerOpen("") : undefined
        }
      >
        {firstDrawerList.get(firstDrawerOpen)?.conponent || <Spinner />}
      </Drawer>
      {secondDrawerOpen === "派車" && (
        <Drawer
          isTabShown={false}
          closeDrawer={() => {
            setSecondDrawerOpen("");
          }}
        >
          <SecondCarAssignManualCreate
            createAssignData={createAssignData}
            showSecondTitle={showSecondTitle}
            handleAssignmentCarChange={handleAssignmentCarChange}
            timeRef={timeRef}
          ></SecondCarAssignManualCreate>
        </Drawer>
      )}
      {secondDrawerOpen === "派工" && (
        <Drawer
          isTabShown={false}
          closeDrawer={() => {
            setSecondDrawerOpen("");
          }}
        >
          <SecondDriverAssignManualCreate
            createAssignData={createAssignData}
            showSecondTitle={showSecondTitle}
            handleAssignmentDriverChange={handleAssignmentDriverChange}
          ></SecondDriverAssignManualCreate>
        </Drawer>
      )}
    </>
  );
}

export default AssignmentDrawers;