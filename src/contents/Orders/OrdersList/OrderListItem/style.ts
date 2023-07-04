import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: row !important;
  gap: 20px;
  padding: 20px;
  > .info-content {
    border: 1px solid ${({ theme }) => theme.color.N300};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 19px;
    gap: 10px;
    border-radius: 10px;
    > .content_item {
      color: ${({ theme }) => theme.color.N700};
      display: flex;
      gap: 10px;
    }
  }
  > .info-progress {
    border: 1px solid ${({ theme }) => theme.color.N300};
    flex: 1 0 0;
    border-radius: 10px;
    padding: 10px 19px;
  }
  .paymentBtn {
    width: unset;
    display: flex;
    align-items: center;
    div {
      flex-direction: column;
      button {
        border: 1px solid #afc3da;
      }
    }
  }
`;
