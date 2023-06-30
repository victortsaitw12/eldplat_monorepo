import styled from "styled-components";

export const BodySTY = styled.div`
  width: 1240px;
  margin: 28px auto;
  > .body-container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    > .content-container {
      flex: 2 0 0;
      display: flex;
      flex-direction: column;
      gap: 50px;
      > .content-actions-container {
        display: flex;
        gap: 20px;
      }
    }
    > .charge-container {
      flex: 1 0 0;
      border-radius: 10px;
      overflow: hidden;
    }
  }
  > .redirect-body {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: ${({ theme }) => theme.color.N0};
    border-radius: 10px;
    margin-bottom: 50px;
  }
  > .redirect-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    color: ${({ theme }) => theme.color.N700};
    font-size: 16px;
    > button {
      border: none;
      cursor: pointer;
      background: none;
      padding: 8px 16px;
      gap: 8px;
      font-size: 12px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.N700};
    }
  }
`;
