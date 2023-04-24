import Image from "next/image";

import { ImageSTY } from "@components/Table/style";

export const MOCK_DATA = [
  {
    id: 0,
    Vehicle: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    Date: "02/14/2023 08:23",
    Odometer: (
      <>
        56.362 mi
        <br />
        129 mi ago
      </>
    ),
    Vendor: "",
    "Fuel Type": "",
    "Fuel Card": "NO",
    Reference: "",
    "Previous Entry": "02/12/2023 00:44"
  }
];

export const MOCK_CARD_DATA = [
  {
    title: "Volume",
    number: "19.133",
    unit: "gallons (US)",
    upsAndDownse: "up",
    flux: "▲ 0.53 (2.9%)"
  },
  {
    title: "Fuel Price",
    number: "$2.4190",
    unit: "/ gallon",
    upsAndDownse: "down",
    flux: "▼ $0.13 (5.1%)"
  },
  {
    title: "Total",
    number: "$46.23",
    unit: "",
    upsAndDownse: "down",
    flux: "▼ $1.17 (2.5%)"
  },
  {
    title: "Usage",
    number: "257.0",
    unit: "miles",
    upsAndDownse: "down",
    flux: "▲ 11.29 (4.6%)"
  },
  {
    title: "Fuel Economy",
    number: "13.45",
    unit: "MPG (US)",
    upsAndDownse: "down",
    flux: "▲ 0.172 (1.3%)"
  },
  {
    title: "Cost",
    number: "$0.18",
    unit: "/ mile",
    upsAndDownse: "down",
    flux: "▲ $0.01 (5.3%)"
  }
];
