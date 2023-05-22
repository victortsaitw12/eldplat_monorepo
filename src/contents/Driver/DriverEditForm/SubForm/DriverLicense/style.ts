import styled from "styled-components";

const ref = styled.div``;

export const BodySTY = styled.div`
  .form {
    .input-line {
      width: 100%;
      min-height: 32px;
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 16px auto;
      align-items: center;
      position: relative;
      .title {
        width: 160px;
        font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
        letter-spacing: 1px;
      }
      span {
        font-size: 14px;
        font-weight: 500;
        color: #567190;
      }
      input {
        border: 1px solid #afc3da;
        width: 100%;
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
        .mediaIcon {
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
    }
    .inline-line > div > div:not(.title) {
      border: 1px solid red;
      flex-grow: 10;
    }
  }
  .form > div > div:nth-child(2) {
    border: 1px solid ${({ theme }) => theme.color.N400};
    border-radius: 4px;
  }
  .form > div {
    &:nth-child(n) {
      margin: 16px auto;
    }
  }
  input {
    border: none;
    outline: none;
    border-radius: 4px;
  }
  textarea {
    border: none;
    margin-top: 0px;
  }
`;
