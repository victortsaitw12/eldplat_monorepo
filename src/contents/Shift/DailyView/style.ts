import styled from "styled-components";

export const DailyViewSTY = styled.div<{ cellWidth?: number }>`
  flex-grow: 10;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;

  .headerCell__row {
    height: 32px;
    min-width: min-content;
    width: 100%;
    background: ${({ theme }) => theme.color.N75};
    border: 1px solid ${({ theme }) => theme.color.N300};
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.color.N300};
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    &-date {
      border-left: none;
      white-space: nowrap;
    }
    &-times {
      flex-grow: 10;
      display: flex;
      flex-direction: row;
      .headerCell {
        /* flex-grow: 1; */
        line-height: 32px;
        justify-content: center;
        border-left: 1px solid ${({ theme }) => theme.color.N300};
        &-hhmm {
        }
        &-aa {
          font-size: 10px;
          position: relative;
          top: -5px;
        }
      }
    }
  }

  .dateCells {
    overflow: visible;
    overflow-x: visible;
    overflow-y: scroll;
    width: 100%;
    min-width: min-content;
    &::-webkit-scrollbar {
      display: none;
    }
    .dateCell__row {
      height: 32px;
      min-width: min-content;
      width: 100%;
      overflow: hidden;
      border-bottom: 1px solid ${({ theme }) => theme.color.N300};
      border-left: 1px solid ${({ theme }) => theme.color.N300};
      border-right: 1px solid ${({ theme }) => theme.color.N300};
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      &:last-child {
        border-radius: 0px 0px 5px 5px;
      }
      &-date {
        height: 32px;
        line-height: 32px;
        text-align: center;
        background: ${({ theme }) => theme.color.N100};
        cursor: pointer;
        z-index: 10;
      }
      &-canvas {
        flex-grow: 10;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        &-cell {
          /* flex-grow: 1; */
          height: 32px;
          border-left: 1px dashed ${({ theme }) => theme.color.N300};
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .date {
    width: 52px;
    min-width: 52px;
  }
  .time {
    width: ${({ cellWidth }) => cellWidth + "%"};
    min-width: 70px;
  }

  .weekend {
    color: ${({ theme }) => theme.color.R300};
    background: ${({ theme }) => theme.color.R50} !important;
  }
`;
