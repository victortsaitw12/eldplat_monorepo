import styled from "styled-components";

const BodySTY = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.N0};
  width: 280px;
  box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
  border-radius: 10px;
  .detail_item {
    span {
      &:last-child {
        text-align: right;
      }
    }
  }

  .price_content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > span {
      margin-bottom: 8px;
      color: ${({ theme }) => theme.color.N700};
      font-weight: 600;
      &:first-child {
        max-width: 60px;
        font-size: 16px;
      }
      &:last-child {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 24px;
      }
    }
    &.xs {
      & > span {
        &:first-child,
        &:last-child {
          font-size: 16px;
        }
      }
    }
    & ~ span {
      display: inline-block;
      width: 100%;
      text-align: right;
      font-weight: 400;
      font-size: 12px;
      color: ${({ theme }) => theme.color.N700};
    }
  }
  .price_detail {
    & > div {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      & > div,
      & > span {
        flex: 1;
      }
      & > div {
        display: flex;
        align-items: center;
        gap: 4px;
        & > input {
          width: 100%;
        }
      }
    }
  }
  .detail_item {
    span {
      &:last-child {
        text-align: right;
      }
    }
  }
  hr {
    margin: 20px 0;
    border-top: 1px solid ${({ theme }) => theme.color.N0};
  }
  input[type="number"] {
    text-align: right;
  }
  //取消number input的上下箭頭
  /* Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export { BodySTY };
