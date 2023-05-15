import styled from "styled-components";

export const EventBarsSTY = styled.div<{ duration?: number; color?: string }>`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 3;
  width: 100%;
  position: absolute;
  /* .event {
    height: 24px;
    width: 120px;
    position: absolute;
    left: 100px;
    border: 1px solid red;
    border-radius: 4px;
  } */
`;

export const EventBarSTY = styled.div<{
  duration: number;
  cellWidth: number;
  left: number;
}>`
  width: ${({ duration, cellWidth }) => duration * cellWidth + "%"};
  position: absolute;
  left: ${({ left, cellWidth }) => left * cellWidth + "%"};
  display: flex;
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
  button {
    flex-grow: 10;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 4px;
    background: ${({ theme, color }) => (color ? theme.color[color] : "unset")};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.N0};
    z-index: 1;
    padding: 4px 8px;
    cursor: pointer;
    .text-wrapper {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span {
      vertical-align: middle;
      line-height: normal;
      &:not(.text-wrapper) {
        min-width: fit-content;
      }
    }
    svg {
      width: 12px;
      min-width: 12px;
      height: 12px;
      fill: ${({ theme }) => theme.color.N0};
    }
  }
`;
