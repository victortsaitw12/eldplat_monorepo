// not use now
import { StylesConfig } from "react-select";
import { ColourOption } from "./data";
const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",
  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: "' '",
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10
  }
});
export const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? "#d9d9d9"
        : undefined,
      color: isDisabled ? "#ccc" : isSelected ? "white" : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : "#d9d9d9"
          : undefined
      }
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
};
