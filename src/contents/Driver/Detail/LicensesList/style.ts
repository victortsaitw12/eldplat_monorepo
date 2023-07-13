import styled from "styled-components";

export const DivSTY = styled.div`
  background-color: ${({ theme }) => theme.color.N0};
  padding: 20px;
  border-radius: 10px;
  .licn-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .licn-title-left {
      color: ${({ theme }) => theme.color.N700};
      font-size: ${({ theme }) => theme.fontSize.Heading500};
      font-weight: ${({ theme }) => theme.fontWeight.Heading500};
      line-height: 21.97px;
    }
    .licn-title-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button {
        border: none;
        padding: 0;
        margin-right: 10px;
      }
      .addLicnBtn {
        font-weight: ${({ theme }) => theme.fontWeight.Heading200};
        font-size: ${({ theme }) => theme.fontSize.Heading200};
        color: ${({ theme }) => theme.color.N700};
        border: none;
        &:focus,
        &:hover,
        &:active {
          border: none;
          outline: none;
        }
      }
    }
  }
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
