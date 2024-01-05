import React from "react";
import { Textarea } from "evergreen-ui";
import { BodySTY } from "./style";
interface I_Item {
  label?: React.ReactNode | string;
  value?: React.ReactNode | string;
}
interface I_Props {
  style?: React.CSSProperties;
  title?: string;
  items?: I_Item[];
}

const VerticalDetail = ({
  style,
  title = "乘客數量",
  items = [
    { label: "成人", value: "2" },
    { label: "老人", value: "2" },
    { label: "小人", value: "2" }
  ]
}: I_Props) => {
  return (
    <BodySTY style={style} className="v_detail">
      {title && <div className="v_detail_title">{title}</div>}
      <ul className="v_detail_list">
        {items && items.length > 0 ? (
          items.map((child, i) => (
            <li className="v_detail_item" key={child.value + "-" + i}>
              {child.label && <span>{child.label}</span>}
              {child.value && <span>{child.value}</span>}
            </li>
          ))
        ) : (
          <li>--</li>
        )}
      </ul>
    </BodySTY>
  );
};

export default VerticalDetail;
