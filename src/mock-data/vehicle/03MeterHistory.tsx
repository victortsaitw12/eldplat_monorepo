import Image from "next/image";

import { TagSTY, ImageSTY } from "@components/Table/style";

// ExpnseList dummy data
export const EXPENSE_lIST_TITLES = [
  "Vehicle",
  "Meter Date",
  "Meter Value",
  "Meter Type",
  "Void",
  "Source"
];

export const EXPENSE_lIST_DATA = [
  {
    id: 0,
    vehicle: (
      <>
        <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    Value: "56.491 mi",
    type: "Toyota",
    Void: "",
    source: "Manually Entered"
  },
  {
    id: 1,
    vehicle: (
      <>
        <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    Value: "56.491 mi",
    type: "Toyota",
    Void: "",
    source: "Manually Entered"
  },
  {
    id: 2,
    vehicle: (
      <>
        <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    Value: "56.491 mi",
    type: "Toyota",
    Void: "",
    source: "Manually Entered"
  },
  {
    id: 3,
    vehicle: (
      <>
        <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    Value: "56.491 mi",
    type: "Toyota",
    Void: "",
    source: "Manually Entered"
  }
];

export const MOCK_DATA = [
  {
    id: 0,
    Vehicle: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
        <TagSTY>Sample</TagSTY>
      </>
    ),
    Source: "Inspection #31016420"
  }
];
