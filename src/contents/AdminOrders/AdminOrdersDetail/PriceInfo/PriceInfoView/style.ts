import styled from "styled-components";

const BodySTY = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.N0};
  width: 280px;
  box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
  border-radius: 10px;
  .price_content {
    display: flex;
    justify-content: space-between;
    span {
      margin-bottom: 8px;
      color: ${({ theme }) => theme.color.N700};
      font-weight: 600;
      font-size: 25px;
      &:first-child {
        max-width: 60px;
        font-size: 16px;
      }
      &:last-child {
        display: flex;
        align-items: center;
        gap: 4px;
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
  & > div > .btn_list {
    display: flex;
    gap: 20px;
    > button {
      flex: 1;
      margin-bottom: 20px;
      &.cancel_btn {
        border: 1px solid ${({ theme }) => theme.color.N400};
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
`;

export { BodySTY };
