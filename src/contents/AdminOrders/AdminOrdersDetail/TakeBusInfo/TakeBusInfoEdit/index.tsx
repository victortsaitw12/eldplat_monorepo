import React from "react";
import { Pane } from "evergreen-ui";
import { useFormContext } from "react-hook-form";

import VerticalDetail from "@components/VerticalDetail";
import CounterInput from "@components/CounterInput";

const TakeBusInfoEdit = () => {
    const { register, control } = useFormContext();

    return (
        <Pane style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "30px" }}>
            <VerticalDetail
                title="乘客數量"
                items={[
                    {
                        label: "",
                        value: <CounterInput register={register} inpurName="counter" label="成人" />
                    }
                ]}
            />
        </Pane>
    );
};
export default TakeBusInfoEdit;