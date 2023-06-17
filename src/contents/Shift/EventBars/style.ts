import styled from "styled-components";

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
  cellWidth: number;
  left: number;
}>`
  min-width: ${({ cellWidth }) => cellWidth + "px"};
  width: ${({ duration, cellWidth }) => duration * cellWidth + "%"};
  position: absolute;
  left: ${({ left, cellWidth }) => left * cellWidth + "%"};
  display: flex;
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
  button {
    max-width: 100%;
    flex-grow: 10;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 4px;
    background: ${({ theme, color }) => (color ? color : "unset")};
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.N0};
    z-index: 1;
    padding: 4px 8px;
    overflow: hidden;
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
