import Image from "next/image";
import { TagSTY, ImageSTY } from "@components/Table/style";

export const MOCK_TITLES = [
  "Vehicle",
  "Issued At",
  "Summary",
  "Status",
  "Issue",
  "Manufacturer Campaign Number",
  "NHTSA Campaign Number"
];

export const MOCK_DATA = [
  {
    id: "0",
    vehicle: (
      <>
        <ImageSTY status="success">
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    issuedAt: <a href="">09/05/2018</a>,
    // TODO 待調整 Eclipse
    summary: <a href="">Toyota motor engineering & manufacturing (toyota)…</a>,
    status: (
      <TagSTY backgroundColor="#d14343" color="#fff">
        Needs Action
      </TagSTY>
    ),
    issue: null,
    manufacturerNum: "JOT",
    nhtsaNum: <a href="">18V579000</a>
  },
  {
    id: "1",
    vehicle: (
      <>
        <ImageSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    issuedAt: <a href="">09/05/2018</a>,
    // TODO 待調整 Eclipse
    summary: <a href="">Toyota motor engineering & manufacturing (toyota)…</a>,
    status: (
      <TagSTY backgroundColor="#d14343" color="#fff">
        Needs Action
      </TagSTY>
    ),
    issue: null,
    manufacturerNum: "JOT",
    nhtsaNum: <a href="">18V579000</a>
  },
  {
    id: "2",
    vehicle: (
      <>
        <ImageSTY status="warning">
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    issuedAt: <a href="">09/05/2018</a>,
    // TODO 待調整 Eclipse
    summary: <a href="">Toyota motor engineering & manufacturing (toyota)…</a>,
    status: (
      <TagSTY backgroundColor="#d14343" color="#fff">
        Needs Action
      </TagSTY>
    ),
    issue: null,
    manufacturerNum: "JOT",
    nhtsaNum: <a href="">18V579000</a>
  },
  {
    id: "3",
    vehicle: (
      <>
        <ImageSTY status="error">
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    issuedAt: <a href="">09/05/2018</a>,
    // TODO 待調整 Eclipse
    summary: <a href="">Toyota motor engineering & manufacturing (toyota)…</a>,
    status: (
      <TagSTY backgroundColor="#d14343" color="#fff">
        Needs Action
      </TagSTY>
    ),
    issue: null,
    manufacturerNum: "JOT",
    nhtsaNum: <a href="">18V579000</a>
  }
];
