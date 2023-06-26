import React from "react";
import { Pane, Button, DocumentShareIcon, Paragraph, Text } from "evergreen-ui";
import { DivSTY } from "./style";

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
import PrimaryRadius from "@components/Button/PrimaryRadius";

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
  // ----- function ----- //

  const handleUpdate = React.useCallback((data: I_ReplaceAssignment) => {
    console.log("handleUpdate");
    try {
      updateReplaceAssignment(data);
    } catch (e) {}
  }, []);
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
        createAssignData={createAssignData}
        handleAssignmentCarChange={handleAssignmentCarChange}
        timeRef={timeRef}
        orderInfo={orderInfo}
      />
      <PrimaryRadius appearance="primary" onClick={handleUpdate}>
        確定
      </PrimaryRadius>
    </DivSTY>
  );
};

export default AssignmentAdditionalVehicle;
