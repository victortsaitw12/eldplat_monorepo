import styled from "styled-components";
import { ThemeType } from "@styles/theme";

export const TagSTY = styled.div<{
  color: keyof ThemeType["color"];
  background: keyof ThemeType["color"];
}>`
  background: ${({ theme, background }) => theme.color[background] || "unset"};
  padding: 5px 5px 0 5px;
  text-align: start;
  .font_order {
    font-size: 12px;
    color: ${({ theme, color }) => theme.color[color] || "unset"};
    font-weight: 600px;
    padding-bottom: 5px;
  }
  .font_title {
    font-size: 14px;
    color: ${({ theme }) => theme.color.N500};
    padding-bottom: 5px;
  }
  .font_subtitle {
    font-size: 12px;
    color: ${({ theme }) => theme.color.N200};
    padding-bottom: 5px;
  }
`;
