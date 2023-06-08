import { StylesConfig } from "react-select";
import styled from "styled-components";
export const selectStyles: StylesConfig = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "transparent" : "white",
      cursor: isDisabled ? "not-allowed" : "pointer"
    };
  },
  multiValue: (styles, { isDisabled }) => {
    return {
      ...styles,
      cursor: isDisabled ? "not-allowed" : "pointer",
      backgroundColor: isDisabled ? "transparent" : "#E2EDFF",
      height: "24px",
      borderRadius: "8px",
      color: "#1952A8",
      display: "inline-flex",
      alignItems: "center"
    };
  },
  multiValueRemove: (styles, { isDisabled, isFocused }) => {
    return {
      ...styles,
      ":hover": {
        backgroundColor: isDisabled ? "transparent" : "#E2EDFF"
      }
    };
  }
};

export const BodySTY = styled.div`
  width: auto;
`;
