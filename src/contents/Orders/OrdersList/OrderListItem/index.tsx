import dayjs from "dayjs";
import ProgressList from "@components/ProgressList";

import { BodySTY } from "./style";
import { mappingProgressInfo } from "@services/client/mappingQuotationData";
import { getOrdersList, I_Order } from "@services/client/getOrdersList";
import PaymentBtn from "@contents/Orders/PaymentBtn";

const OrderListItem = ({
  itemData,
  setData
}: {
  itemData: any;
  setData: (v: any) => void;
}) => {
  const progressInfo = mappingProgressInfo(itemData.status_list);
  const handlePaymentClick = (e: any) => {
    const fetchData = async () => {
      try {
        const queryRes = await getOrdersList(1);
        const quoteRes = await getOrdersList(2);
        const orderRes = await getOrdersList(3);
        const finishRes = await getOrdersList(4);
        setData({
          query: queryRes,
          quote: quoteRes,
          order: orderRes,
          finish: finishRes
        });
      } catch (e) {
        console.log("出現錯誤");
      }
    };
    fetchData();
    e.stopPropagation();
  };
  return (
    <BodySTY className="orderListItem">
      <div className="info-content">
        <div className="content_item">
          <h4>乘車日期</h4>
          <div>
            {itemData.date
              ? dayjs(itemData.date?.split(" ")[0]).format("YYYY/MM/DD")
              : "--"}
          </div>
        </div>
        <div className="content_item">
          <h4>詢價編號</h4>
          <div>{itemData.quote_no}</div>
        </div>
      </div>
      <div className="info-progress">
        <ProgressList dataLists={progressInfo} />
      </div>
      {itemData.status_list[1].status !== "pending" &&
        itemData.status_list[3].status === "pending" && (
          <PaymentBtn data={itemData} setData={(e) => handlePaymentClick(e)} />
        )}{" "}
    </BodySTY>
  );
};

export default OrderListItem;
