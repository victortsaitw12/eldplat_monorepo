import Image from "next/image";

import {
  TagSTY,
  ImageSTY,
  StatusSTY,
  AvatarSTY,
  MultipleTxtSTY
} from "@components/Table/style";

export const MOCK_TITLES = [
  "Contact",
  "Renewal Type",
  "Status",
  "Due Date",
  "Watchers"
];

// 先 map 成要塞入的格式
export const MOCK_DATA = [
  {
    id: 0,
    Concact: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        <a href="">Carlos Garcia</a>
      </>
    ),
    RenewalType: "License Renewal",
    Status: <StatusSTY status="error">Overdue</StatusSTY>,
    DueDate: (
      <MultipleTxtSTY status="error">
        <div>02/13/2023</div>
        <div>1week ago</div>
      </MultipleTxtSTY>
    ),
    Watchers: null
  },
  {
    id: 1,
    Concact: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        <a href="">Andy Miller</a>
      </>
    ),
    RenewalType: "Certification",
    Status: <StatusSTY status="warning">Due Soon</StatusSTY>,
    DueDate: (
      <MultipleTxtSTY status="warning">
        <div>03/04/2023</div>
        <div>1week from now</div>
      </MultipleTxtSTY>
    ),
    Watchers: null
  },
  {
    id: 2,
    Concact: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        <a href="">Jacob Silver</a>
      </>
    ),
    RenewalType: "License Renewal",
    Status: <StatusSTY>Upcoming</StatusSTY>,
    DueDate: (
      <MultipleTxtSTY>
        <div>12/14/2023</div>
        <div>10 months from now</div>
      </MultipleTxtSTY>
    ),
    Watchers: null
  }
];

export const MOCK_CERTIFICATIONDATA = {
  Concact: (
    <>
      <ImageSTY>
        <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
      </ImageSTY>
      <a href="">Andy Miller</a>
    </>
  ),
  "Renewal Type": "Certification",
  Status: <StatusSTY status="warning">Due Soon</StatusSTY>,
  "Due Date": (
    <MultipleTxtSTY status="warning">
      <div>03/04/2023</div>
      <div>1 weeks from now</div>
    </MultipleTxtSTY>
  ),
  "Due Soon Threshold": "3 weeks",
  Notifications: <StatusSTY status="success">Acctive</StatusSTY>
};
