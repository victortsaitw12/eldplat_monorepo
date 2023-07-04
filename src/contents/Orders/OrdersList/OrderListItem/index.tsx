import ProgressList from "@components/ProgressList";

import { BodySTY } from "./style";
import { mappingProgressInfo } from "@services/client/mappingQuotationData";
import PaymentBtn from "@contents/orders/PaymentBtn";

const OrderListItem = ({ itemData }: { itemData: any }) => {
  const progressInfo = mappingProgressInfo(itemData.status_list);

  const handlePaymentClick = (e) => {
    console.log("🍅🍅🍅 clicked");
    e.stopPropagation();
  };
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
      </div>
      <div className="info-progress">
        <ProgressList dataLists={progressInfo} />
      </div>
      <PaymentBtn data={itemData} setData={(e) => handlePaymentClick(e)} />
    </BodySTY>
  );
};

export default OrderListItem;
