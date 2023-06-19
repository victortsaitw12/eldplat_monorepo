import React from "react";
import { Pane } from "evergreen-ui";
import { DivSTY } from "./style";

import Collapse from "@components/Collapse";
import { I_OrderDetail } from "@services/client/getQuotation";
import DetailItem from "@components/DetailList/DetailItem";

const PaymentMethod = ({ data }: { data: I_OrderDetail }) => {
  return (
    <DivSTY>
      <Pane style={{ borderRadius: "10px", overflow: "hidden" }}>
        <Collapse title="付款方式" opened>
          {data.isfullpay ? (
            <DetailItem
              title="全額支付"
              value={`NT$${data.quote_total_amount}`}
            />
          ) : (
            <>
              <DetailItem title="預付訂金" value={`NT$${data.deposit}`} />
              <DetailItem title="尾款支付" value={`NT$${data.final_payment}`} />
            </>
          )}
        </Collapse>
      </Pane>
    </DivSTY>
  );
};

export default PaymentMethod;
