import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    width: 30px;
    > button {
      display: flex;
      justify-content: center;
      > svg {
        color: ${({ theme }) => theme.color.N700};
      }
    }
    > .table-row-option {
      display: flex;
      flex-direction: column;
      position: absolute;
      border: 1px solid red;
      top: 0;
      right: 0;
      border-radius: 10px;
      overflow: hidden;
      transform: translate(-30%, 20%);
      background-color: ${({ theme }) => theme.color.N0};
      border: 1px solid ${({ theme }) => theme.color.N300};
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      .option-item {
        width: 100px;
        height: 32px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        padding: 0 10px;
        gap: 8px;
        border-bottom: 1px solid ${({ theme }) => theme.color.N300};
        color: ${({ theme }) => theme.color.N800};
        > svg {
          color: ${({ theme }) => theme.color.N500};
        }
      }
    }
  }
`;
