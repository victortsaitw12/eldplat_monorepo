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

export const ButtonSetSTY = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.color.N0};
`;

export const LightBoxContentSTY = styled.div`
  

` 
