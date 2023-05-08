import styled from "styled-components";

export const MonthlySTY = styled.div<{ rows: number }>`
  flex-grow: 10;
  .container {
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
    display: grid;
    grid-template-columns: repeat(7, minmax(100px, 1fr));
    grid-template-rows: 32px repeat(
        auto-fill,
        calc((100% - 32px) / ${(props) => props.rows})
      );

    .cell__header {
      background: ${({ theme }) => theme.color.N100};
      text-align: center;
      height: 32px;
    }
    .weekend {
      color: ${({ theme }) => theme.color.R300};
      background: ${({ theme }) => theme.color.R50};
    }
    .monthly-date {
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-top: 1px solid ${({ theme }) => theme.color.N300};
    }
    .cell {
      border-left: 1px solid ${({ theme }) => theme.color.N300};
      padding: 8px;
      z-index: 10;
      pointer-events: none;
      * {
        pointer-events: auto;
      }
      /* position: relative; */
      &:nth-child(7n + 1) {
        border-left: none;
      }
      .cell__date {
        width: 100%;
        text-align: right;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
      }
      .cell__unfold-btn {
        flex-grow: 10;
      }
      .cell__date-btn {
        min-width: 20px;
        min-height: 20px;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
          background: ${({ theme }) => theme.color.N200};
        }
      }
    }
    .highlight:not(.start) {
      background: ${({ theme }) => theme.color.N100};
      position: relative;
      z-index: 0;
    }
    .start {
      background: ${({ theme }) => theme.color.N100};
      position: relative;
      z-index: 1;
    }
  }

  .disabled {
    position: relative;
    &::before {
      content: " ";
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      opacity: 0.5;
      z-index: 99;
    }
  }
`;
