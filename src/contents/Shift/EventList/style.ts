import styled from "styled-components";
import { ThemeType } from "@styles/theme";

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
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.Heading200};
    font-size: ${({ theme }) => theme.fontSize.Heading200};
    /* line-height: 16px; */
    color: ${({ theme }) => theme.color.N0};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 4px;
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.N0};
    padding: 4px 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    svg {
      width: 12px;
      min-width: 12px;
      height: 12px;
      fill: ${({ theme }) => theme.color.N0};
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
