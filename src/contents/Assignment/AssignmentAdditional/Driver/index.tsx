import React from "react";
import { Pane, Button, DocumentShareIcon, Paragraph, Text } from "evergreen-ui";
import { DivSTY } from "./style";

import {
  I_ManualAssignType,
  I_ManualCreateType
} from "@typings/assignment_type";
import { convertDateAndTimeFormat } from "@utils/convertDate";
import DriverForm from "@contents/Assignment/AssignmentAdditional/Driver/DriverForm";

interface I_AssignmentAdditionalDriverProps {
  orderInfo: I_ManualAssignType[];
  createAssignData: I_ManualCreateType;
}

const AssignmentAdditionalDriver = ({
  orderInfo,
  createAssignData
}: I_AssignmentAdditionalDriverProps) => {
  const [loading, setLoading] = React.useState(false);

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
      <DriverForm
        orderInfo={orderInfo}
        createAssignData={createAssignData}
        setLoading={setLoading}
      />
    </DivSTY>
  );
};

export default AssignmentAdditionalDriver;
