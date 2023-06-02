import React from "react";
import { Pane, Text, Button } from "evergreen-ui";
import { BodySTY } from "./style";
import DetailList from "@components/DetailList";
import LabelButton from "@components/Button/Primary/Label"

const PriceInfoView = () => {
    return (
        <BodySTY>
            <Pane>
                <LabelButton className="submit_btn" text="送出報價" />
                <Pane className="total_price">
                    <Text>
                        總金額
                    </Text>
                    <Text>
                        NT$2,200
                    </Text>
                </Pane>
                <Text>2023-05-01 前繳款</Text>
                <hr />
            </Pane>
            <Pane className="price_detail">
                <DetailList
                    listArray={[
                        {
                            title: "基本車資",
                            value: "NT$1,200",
                        },
                        {
                            title: "小費",
                            value: "NT$200",
                        },
                        {
                            title: "旺季加價",
                            value: "NT$300",
                        },
                        {
                            title: "夜間加價",
                            value: "NT$200",
                        },
                        {
                            title: "偏遠地區加價",
                            value: "NT$300",
                        },
                        {
                            title: "攜帶寵物",
                            value: "NT$1000",
                        },
                        {
                            title: "杯水",
                            value: "NT$0",
                        },
                        {
                            title: "瓶裝水",
                            value: "NT$120",
                        }
                    ]}
                />
            </Pane>
        </BodySTY>
    );
};
export default PriceInfoView;