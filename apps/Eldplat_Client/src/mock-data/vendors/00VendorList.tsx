import { TagSTY, MultipleTxtSTY } from "@components/Table/style";

export const MOCK_LIST_TITLES = [
  "名稱",
  "區域",
  "電話",
  "網址",
  "聯絡人",
  "聯絡信箱",
  "標籤",
  "評分",
  "瀏覽量"
];
export const MOCK_LIST_DATA = [
  {
    id: "0",
    name: (
      <>
        Chevron <TagSTY>Sample</TagSTY>
      </>
    ),
    address: (
      <MultipleTxtSTY>
        <div>4340 Fulton Industrial Blvd SW</div>
        <div>Atlanta, GA 30336, US</div>
      </MultipleTxtSTY>
    ),
    phone: <a href="">404-691-4875</a>,
    website: <a href="http://www.mavistire.com">http://www.mavistire.com</a>,
    contactName: "Jose Valdespino",
    contactEmail: null,
    labels: null,
    Rating: <p>DELETE STARRATE, PLEASE CHECK THE PAGE AGAIN</p>,
    watchers: null
  },
  {
    id: "1",
    name: (
      <>
        Chevron <TagSTY>Sample</TagSTY>
      </>
    ),
    address: (
      <MultipleTxtSTY>
        <div>4340 Fulton Industrial Blvd SW</div>
        <div>Atlanta, GA 30336, US</div>
      </MultipleTxtSTY>
    ),
    phone: <a href="">404-691-4875</a>,
    website: <a href="http://www.mavistire.com">http://www.mavistire.com</a>,
    contactName: "Jose Valdespino",
    contactEmail: null,
    labels: null,
    Rating: <p>DELETE STARRATE, PLEASE CHECK THE PAGE AGAIN</p>,
    watchers: null
  },
  {
    id: "2",
    name: (
      <>
        Chevron <TagSTY>Sample</TagSTY>
      </>
    ),
    address: (
      <MultipleTxtSTY>
        <div>4340 Fulton Industrial Blvd SW</div>
        <div>Atlanta, GA 30336, US</div>
      </MultipleTxtSTY>
    ),
    phone: <a href="">404-691-4875</a>,
    website: <a href="http://www.mavistire.com">http://www.mavistire.com</a>,
    contactName: "Jose Valdespino",
    contactEmail: null,
    labels: null,
    Rating: null,
    watchers: null
  },
  {
    id: "3",
    name: (
      <>
        Chevron <TagSTY>Sample</TagSTY>
      </>
    ),
    address: (
      <MultipleTxtSTY>
        <div>4340 Fulton Industrial Blvd SW</div>
        <div>Atlanta, GA 30336, US</div>
      </MultipleTxtSTY>
    ),
    phone: <a href="">404-691-4875</a>,
    website: <a href="http://www.mavistire.com">http://www.mavistire.com</a>,
    contactName: "Jose Valdespino",
    contactEmail: null,
    labels: null,
    Rating: <p>DELETE STARRATE, PLEASE CHECK THE PAGE AGAIN</p>,
    watchers: null
  }
];
