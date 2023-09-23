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
  secondDrawerOpen: string;
  setSecondDrawerOpen: (v: string) => void;
  orderInfo: I_ManualAssignType[];
  assignData: any;
  refetch: any;
  setDisabledAutoList: any;
  showSecondTitle: any;
  setShowSecondTitle: (t: any) => void;
  setPosition: (dayNum: number, carNum: number) => void;
  createAssignData: I_ManualCreateType;
  orderIndex?: number;
  editData: any;
  handleAssignmentCarChange: (e: any) => void;
  handleAssignmentDriverChange: (e: any) => void;
}

function AssignmentDrawers({
  firstDrawerOpen,
  setFirstDrawerOpen,
  secondDrawerOpen,
  setSecondDrawerOpen,
  assignData,
  refetch,
  orderInfo,
  setDisabledAutoList,
  showSecondTitle,
  setShowSecondTitle,
  setPosition,
  createAssignData,
  orderIndex,
  editData,
  handleAssignmentCarChange,
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
          {secondDrawerOpen === "派車" && (
            <SecondCarAssignManualCreate
              createAssignData={createAssignData}
              showSecondTitle={showSecondTitle}
              handleAssignmentCarChange={handleAssignmentCarChange}
            />
          )}
          {secondDrawerOpen === "派工" && (
            <SecondDriverAssignManualCreate
              createAssignData={createAssignData}
              showSecondTitle={showSecondTitle}
              handleAssignmentDriverChange={handleAssignmentDriverChange}
            />
          )}
        </Drawer>
      )}
    </>
  );
}

export default AssignmentDrawers;
