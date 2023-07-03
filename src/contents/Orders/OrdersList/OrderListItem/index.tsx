import ProgressList from "@components/ProgressList";

import { BodySTY } from "./style";
import { mappingProgressInfo } from "@services/client/mappingQuotationData";
import PaymentBtn from "./PaymentBtn";

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
      {/* <PaymentBtn data={itemData} setData={setData} /> */}
    </BodySTY>
  );
};

export default OrderListItem;
