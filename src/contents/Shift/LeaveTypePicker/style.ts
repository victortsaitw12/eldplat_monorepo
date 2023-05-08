import styled from "styled-components";

export const LeaveTypePickerSTY = styled.div<{ color: string }>`
  .leaveReminder {
    padding-inline-start: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    svg {
      fill: ${({ theme, color }) => theme.color[color]};
    }
  }
  .selectPlaceholder {
    color: ${({ theme }) => theme.color.N300};
  }
`;
