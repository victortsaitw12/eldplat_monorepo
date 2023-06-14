import React from "react";
import { Pane } from "evergreen-ui";
import VerticalDetail from "@components/VerticalDetail";
import DetailList from "@components/DetailList";
interface I_Props {
    listArray: any
};
const CarInfoView = ({ listArray }: I_Props) => {
    return (
        <Pane style={{ padding: "20px" }}>
            <DetailList
                listArray={listArray}
            />
        </Pane>
    );
};
export default CarInfoView;