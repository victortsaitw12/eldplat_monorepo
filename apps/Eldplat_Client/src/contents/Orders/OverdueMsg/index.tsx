import React from "react";
import { InlineAlert } from "evergreen-ui";
import { DivSTY } from "./style";
import { I_Order } from "@services/client/getOrdersList";
import { I_OrderDetail } from "@services/client/getQuotation";

const OverdueMsg = ({ data }: { data: I_OrderDetail | I_Order }) => {
  const renderBtn = (statusList: any[]) => {
    // 3: 有逾期狀況{name: '訂金逾期', status: 'error', date: '06/20/2023 00:00:00'}
    if (statusList.filter((item) => item.status === "error").length !== 0)
      return (
        <DivSTY className="overdueMsg">
          <InlineAlert intent="danger" className="inlineAlert">
            繳費期限已截止，未成功完成訂車作業。若仍想要訂車， 請聯繫客服。
          </InlineAlert>
        </DivSTY>
      );
  };

  return (
    <>
      {renderBtn(data.status_list)}
    </>
  );
};

export default OverdueMsg;
