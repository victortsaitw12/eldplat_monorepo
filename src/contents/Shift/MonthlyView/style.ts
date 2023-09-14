import styled from "styled-components";

export const MonthlySTY = styled.div<{ rows: number }>`
  /* flex-grow: 10; */
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-top: none;
  width: 100%;
  position: relative;
  margin-bottom: 68px;
  /* shared style in headerCells & dateCells */
  .cell {
    width: calc(100% / 7);
    pointer-events: none;
    * {
      pointer-events: auto;
    }
  }
`;
