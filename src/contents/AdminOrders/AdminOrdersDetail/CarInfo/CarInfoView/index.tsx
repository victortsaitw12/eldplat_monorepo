import React from "react";
import { Pane } from "evergreen-ui";
import VerticalDetail from "@components/VerticalDetail";
import DetailList from "@components/DetailList";

const CarInfoView = () => {
    return (
        <Pane style={{ padding: "20px" }}>
            <DetailList
                listArray={[
                    {
                        title: "用車目的",
                        value: "旅遊"
                    },
                    {
                        title: "訂車注意事項",
                        value: "客戶同意"
                    }
                ]}
            />
        </Pane>
    );
};
export default CarInfoView;