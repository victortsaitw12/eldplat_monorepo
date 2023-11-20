import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.N300};
  > .header {
    display: flex;
    justify-content: center;
    padding: 32px 0px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.N400};
    > .header-container {
      width: 1030px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      > .header-title {
        font-size: 32px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.N700};
      }
    }
  }
  > .content-container {
    display: flex;
    padding: 40px 0px;
    gap: 40px;
    flex-direction: column;
    align-items: center;
    width: 1030px;
    > .content-title {
      color: ${({ theme }) => theme.color.N700};
      font-size: 32px;
      font-weight: 600;
      align-self: flex-start;
    }
    > .content-entry {
      display: flex;
      width: 100%;
      justify-content: space-around;
      .serverEntryBtn {
        width: 400px;
        height: 460px;
      }
    }
  }
`;
