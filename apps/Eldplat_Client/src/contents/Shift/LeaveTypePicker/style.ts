import styled from "styled-components";
import { ThemeType } from "@styles/theme";

export const LeaveTypePickerSTY = styled.div<{
  color: keyof ThemeType["color"];
}>`
  .leaveReminder {
    padding-inline-start: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    svg {
      fill: ${({ theme, color }) => theme.color[color] || "unset"};
    }
  }
  .selectPlaceholder {
    color: ${({ theme }) => theme.color.N300};
  }
`;
