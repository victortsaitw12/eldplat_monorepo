import styled from "styled-components";

export const BodySTY = styled.div`
  .form {
    .input-line {
      width: 100%;
      min-height: 32px;
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 16px auto;
      align-items: center;
      .title {
        width: 160px;
        font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
        letter-spacing: 1px;
      }
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .inline-line > div > div:not(.title) {
      border: 1px solid red;
      flex-grow: 10;
    }
  }
  .form > div {
    &:nth-child(n) {
      margin: 16px auto;
    }
  }
  .form > div > div:nth-child(2) {
    border: 1px solid ${({ theme }) => theme.color.N400};
    border-radius: 4px;
  }
  .checkbox {
    background: ${({ theme }) => theme.color.B400};
    height: 16px;
    width: 16px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.N400};
    outline: none;
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
