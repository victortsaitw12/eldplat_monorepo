import Image from "next/image";

import {
  TagSTY,
  ImageSTY,
  StatusSTY,
  AvatarSTY
} from "@components/Table/style";

export const MOCK_TITLES = [
  "Name",
  "Year",
  "Make",
  "Model",
  "VIN",
  "Status",
  "Type",
  "Group",
  "Current Meter",
  "License Plate",
  "Watchers",
  "Operator"
];

// 先 map 成要塞入的格式
export const MOCK_DATA = [
  {
    id: 0,
    name: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
        <TagSTY>Sample</TagSTY>
      </>
    ),
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JKDLJLSKLFJKJLSJDLFKJLDKS",
    status: <StatusSTY status="success">Active</StatusSTY>,
    type: "Car",
    group: "Management",
    meter: <a href="">20811 m</a>,
    license: "6Gd55E44",
    watchers: null,
    operator: (
      <>
        <a href="">
          <AvatarSTY>
            <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
          </AvatarSTY>
        </a>
        <a href="">Eddie Wei</a>
      </>
    )
  },
  {
    id: 1,
    name: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
        <TagSTY>Sample</TagSTY>
      </>
    ),
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JKDLJLSKLFJKJLSJDLFKJLDKS",
    status: <StatusSTY status="warning">In Shop</StatusSTY>,
    type: "Car",
    group: "Management",
    meter: <a href="">20811 m</a>,
    license: "6Gd55E44",
    watchers: <a href="">2 watchers</a>,
    operator: "Unassigned"
  },
  {
    id: 2,
    name: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
        <TagSTY>Sample</TagSTY>
      </>
    ),
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JKDLJLSKLFJKJLSJDLFKJLDKS",
    status: <StatusSTY status="pending">Inactive</StatusSTY>,
    type: "Car",
    group: "Management",
    meter: <a href="">20811 m</a>,
    license: "6Gd55E44",
    watchers: <a href="">1 watcher</a>,
    operator: (
      <>
        <a href="">
          <AvatarSTY>
            <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
          </AvatarSTY>
        </a>
        <a href="">Eddie Wei</a>
      </>
    )
  },
  {
    id: 3,
    name: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    year: "2018",
    make: "Toyota",
    model: "Prius",
    vin: "JKDLJLSKLFJKJLSJDLFKJLDKS",
    status: <StatusSTY status="error">Out of Service</StatusSTY>,
    type: "Car",
    group: "Management",
    meter: <a href="">20811 m</a>,
    license: null,
    watchers: null,
    operator: (
      <>
        <a href="">
          <AvatarSTY>
            <Image width="50" height="50" src="/image/avatar1.jpg" alt="test" />
          </AvatarSTY>
        </a>
        <a href="">Eddie Wei</a>
      </>
    )
  }
];
