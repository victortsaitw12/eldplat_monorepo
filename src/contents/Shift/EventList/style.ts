import styled from "styled-components";
import { ThemeType } from "@styles/theme";

// MonthyView 內單格 Events
export const EventListSTY = styled.div<{
  maxEventCount?: number;
}>`
  ${({ theme }) => `
    --minBtnHeight: ${"calc(" + theme.fontSize.Heading200 + " + 4px * 2)"}};
  `}
  min-height: min-content;
  max-height: calc(100% - var(--minBtnHeight) * 2);
  display: flex;
  flex-direction: column;
  gap: 4px;
  .hide {
    display: none;
  }
`;

// TODO 整合 EventBar(DailyView) vs EventBtn(MonthlyView)
// MonthyView 個別 Event事件按鈕
export const EventBtnSTY = styled.div<{
  duration: number;
  color?: keyof ThemeType["color"] | "N300";
}>`
  min-height: var(--minBtnHeight);
  min-width: 100%;
  button {
    height: 100%;
    width: ${({ duration }) =>
      "calc(" + duration * 100 + "% + " + (duration - 1) * 17 + "px)"};
    background: ${({ theme, color }) =>
      color && theme.color[color] ? theme.color[color] : "unset"};
    color: ${({ theme }) => theme.color.N0};
    border: none;
    border-radius: 4px;

    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.Heading200};
    font-size: ${({ theme }) => theme.fontSize.Heading200};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px 8px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 4px;
    cursor: pointer;

    svg {
      width: 12px;
      min-width: 12px;
      height: 12px;
      fill: ${({ theme }) => theme.color.N0};
    }
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      /* max-width: calc(100% - 20px); */
      /* padding: 0 4px; */
      &:last-child {
        flex: 2;
        text-align: left;
      }
    }
  }
  .reminder {
    animation: 200ms ease-out 200ms infinite alternate reminder;
    /* animation-delay: 200ms;
    animation-timing-function: ease-out;
    animation-duration: 200msr; */
  }

  @keyframes reminder {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.6;
    }
  }
`;
