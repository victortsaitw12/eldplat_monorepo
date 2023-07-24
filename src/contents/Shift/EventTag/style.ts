import styled from "styled-components";
import { ThemeType } from "@styles/theme";

export const BtnSTY = styled.button<{ color: keyof ThemeType["color"] }>`
  /* define an index signature on theme object type to allow indexing with any string value*/
  background-color: ${({ theme, color }) => theme.color[color] || "unset"};
  color: ${({ theme }) => theme.color.N0};
  border: none;
  border-radius: 5px;

  padding: 4px 8px;
  margin-right: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 4px;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100% - 20px);
    padding: 0 4px;
  }
`;
