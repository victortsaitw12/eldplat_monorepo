import React from "react";
import { Pane } from "evergreen-ui";
import DetailList from "@components/DetailList";

const PassengerInfoView = ({ data }: any) => {
    return (
        <Pane style={{ padding: "20px" }}>
            <DetailList
                listArray={data}
            />
        </Pane>
    );
};
export default PassengerInfoView;