import React from "react";
import cx from "classnames";
import { BodySTY } from "./style";
import { Checkbox } from "evergreen-ui";

interface I_Props {
  checked: boolean;
  label: string;
  description?: string;
  children?: React.ReactNode;
}

const CheckBoxWrapper = ({
  checked,
  label,
  description = "免費提供。每車提供一箱，總共有x杯。",
  children
}: I_Props) => {
  return (
    <BodySTY className="checkbox_wrapper">
      <div className="checkbox_content">
        <Checkbox checked={checked} />
        {label && <span className="checkbox_label">{label}</span>}
      </div>
      {description && <div className="checkbox_description">{description}</div>}
      {children && <div className="checkbox_children">{children}</div>}
    </BodySTY>
  );
};

export default CheckBoxWrapper;
