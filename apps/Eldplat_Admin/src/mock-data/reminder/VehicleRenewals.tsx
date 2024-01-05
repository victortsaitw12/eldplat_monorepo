import Image from "next/image";

import { ImageSTY, StatusSTY, MultipleTxtSTY } from "@components/Table/style";

// VehicleReminderList dummy data
export const VEHICLERENEWALS_lIST_TITLES = [
  "Vehicle",
  "Renewal Type",
  "Status",
  "Due Date",
  "Watchers"
];

export const VEHICLERENEWALS_lIST_DATA = [
  {
    id: 0,
    vehicle: (
      <>
        <ImageSTY status="error">
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    renewalType: "Emission Test",
    status: <StatusSTY status="error">Overdue</StatusSTY>,
    dueDate: (
      <MultipleTxtSTY status="error">
        <div>02/03/2023</div>
        <div>3 weeks ago</div>
      </MultipleTxtSTY>
    ),
    watchers: ""
  },
  {
    id: 1,
    vehicle: (
      <>
        <ImageSTY status="pending">
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    renewalType: "Emission Test",
    status: <StatusSTY>Upcoming</StatusSTY>,
    dueDate: (
      <MultipleTxtSTY>
        <div>02/03/2023</div>
        <div>1 weeks from now</div>
      </MultipleTxtSTY>
    ),
    watchers: ""
  },
  {
    id: 2,
    vehicle: (
      <>
        <ImageSTY status="warning">
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    renewalType: "Emission Test",
    status: <StatusSTY status="warning">Due soon</StatusSTY>,
    dueDate: (
      <MultipleTxtSTY status="warning">
        <div>02/03/2023</div>
        <div>10 months from now</div>
      </MultipleTxtSTY>
    ),
    watchers: ""
  },
  {
    id: 3,
    vehicle: (
      <>
        <ImageSTY status="success">
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    renewalType: "Emission Test",
    status: <StatusSTY status="warning">Due soon</StatusSTY>,
    dueDate: (
      <MultipleTxtSTY status="warning">
        <div>02/03/2023</div>
        <div>10 months from now</div>
      </MultipleTxtSTY>
    ),
    watchers: ""
  }
];

// =========================================================

//  VehicleReminderListDetail dummy data
export const VEHICLERENEWALS_DETAIL_TITLE = "Details";

export const VEHICLERENEWALS_DETAIL_DATA = {
  Contact: (
    <ImageSTY>
      <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
    </ImageSTY>
  ),
  "Renewal Type": "Certification",
  status: <StatusSTY status="warning">Warning</StatusSTY>,
  "Due Date": (
    <MultipleTxtSTY status="warning">
      <div>02/03/2023</div>
      <div>1 weeks from now</div>
    </MultipleTxtSTY>
  ),
  "Due Soon Threshold": "3 weeks",
  Notification: <StatusSTY status="success">Active</StatusSTY>
};

// ==========================================================

//  AddVehicleReminder dummy data
export const ADD_VEHICLERENEWALS_SELECT = [
  {
    label: "Vehicle",
    options: [
      {
        label: "Annual Inspection Fees",
        value: 1359141
      },
      {
        label: "Depreciation",
        value: 1359135
      }
    ]
  },
  {
    label: "Vehicle Renewal Type",
    options: [
      {
        label: "Annual Inspection Fees",
        value: 1359141
      }
    ],
    disabled: true
  }
];
