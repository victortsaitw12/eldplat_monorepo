import styled from "styled-components";

export const MonthlySTY = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-top: none;
  width: 100%;
  margin-bottom: 68px;
  display: flex;
  flex-direction: column;
  /* shared style in headerCells & dateCells */
  .cell {
    width: calc(100% / 7);
    pointer-events: none;
    * {
      pointer-events: auto;
    }
  }
`;
