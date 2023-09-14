import styled from "styled-components";

export const DivSTY = styled.div<{ minCellH: number }>`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.color.N300};
  &:last-child {
    border-bottom: none;
  }
  .dateCell__canvas,
  .dateCell__content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .dateCell__canvas {
    position: absolute;
    pointer-events: none;
  }
  .cell {
    min-height: ${({ minCellH }) => `${minCellH}px`};
    padding: 8px;
    z-index: 10;
  }

  .highlight {
    background: ${({ theme }) => theme.color.N100};
    position: relative;
    z-index: 0;
  }

  .disabled {
    position: relative;
    cursor: not-allowed;
    pointer-events: none;
    &::after {
      content: " ";
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      opacity: 0.5;
      z-index: 99;
      cursor: not-allowed;
      pointer-events: auto;
    }
  }
`;
