// not use now
import { StylesConfig } from "react-select";
import { ColourOption } from "../data";
import styled from "styled-components";
const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",
  ":before": {
    backgroundColor: color,
    borderRadius: 6,
    content: "' '",
    display: "block",
    marginRight: 8,
    height: 6,
    width: 6
  }
});
export const colourStyles: StylesConfig<ColourOption> = {
  control: (baseStyles, { isDisabled, isFocused }) => ({
    ...baseStyles,
    border: isDisabled
      ? "none"
      : isFocused
      ? "1px solid #679DEF"
      : "1px solid #AFC3DA",
    backgroundColor: isDisabled ? "transparent" : "white",
    boxShadow: isFocused ? "0 0 0 2px #D6E0FF" : "none",
    width: "120px"
  }),
  indicatorsContainer: (baseStyles, { isDisabled }) => ({
    ...baseStyles,
    display: isDisabled ? "none" : "block"
  }),
  option: (baseStyles, { data }) => {
    return {
      ...baseStyles,
      ...dot(data.color)
    };
  },
  input: (baseStyles) => ({ ...baseStyles, ...dot() }),
  singleValue: (baseStyles, { data, isDisabled }) => ({
    ...baseStyles,
    color: isDisabled ? "#567190" : "#718BAA",
    ...dot(data.color)
  })
};

export const BodySYT = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .title {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    width: 160px;
    gap: 4px;
    color: ${({ theme }) => theme.color.N800};
    .required {
      color: ${({ theme }) => theme.color.R400};
    }
  }
`;
