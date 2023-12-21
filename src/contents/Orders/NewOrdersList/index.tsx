import { useRouter } from "next/router";
import { OrdersListSTY } from "./style";

import Table from "@components/Table/Table";
import { I_PageInfo } from "@components/PaginationField";
import Checkbox from "@components/CheckBox";
import IconBtn from "@components/Button/IconBtn";
import { I_OrdersItem } from "@services/driver/getAllOrders";
import PaginationField from "@components/PaginationField";

interface Props {
  orderData: any;
  pageInfo: I_PageInfo;
  handlePageChange?: (pageQuery: I_PageInfo) => void;
}

function OrdersList({ orderData, pageInfo }: Props) {
  const ordersTitle = [
    <Checkbox key={"order"} />,
    "訂單編號",
    "分類",
    "用車日期",
    "訂單狀態",
    "負責業務",
    ""
  ];
  const router = useRouter();

  const handleView = (id: string) => {
    router.push(`/orders/detail/${id}?editPage=view`);
  };

  const changeKey = (data: Array<I_OrdersItem>) => {
    return data.map((item: I_OrdersItem) => {
      return {
        id: item["order_no"],
        checkbox: <Checkbox value={item["order_no"]} />,
        order_no: item["order_no"],
        order_type: item["order_type"],
        order_date: item["order_date"],
        order_status: item["order_status"],
        order_sales: item["order_sales"],
        action: <IconBtn tip="編輯" type="edit" onClick={handleEdit} />
      };
    });
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const modifiedData = orderData ? changeKey(orderData) : undefined;

  return (
    <OrdersListSTY>
      <Table
        titles={ordersTitle}
        data={modifiedData}
        onView={handleView}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </OrdersListSTY>
  );
}

export default OrdersList;
