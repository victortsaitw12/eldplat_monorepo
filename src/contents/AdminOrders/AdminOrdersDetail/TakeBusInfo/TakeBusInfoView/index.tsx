import React from "react";
import { Pane } from "evergreen-ui";

import VerticalDetail from "@components/VerticalDetail";

const TakeBusInfoView = () => {
    return (
        <Pane style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <VerticalDetail
                title="乘客數量"
                items={[
                    {
                        label: "成人",
                        value: "2"
                    },
                    {
                        label: "兒童",
                        value: "1"
                    },
                    {
                        label: "嬰兒",
                        value: "1"
                    }
                ]}
            />
            <VerticalDetail
                title="行李件數"
                items={[
                    {
                        label: "托運行李 (21吋以上)",
                        value: "2"
                    },
                    {
                        label: "手提行李（20吋以下）",
                        value: "1"
                    }
                ]}
            />
            <VerticalDetail
                title="車型及數量"
                items={[
                    {
                        label: "車款名稱（21-25人）",
                        value: "1"
                    },
                    {
                        label: "車款名稱（28-34人）",
                        value: "1"
                    }
                ]}
            />
        </Pane>
    );
};
export default TakeBusInfoView;