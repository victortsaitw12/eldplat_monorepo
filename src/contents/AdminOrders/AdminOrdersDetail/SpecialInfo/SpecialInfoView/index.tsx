import React from "react";
import { Pane } from "evergreen-ui";

import DetailList from "@components/DetailList";
import { BodySTY } from "./style";
interface I_Porps {
    data: Array<{
        title: React.ReactNode | string;
        value: React.ReactNode | string
    }>
}
const SpecialInfoView = ({ data }: I_Porps) => {
    return (
        <BodySTY>
            <Pane className="special_content" style={{ padding: "20px" }}>
                <DetailList
                    listArray={data}
                />
            </Pane>
        </BodySTY>
    );
};
export default SpecialInfoView;