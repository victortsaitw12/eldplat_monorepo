import styled from "styled-components";

export const FormSTY = styled.form`
  background-color: ${({ theme }) => theme.color.N0};
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
  .license-file-btn {
    display: flex;
    justify-content: flex-start;
    color: #ffffff;
    background-color: #3670c9;
    width: 124px;
    height: 32px;
    border-radius: 32px;
  }
  .licnFileBox {
    min-height: 75px;
    width: 270px;
    padding: 19.5px 10px;
    border: 1px solid #afc3da;
    border-radius: 5px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 20px;
    .DocumentIcon {
      grid-column: 0/1;
      grid-row: 1/-1;
      width: 36px;
      height: 36px;
      background: ${({ theme }) => theme.color.N200};
      border: none;
      border-radius: 5px;
      svg {
        fill: ${({ theme }) => theme.color.N500};
      }
    }
    .licnFileInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .fileSize {
        color: ${({ theme }) => theme.color.N500};
      }
    }
  }
  .uploadFileBtn {
    display: none;
  }
  li {
    div:nth-child(2) {
      min-width: 278px;
    }
  }
`;
