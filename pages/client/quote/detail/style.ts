import styled from "styled-components";

export const BodySTY = styled.div`
  .body-container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    > .content-container {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 50px;
      > .content-actions-container {
        display: flex;
        gap: 20px;
      }
    }
    > .charge-container {
      flex: 1;
      border-radius: 10px;
      overflow: hidden;
    }
  }
`;

export const ExpenseTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 12px;
  gap: 10px;
  > .title {
    font-weight: 600;
    font-size: 16px;
    color: #567190;
  }
  > .price-info {
    font-weight: 600;
    font-size: 24px;
    color: #567190;
  }
`;
