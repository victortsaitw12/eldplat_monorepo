import styled from "styled-components";
import { ThemeType } from "@styles/theme";

export const EventBarsSTY = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 3;
  width: 100%;
  position: absolute;
`;

export const EventBarSTY = styled.div<{
  duration: number;
  color: keyof ThemeType["color"] | null;
  cellWidth: number;
  left: number;
}>`
  min-width: ${({ cellWidth }) => cellWidth + "px"};
  width: ${({ duration, cellWidth }) => duration * cellWidth + "px"};
  position: absolute;
  left: ${({ left, cellWidth }) => left * cellWidth + "px"};
  display: flex;
  button {
    max-width: 100%;
    flex-grow: 10;
    background: ${({ theme, color }) => (color ? theme.color[color] : "unset")};
    color: ${({ theme }) => theme.color.N0};
    border: none;
    border-radius: 4px;

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

    z-index: 1;

    .text-wrapper {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    svg {
      width: 12px;
      min-width: 12px;
      height: 12px;
      fill: ${({ theme }) => theme.color.N0};
    }
    span {
      /* overflow: hidden; */
      white-space: nowrap;
      text-overflow: ellipsis;
      /* max-width: calc(100% - 20px); */
      /* padding: 0 4px; */
      &:last-child {
        flex: 2;
        text-align: left;
      }
    }
    /* span {
      vertical-align: middle;
      line-height: normal;
      &:not(.text-wrapper) {
        min-width: fit-content;
      }
    } */
  }
  .reminder {
    animation: 200ms ease-out 200ms infinite alternate reminder;
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
