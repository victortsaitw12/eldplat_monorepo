import React from "react";
import { Textarea } from "evergreen-ui";
import { BodySTY } from "./style";
interface I_Item {
    label?: string;
    value?: string;
}
interface I_Props {
    title?: string;
    items?: I_Item[];
}

const VerticalDetail = ({
    title = "乘客數量",
    items = [
        { label: "成人", value: "2" },
        { label: "老人", value: "2" },
        { label: "小人", value: "2" }
    ]
}: I_Props) => {
    return (
        <BodySTY className="v_detail">
            {title && <div className="v_detail_title">{title}</div>}
            <ul className="v_detail_list">
                {items && items.length > 0 ? items.map((child, i) => <li className="v_detail_item" key={child.value + "-" + i}>
                    <span>{child.label}</span>
                    <span>{child.value}</span>
                </li>) : <li>no data...</li>}
            </ul>
        </BodySTY>
    )
}

export default VerticalDetail;