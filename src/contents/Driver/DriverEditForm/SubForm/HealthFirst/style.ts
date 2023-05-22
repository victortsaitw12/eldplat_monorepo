import styled from "styled-components";

export const BodySTY = styled.div`
  background: #ffffff;
  height: calc(100vh - 110px);
  padding: 28px 20px;
  table svg{
    cursor: pointer;
  }
  .health-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .health-title-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 21px;
  }

  .health-table {
    margin-top: 10px;
    text-align: center;
  }
`;
