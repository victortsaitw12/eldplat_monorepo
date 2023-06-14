import React from "react";
import { Pane, Text } from "evergreen-ui";
import { useFormContext } from "react-hook-form";

import VerticalDetail from "@components/VerticalDetail";
import Collapse from "@components/Collapse";
import CounterInput from "@components/CounterInput";
import { BodySTY } from "./style";

const TakeBusInfoEdit = () => {
    const { register, control } = useFormContext();

    return (
        <BodySTY>
            <Pane style={{ padding: "20px" }}>
                <Pane style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
                    <Pane style={{ flex: "1" }}>
                        <VerticalDetail
                            title="乘客數量"
                            items={[
                                {
                                    label: "",
                                    value: <CounterInput register={register} inpurName="counter-01" label="成人" />
                                },
                                {
                                    label: "",
                                    value: <CounterInput register={register} inpurName="counter-02" label="兒童 (2~4歲)" />
                                },
                                {
                                    label: "",
                                    value: <CounterInput register={register} inpurName="counter-02" label="嬰兒 (0~1歲)" />
                                }
                            ]}
                        />
                    </Pane>
                    <Pane style={{ flex: "1" }}>
                        <VerticalDetail
                            title="行李件數"
                            items={[
                                {
                                    label: "",
                                    value: <CounterInput register={register} inpurName="counter-01" label="托運行李 (21吋以上)" />
                                },
                                {
                                    label: "",
                                    value: <CounterInput register={register} inpurName="counter-02" label="手提行李 (20吋以下)" />
                                }
                            ]}
                        />
                    </Pane>
                </Pane>
                <Text className="bus_amount_title">車型及數量</Text>
                <Pane className="bus_amount">
                    <Collapse
                        title="大型巴士 (28~43人)"
                    >
                        <Pane style={{ padding: "20px 0" }}>
                            <VerticalDetail
                                title=""
                                items={[
                                    {
                                        label: "",
                                        value: <CounterInput register={register} inpurName="counter-01" label="托運行李 (21吋以上)" />
                                    },
                                    {
                                        label: "",
                                        value: <CounterInput register={register} inpurName="counter-02" label="手提行李 (20吋以下)" />
                                    }
                                ]}
                            />
                        </Pane>
                    </Collapse>
                    <Collapse
                        title="中型巴士 (10~25人)"
                    >
                        <Pane style={{ padding: "20px 0" }}>
                            <VerticalDetail
                                title=""
                                items={[
                                    {
                                        label: "",
                                        value: <CounterInput register={register} inpurName="counter-01" label="托運行李 (21吋以上)" />
                                    },
                                    {
                                        label: "",
                                        value: <CounterInput register={register} inpurName="counter-02" label="手提行李 (20吋以下)" />
                                    }
                                ]}
                            />
                        </Pane>
                    </Collapse>
                    <Collapse
                        title="小車 (9人以下)"
                    >
                        <Pane style={{ padding: "20px 0" }}>
                            <VerticalDetail
                                title=""
                                items={[
                                    {
                                        label: "",
                                        value: <CounterInput register={register} inpurName="counter-01" label="托運行李 (21吋以上)" />
                                    },
                                    {
                                        label: "",
                                        value: <CounterInput register={register} inpurName="counter-02" label="手提行李 (20吋以下)" />
                                    }
                                ]}
                            />
                        </Pane>
                    </Collapse>
                </Pane>
            </Pane>
        </BodySTY>
    );
};
export default TakeBusInfoEdit;