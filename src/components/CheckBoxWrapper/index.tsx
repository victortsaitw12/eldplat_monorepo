import React from "react";
import { BodySTY } from "./style";
import { Checkbox } from "evergreen-ui";
import { Control, Controller } from "react-hook-form";

interface I_Props {
  control: Control<any>;
  inputName: string;
  label: string;
  description?: string;
  children?: React.ReactNode;
}

const CheckBoxWrapper = ({
  label,
  control,
  inputName,
  description = "免費提供。每車提供一箱，總共有x杯。",
  children
}: I_Props) => {
  return (
    <Controller
      control={control}
      name={inputName}
      render={({ field: { onChange, value } }) => (
        <BodySTY className="checkbox_wrapper">
          <div className="checkbox_content">
            <Checkbox
              checked={value == "1"}
              onChange={(e) => {
                if (e.target.checked) {
                  onChange("1");
                } else {
                  onChange("0");
                }
              }}
            />
            {label && <span className="checkbox_label">{label}</span>}
          </div>
          {description && (
            <div className="checkbox_description">{description}</div>
          )}
          {children && (
            <div className={`checkbox_children ${value !== "1" ? "hide" : ""}`}>
              <fieldset disabled={value === "0"}>{children}</fieldset>
            </div>
          )}
        </BodySTY>
      )}
    />
  );
};

export default CheckBoxWrapper;
