import Image from "next/image";
import { TagSTY, ImageSTY, AvatarSTY } from "@components/Table/style";

export const MOCK_List_TITLES = [
  "Asset Name",
  "Asset Record Type",
  "Issue",
  "Summary",
  "Issue Status",
  "Source",
  "Reported Date",
  "Assigned",
  "Labels",
  "Watchers"
];

export const MOCK_List_DATA = [
  {
    id: "0",
    asset: (
      <>
        <ImageSTY status="warning">
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        <a href="">1100 [2018 Toyota Prius]</a>
      </>
    ),
    recordType: "Vehicle",
    issue: (
      <>
        #2
        <TagSTY>Sample</TagSTY>
      </>
    ),
    summary: "Oil leak",
    status: (
      <TagSTY backgroundColor="#ffb020" color="#fff">
        Open
      </TagSTY>
    ),
    source: null,
    reportDate: <a href="#">02/07/2023</a>,
    assigned: null,
    labels: null,
    watcher: null
  },
  {
    id: "1",
    asset: (
      <>
        <ImageSTY status="warning">
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    recordType: "Vehicle",
    issue: (
      <>
        #2
        <TagSTY>Sample</TagSTY>
      </>
    ),
    summary: "Oil leak",
    status: (
      <TagSTY backgroundColor="#ffb020" color="#fff">
        Open
      </TagSTY>
    ),
    source: null,
    reportDate: <a href="#">02/07/2023</a>,
    assigned: null,
    labels: null,
    watcher: null
  },
  {
    id: "2",
    asset: (
      <>
        <ImageSTY status="success">
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    recordType: "Vehicle",
    issue: (
      <>
        #4
        <TagSTY>Sample</TagSTY>
      </>
    ),
    summary: "Oil leak",
    status: (
      <TagSTY backgroundColor="#ffb020" color="#fff">
        Open
      </TagSTY>
    ),
    source: null,
    reportDate: <a href="#">02/07/2023</a>,
    assigned: null,
    labels: null,
    watcher: null
  },
  {
    id: "3",
    asset: (
      <>
        <ImageSTY status="warning">
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </ImageSTY>
        1100 [2018 Toyota Prius]
      </>
    ),
    recordType: "Vehicle",
    issue: (
      <>
        #2
        <TagSTY>Sample</TagSTY>
      </>
    ),
    summary: "Oil leak",
    status: (
      <TagSTY backgroundColor="#ffb020" color="#fff">
        Open
      </TagSTY>
    ),
    source: null,
    reportDate: <a href="#">02/07/2023</a>,
    assigned: null,
    labels: null,
    watcher: null
  }
];

export const MOCK_DETAIL_DATA = {
  issue: "2",
  status: (
    <TagSTY backgroundColor="#ffb020" color="#fff">
      Open
    </TagSTY>
  ),
  summary: "Oil leak",
  description: "Leaking from bottom of engine",
  vehicle: (
    <>
      <ImageSTY status="success">
        <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
      </ImageSTY>
      1100 [2018 Toyota Prius]
    </>
  ),
  reportDate: <a href="#">02/07/2023</a>,
  reportedBy: (
    <>
      <a href="">
        <AvatarSTY>
          <Image width="50" height="50" src="/images/avatar1.jpg" alt="test" />
        </AvatarSTY>
      </a>
      <a href="">Eddie Wei</a>
    </>
  ),
  odometer: "136.531 mi",
  source: null,
  assigned: null,
  dueDate: null
};

export const MOCK_DETAIL_TITLES = [
  "Issue #",
  "Status",
  "Summary",
  "Description",
  "Vehicle",
  "Reported Date",
  "Reported By",
  "Odometer",
  "Source",
  "Assigned To",
  "Due Date"
];
