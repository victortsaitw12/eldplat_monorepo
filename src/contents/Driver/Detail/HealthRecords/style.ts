import styled from "styled-components";

export const BodySTY = styled.div`
  background-color: ${({ theme }) => theme.color.N0};
  padding: 20px;
  border-radius: 10px;
  .health-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .health-title-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      border: none;
      padding: 0;
      margin-right: 10px;
    }
  }
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 100%;
    color: ${({ theme }) => theme.color.N700};
    .container-header-left {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 16px;
      font-weight: 600;
    }
  }

  .health-table {
    margin-top: 10px;
    text-align: center;
  }
`;
