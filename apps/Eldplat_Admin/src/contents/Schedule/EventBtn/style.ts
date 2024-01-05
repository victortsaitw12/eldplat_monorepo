import styled from "styled-components";
import { ThemeType } from "@styles/theme";

export const BtnSTY = styled.button<{ color: keyof ThemeType["color"] }>`
  /* define an index signature on theme object type to allow indexing with any string value*/
  background-color: ${({ theme, color }) => theme.color[color] || "unset"};
  color: ${({ theme }) => theme.color.N0};
  border: none;
  border-radius: 5px;
  padding: 6px 6px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  svg {
    width: 12px;
    height: auto;
  }
  span {
    /* overflow: hidden; */
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left: 2px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0;
    &.empty {
      color: ${({ theme }) => theme.color.N60};
    }
  }
`;
