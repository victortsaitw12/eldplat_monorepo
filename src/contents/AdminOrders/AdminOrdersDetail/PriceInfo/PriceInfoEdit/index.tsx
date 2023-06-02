import React from "react";
import { Pane, Text, TextInput } from "evergreen-ui";
import { BodySTY } from "./style";

interface I_Props {
    status: string;
    priceList: [
        {
            label: string;
            name: string;
        }
    ]
}

const PriceInfoEdit = ({ status, priceList }: I_Props) => {
    return (
        <BodySTY>
            <Pane>
                <Pane className="total_price">
                    <Text>
                        總金額
                    </Text>
                    <Text>
                        NT$
                        <TextInput />
                    </Text>
                </Pane>
                <Text>2023-05-01 前繳款</Text>
                <hr />
            </Pane>
            <Pane className="price_detail">
                {priceList.map((child, i) => {
                    return (
                        <Pane key={child.name + "-" + i}>
                            <Text>{child.label}</Text>
                            <Pane>
                                <Text>NT$</Text>
                                <TextInput name={child.name} />
                            </Pane>
                        </Pane>
                    )
                })}
            </Pane>
        </BodySTY>
    );
};
export default PriceInfoEdit;