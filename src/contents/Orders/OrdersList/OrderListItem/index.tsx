import ProgressList from "@components/ProgressList";
import { STATUS_CODE } from "@services/getDDL";
import { BodySTY } from "./style";
import { mappingProgressInfo } from "@services/client/mappingQuotationData";
// function renderDataList(list: any) {
//   return list.map((item: any) => ({
//     label: STATUS_CODE[item.status_code].label,
//     status: "ok", // "ok" | "pending" | "error",
//     date: item.upddate
//   }));
// }

const OrderListItem = ({ itemData }: { itemData: any }) => {
  const progressInfo = mappingProgressInfo(itemData.status_list);
  return (
    <BodySTY>
      <div className="info-content">
        <div className="content_item">
          <h4>乘車日期</h4>
          <div>{itemData.date?.split(" ")[0]}</div>
        </div>
        <div className="content_item">
          <h4>詢價編號</h4>
          <div>{itemData.quote_no}</div>
        </div>
        {/* <DetailItem title="乘車日期" value={itemData.date?.split(" ")[0]} />
        <DetailItem title="詢價編號" value={itemData.quote_no} /> */}
      </div>
      <div className="info-progress">
        <ProgressList dataLists={progressInfo} />
      </div>
    </BodySTY>
  );
};

export default OrderListItem;
