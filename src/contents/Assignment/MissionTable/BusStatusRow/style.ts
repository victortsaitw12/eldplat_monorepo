import styled from "styled-components";
import { ThemeType } from "@styles/theme";

export const RowSTY = styled.div`
  border-radius: 4px;
  padding: 15px 0;
  display: flex;
  flex-wrap: nowrap;
  background: ${({ theme }) => theme.color.B100};
  margin: 15px 12px 10px 12px;
  div {
    flex: 0 0 25%;
    text-align: center;
    p {
      display: inline-block;
      font-size: 14px;
      color: ${({ theme }) => theme.color.N200};
      padding-right: 6px;
      font-weight: 400;
    }
    span {
      font-size: 16px;
      color: ${({ theme }) => theme.color.B400};
      font-weight: 600;
    }
  }
`;
