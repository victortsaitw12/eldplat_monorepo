import Image from "next/image";

import {
  ImageSTY,
  StatusSTY,
  MultipleTxtSTY,
  AvatarSTY,
  TagSTY
} from "@components/Table/style";

// EquipmentList dummy data
export const EQUIPMENT_lIST_TITLES = [
  "Name",
  "Type",
  "Brand",
  "Modal",
  "Serial Number",
  "Group",
  "Status",
  "Current Assignee",
  "Labels",
  "Linked Vehicle",
  "Vehicle Operator",
  "In-Service Date",
  "Estimated Service Life in Months",
  "Estimated Resale Value",
  "Out-of-Service Date",
  "Open Issues"
];

export const EQUIPMENT_lIST_DATA = [
  {
    Name: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        測試
      </>
    ),
    Type: "Mower",
    Brand: "測試Brand",
    Modal: "Modal",
    "Serial Number": "Serial Number",
    Group: "Atlanta",
    Status: <StatusSTY status="success">In-Service</StatusSTY>,
    "Current Assignee": (
      <>
        <AvatarSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </AvatarSTY>
        Carlos Garcia
      </>
    ),
    Labels: "",
    "Linked Vehicle": (
      <>
        <ImageSTY status="pending">
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        Carlos Garcia
      </>
    ),
    "Vehicle Operator": (
      <>
        <AvatarSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </AvatarSTY>
        Carlos Garcia
      </>
    ),
    "In-Service Date": "02/22/2023",
    "Estimated Service Life in Months": "1",
    "Estimated Resale Value": "$1,000.00",
    "Out-of-Service Date": "02/23/2023",
    "Open Issues": ""
  }
];

// =========================================================
export const EQUIPMENT_ASSIGNMENT_HISTORY_TITLE = [
  "Assignee",
  "Started",
  "Ended",
  "Duration",
  "Started By",
  "Ended By"
];

export const EQUIPMENT_ASSIGNMENT_HISTORY_DATA = [
  {
    Assignee: (
      <>
        <AvatarSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </AvatarSTY>
        jason chen
        <TagSTY backgroundColor="lightblue" color="blue">
          comment
        </TagSTY>
      </>
    ),
    Started: "02/22/2023 11:59",
    Ended: "",
    Duration: "3h 10m",
    "Started By": (
      <>
        <AvatarSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </AvatarSTY>
        jason chen
      </>
    ),
    "Ended By": ""
  }
];

// =========================================================

export const EQUIPMENT_LINKED_VEHICLE_HISTORY_TITLE = [
  "Linked Vehicle",
  "Started",
  "Ended",
  "Duration",
  "Started By",
  "Ended By"
];

export const EQUIPMENT_LINKED_VEHICLE_HISTORY_DATA = [
  {
    "Linked Vehicle": (
      <>
        <AvatarSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </AvatarSTY>
        jason chen
        <TagSTY backgroundColor="lightblue" color="blue">
          comment
        </TagSTY>
      </>
    ),
    Started: "02/22/2023 11:59",
    Ended: "",
    Duration: "3h 10m",
    "Started By": (
      <>
        <AvatarSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </AvatarSTY>
        jason chen
      </>
    ),
    "Ended By": ""
  }
];

// =========================================================

export const EQUIPMENT_ISSUES_TITLE = [
  "Issues",
  "Summary",
  "Issue Status",
  "Reported Date",
  "Assigned",
  "Labels",
  "Watchers"
];
// =========================================================

export const EQUIPMENT__OVERVIEW_TITLE = "Details";

export const EQUIPMENT__OVERVIEW_DATA = {
  Name: "測試",
  "Linked Vehicle": (
    <>
      <ImageSTY status="pending">
        <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
      </ImageSTY>
      <MultipleTxtSTY>
        <a>1100</a>
        <div>Assigned to jacob Silva</div>
      </MultipleTxtSTY>
    </>
  ),
  Brand: "測試brand",
  Model: "Model",
  "Serial Number": "Serial Number",
  Type: "Mower",
  Group: (
    <MultipleTxtSTY>
      <div>Atlanta</div>
      <div>USA / Southeast Region</div>
    </MultipleTxtSTY>
  ),
  Status: <StatusSTY status="success">In-Service</StatusSTY>,
  "Purchase Vendor": "",
  "Purchase Price": "$1,000.00",
  "Purchase Date": "02/22/2023",
  "Estimated Service Life": "1 months",
  "Estimated Resale Life": "$1,000.00",
  "Out-of-Service Date": "02/202023"
};
