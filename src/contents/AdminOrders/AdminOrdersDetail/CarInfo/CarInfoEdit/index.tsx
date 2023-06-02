import React from "react";
import { Pane, Select, Option, Text } from "evergreen-ui";
import DetailList from "@components/DetailList";

const CarInfoEdit = () => {
    return (
        <Pane style={{ padding: "20px", display: "flex", gap: "191px" }}>
            <Pane style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                <Pane style={{ display: "flex", gap: "20px" }}>
                    <Text style={{ minWidth: "115px" }}>用車目的</Text>
                    <Select style={{ width: "270px" }}>
                        <option value="travel">旅遊</option>
                    </Select>
                </Pane>
                <Pane style={{ display: "flex", gap: "20px" }}>
                    <Text style={{ minWidth: "115px" }}>訂車注意事項</Text>
                    <Text>客戶同意</Text>
                </Pane>
            </Pane>
        </Pane>
    );
};
export default CarInfoEdit;