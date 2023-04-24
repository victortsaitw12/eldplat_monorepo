import Image from "next/image";

import { ImageSTY } from "@components/Table/style";

// ExpnseList dummy data
export const EXPENSE_lIST_TITLES = [
  "Vehicle",
  "Date",
  "Vendor",
  "Meter Entry",
  "Usage",
  "Volume",
  "Total",
  "Fuel Economy",
  "Cost per Meter",
  "Alerts"
];

export const EXPENSE_lIST_DATA = [
  {
    id: 0,
    vehicle: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "Tue Feb 14,2023 08:23",
    Vendor: null,
    MeterEntry: "56.362 mi",
    Usage: (
      <>
        257.0
        <br />
        miles
      </>
    ),
    Volume: (
      <>
        19.113
        <br />
        gallons
      </>
    ),
    Total: (
      <>
        $46.23
        <br />
        $2.42 / gallon
      </>
    ),
    FuelEconomy: (
      <>
        13.45
        <br />
        MPG (US)
      </>
    ),
    CostPerMeter: (
      <>
        0.18
        <br />/ mile
      </>
    ),
    Alerts: null
  },
  {
    id: 1,
    vehicle: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    Vendor: null,
    MeterEntry: "56.491 mi",
    Usage: "Toyota",
    Volume: "",
    Total: "Manually Entered",
    FuelEconomy: "",
    CostPerMeter: "",
    Alerts: ""
  },
  {
    id: 2,
    vehicle: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    Vendor: null,
    MeterEntry: "56.491 mi",
    Usage: "Toyota",
    Volume: "",
    Total: "Manually Entered",
    FuelEconomy: "",
    CostPerMeter: "",
    Alerts: ""
  },
  {
    id: 3,
    vehicle: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    date: "08/06/2022",
    Vendor: null,
    MeterEntry: "56.491 mi",
    Usage: "Toyota",
    Volume: "",
    Total: "Manually Entered",
    FuelEconomy: "",
    CostPerMeter: "",
    Alerts: ""
  }
];
