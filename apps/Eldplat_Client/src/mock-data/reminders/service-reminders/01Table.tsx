import Image from "next/image";
import { ImageSTY, StatusSTY } from "@components/Table/style";

import { NextDuoSTY } from "src/features/reminders/service-reminders/style";

export const MOCK_TITLES = [
  "Vehicle",
  "Service Task",
  "Status",
  "Next Due",
  "Last Completed",
  "Compliance",
  "Watchers"
];

export const MOCK_DATA = [
  {
    id: "0",
    statusBar: "success",
    vehicle: (
      <>
        <ImageSTY status="success">
          <Image
            width="50"
            height="50"
            src="/images/car-sample/car1.jpg"
            alt="test"
          />
        </ImageSTY>
        <span>4100 [2012 Freightliner Cascadia]</span>
      </>
    ),
    svTask: (
      <div className="sv-wrap">
        <a className="sv-name" href="https://google.com">
          Brake Inspection
        </a>
        <span className="sv-time">Every 3 month(s)</span>
      </div>
    ),
    svStatus: <StatusSTY status="success">Success</StatusSTY>,
    nextDuo: (
      <NextDuoSTY status="warning" className="next-duo">
        6 days from now
      </NextDuoSTY>
    ),
    lastCompleted: null,
    compliance: "100%",
    watchers: null
  },
  {
    id: "1",
    statusBar: "error",
    vehicle: (
      <>
        <ImageSTY status="warning">
          <Image
            width="50"
            height="50"
            src="/images/car-sample/car2.jpg"
            alt="test"
          />
        </ImageSTY>
        <span>1100 [2018 Toyota Prius]</span>
      </>
    ),
    svTask: (
      <div className="sv-wrap">
        <a className="sv-name" href="https://google.com">
          Brake Inspection
        </a>
        <span className="sv-time">Every 3 month(s)</span>
      </div>
    ),
    svStatus: <StatusSTY status="error">Overdue</StatusSTY>,
    nextDuo: (
      <div className="next-duo">
        <NextDuoSTY className="next-duo-date">6 days from now</NextDuoSTY>
        <NextDuoSTY status="error" className="next-duo-work">
          467 miles remaining
        </NextDuoSTY>
      </div>
    ),
    lastCompleted: (
      <a className="last-completed-date" href="https://google.com">
        12/04/2022
      </a>
    ),
    compliance: "0%",
    watchers: null
  },
  {
    id: "2",
    statusBar: "warning",
    vehicle: (
      <>
        <ImageSTY status="error">
          <Image
            width="50"
            height="50"
            src="/images/car-sample/car3.jpg"
            alt="test"
          />
        </ImageSTY>
        <span>1100 [2018 Toyota Prius]</span>
      </>
    ),
    svTask: (
      <div className="sv-wrap">
        <a className="sv-name" href="https://google.com">
          Brake Inspection
        </a>
        <span className="sv-time">Every 3 month(s)</span>
      </div>
    ),
    svStatus: <StatusSTY status="warning">Due Soon</StatusSTY>,
    nextDuo: (
      <div className="next-duo">
        <NextDuoSTY status="warning" className="next-duo-date">
          6 days from now
        </NextDuoSTY>
        <NextDuoSTY status="warning" className="next-duo-work">
          467 miles remaining
        </NextDuoSTY>
      </div>
    ),
    lastCompleted: null,
    compliance: "0%",
    watchers: null
  },
  {
    id: "3",
    vehicle: (
      <>
        <ImageSTY status="pending">
          <Image
            width="50"
            height="50"
            src="/images/car-sample/car4.jpg"
            alt="test"
          />
        </ImageSTY>
        <span>3100 [2014 Chevrolet Express Cargo]</span>
      </>
    ),
    svTask: (
      <div className="sv-wrap">
        <a className="sv-name" href="https://google.com">
          Brake Inspection
        </a>
        <span className="sv-time">Every 3 month(s)</span>
      </div>
    ),
    svStatus: <StatusSTY>Upcoming</StatusSTY>,
    nextDuo: (
      <div className="next-duo">
        <NextDuoSTY className="next-duo-date">7 days from now</NextDuoSTY>
      </div>
    ),
    lastCompleted: (
      <a className="last-completed-date" href="https://google.com">
        12/04/2022
      </a>
    ),
    compliance: "50%",
    watchers: null
  }
];
