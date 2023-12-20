import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
  .left {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .paymentBtns {
    flex-direction: row;
    display: flex;
    gap: 20px;
  }
`;
