import styled from "styled-components";

export const BodySTY = styled.div`
  background-color: ${({ theme }) => theme.color.N0};
  padding: 20px;
  border-radius: 10px;
  .licn-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .addLicnBtn {
      font-weight: ${({ theme }) => theme.fontWeight.Heading200};
      font-size: ${({ theme }) => theme.fontSize.Heading200};
      color: ${({ theme }) => theme.color.N700};
      border: none;
      &:focus,
      &:hover,
      &:active {
        border: none;
        outline: none;
      }
    }
  }
  .licn-title-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      border: none;
      padding: 0;
      margin-right: 10px;
    }
  }

  .documentIcon {
    cursor: pointer;
  }
`;