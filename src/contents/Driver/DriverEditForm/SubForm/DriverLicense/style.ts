import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 16px auto;
      align-items: center;
      position: relative;

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
    }
  }
`;
