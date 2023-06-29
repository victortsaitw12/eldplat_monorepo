import React from "react";
import { Pane, Button, DocumentShareIcon, Paragraph, Text } from "evergreen-ui";
import { DivSTY } from "./style";

import { useAssignmentStore } from "@contexts/filter/assignmentStore";
import {
  I_ManualAssignType,
  I_ManualCreateType
} from "@typings/assignment_type";
import {
  updateReplaceAssignment,
  I_ReplaceAssignment
} from "@services/assignment/updateReplaceAssignment";
import { convertDateAndTimeFormat } from "@utils/convertDate";
import VehicleForm from "@contents/Assignment/AssignmentAdditional/Vehicle/VehicleForm";

interface I_AssignmentAdditionalVehicleProps {
  orderInfo: I_ManualAssignType[];
  createAssignData: I_ManualCreateType;
  handleAssignmentCarChange: (e: any) => void;
  timeRef: any;
}

const AssignmentAdditionalVehicle = ({
  orderInfo,
  createAssignData,
  handleAssignmentCarChange,
  timeRef
}: I_AssignmentAdditionalVehicleProps) => {
  const [loading, setLoading] = React.useState(false);
  const { isDrawerOpen, setDrawerOpen, setDrawerType, drawerType } =
    useAssignmentStore();
  // ----- function ----- //
  const asyncSubmitForm = async (data: any) => {
    console.log("replace assignment:", data);
    // setLoading(true);
    try {
      const res = await updateReplaceAssignment(data);
      setDrawerOpen(false);
    } catch (e: any) {
      console.log(e);
      // alert(e.message);
    }

    // setLoading(false);
  };

  return (
    <DivSTY>
      <Pane display="flex" justifyContent="center">
        <Button iconBefore={DocumentShareIcon} marginRight={12}>
          車輛分配
        </Button>
        <Button iconBefore={DocumentShareIcon}>駕駛排班</Button>
      </Pane>
      <Pane className="info-box">
        <Paragraph>{orderInfo && orderInfo[0].quote_no}</Paragraph>
        <Paragraph>{orderInfo && orderInfo[0].quote_type}</Paragraph>
        <Pane className="date-area">
          <Text>
            {orderInfo && convertDateAndTimeFormat(orderInfo[0].departure_date)}
          </Text>
          <Text marginX={26}>—</Text>
          <Text>
            {orderInfo && convertDateAndTimeFormat(orderInfo[0].return_date)}
          </Text>
        </Pane>
      </Pane>{" "}
      <VehicleForm
        orderInfo={orderInfo}
        createAssignData={createAssignData}
        handleAssignmentCarChange={handleAssignmentCarChange}
        timeRef={timeRef}
        setLoading={setLoading}
      />
    </DivSTY>
  );
};

export default AssignmentAdditionalVehicle;
