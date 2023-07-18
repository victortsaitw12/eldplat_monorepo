import styled from "styled-components";

export const DivSTY = styled.div`
  background-color: ${({ theme }) => theme.color.N0};
  padding: 20px;
  border-radius: 10px;
  thead > tr > th {
    &:nth-last-child(-n + 2) {
      div,
      span {
        justify-content: center;
      }
    }
  }
  tbody > tr > td {
    &:nth-last-child(-n + 2) {
      div {
        justify-content: center;
      }
    }
  }
  .documentIcon {
    cursor: pointer;
  }

  .noDataShown {
    height: 32px;
    position: relative;
    td {
      position: absolute;
      width: 100%;
      text-align: center;
    }
  }
`;
