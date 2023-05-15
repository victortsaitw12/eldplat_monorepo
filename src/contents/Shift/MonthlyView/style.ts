import styled from "styled-components";

export const MonthlySTY = styled.div<{ rows: number }>`
  flex-grow: 10;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .headerCells {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: sticky;
    top: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.N300};
    z-index: 99;
    .headerCell {
      height: 32px;
      width: calc(100% / 7);
      background: ${({ theme }) => theme.color.N100};
      line-height: 32px;
      text-align: center;
      border-left: 1px solid ${({ theme }) => theme.color.N300};
      &:first-child {
        border-left: none;
      }
    }
    .weekend {
      color: ${({ theme }) => theme.color.R300};
      background: ${({ theme }) => theme.color.R50};
    }
  }
  .dateCells {
    width: 100%;
    position: relative;
    height: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    /* align-items: stretch; */
    .dateCell__row {
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid ${({ theme }) => theme.color.N300};
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
    }
  }

  /* shared style in headerCells & dateCells */
  .cell {
    width: calc(100% / 7);
    pointer-events: none;
    * {
      pointer-events: auto;
    }
  }

  .coverAll {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${({ theme }) => theme.color.N0};
    opacity: 0.5;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: 999;
    .spinner {
      opacity: 1;
    }
  }
`;
