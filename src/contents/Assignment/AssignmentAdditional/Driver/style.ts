import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  .info-box {
    background: #f1f6fd;
    border-radius: 10px;
    padding: 12px 20px;
    .date-area {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      span {
        width: 33%;
      }
    }
  }
`;
