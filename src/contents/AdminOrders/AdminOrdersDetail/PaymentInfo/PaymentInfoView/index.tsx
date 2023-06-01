import React from "react";
import { Pane } from "evergreen-ui";

import VerticalDetail from "@components/VerticalDetail";

const PaymentInfoView = () => {
    return (
        <Pane style={{ padding: "20px", display: "flex", gap: "191px" }}>
            <VerticalDetail
                title="全額支付"
                items={[
                    {
                        label: "2023-05-01 前繳款"
                    }
                ]}
            />
            <VerticalDetail
                title="NT$2,200 含稅"
                items={[{}]}
            />
        </Pane>
    );
};
export default PaymentInfoView;