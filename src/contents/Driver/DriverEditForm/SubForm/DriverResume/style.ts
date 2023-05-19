import styled from "styled-components";

export const BodySTY = styled.div`
  .form {
    .input-line {
      min-height: 32px;
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 16px auto;
      align-items: center;

      span {
        font-size: 14px;
        font-weight: 500;
        color: #567190;
      }
      input {
        border: 1px solid #afc3da;
        width: 100%;
      }
    }
    .inline-line > div > {
      div :not(.title) {
        border: 1px solid red;
      }
    }
  }
`;
