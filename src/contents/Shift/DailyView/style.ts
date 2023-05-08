import styled from "styled-components";

export const DailyViewSTY = styled.div<{ cellWidth?: number }>`
  flex-grow: 10;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;

  .headerCell__row {
    background: ${({ theme }) => theme.color.N75};
    border-bottom: 1px solid ${({ theme }) => theme.color.N300};
    text-align: center;
    height: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    &-date {
      min-width: 52px;
      width: 52px;
      border-left: none;
      white-space: nowrap;
    }
    &-times {
      flex-grow: 10;
      display: flex;
      flex-direction: row;
      .headerCell {
        width: ${({ cellWidth }) => cellWidth + "%"};
        height: 32px;
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
    .dateCell__row {
      height: 32px;
      border-bottom: 1px solid ${({ theme }) => theme.color.N300};
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      &-date {
        width: 52px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        background: ${({ theme }) => theme.color.N100};
        border-bottom: 1px solid ${({ theme }) => theme.color.N300};
      }
      &-canvas {
        flex-grow: 10;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        overflow: hidden;
        &-cell {
          /* flex-grow: 1; */
          height: 32px;
          width: ${({ cellWidth }) => cellWidth + "%"};
          border-left: 1px dashed ${({ theme }) => theme.color.N300};
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .weekend {
    color: ${({ theme }) => theme.color.R300};
    background: ${({ theme }) => theme.color.R50} !important;
  }
`;
