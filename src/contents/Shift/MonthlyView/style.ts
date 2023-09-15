import styled from "styled-components";

export const MonthlySTY = styled.div`
  border-radius: 0 0 5px 5px;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-top: none;
  width: 100%;
  height: calc(100% - 34px);
  display: flex;
  flex-direction: column;
  /* shared style in headerCells & dateCells */
  &.fitContent {
    height: fit-content;
    margin-bottom: 68px;
  }
  .cell {
    width: calc(100% / 7);
    pointer-events: none;
    * {
      pointer-events: auto;
    }
  }
`;
