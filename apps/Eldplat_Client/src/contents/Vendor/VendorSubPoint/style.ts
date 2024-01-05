import styled from "styled-components";

export const BodySTY = styled.div`
  overflow-x: auto;
  padding: 20px;
  background: ${({ theme }) => theme.color.N0};
  display: block;

  .title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > h4 {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.N700};
      margin-bottom: 24px;
    }
  }
  .title-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 21px;
  }
  button.create {
    position: absolute;
    cursor: pointer;
    bottom: 32px;
    border: none;
    background: transparent;
  }
`;
