import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin: 16px auto;
      span {
        font-size: 14px;
        font-weight: 600;
        color: #567190;
      }
      input {
        width: 237px;
      }

      .add-rule-btn {
        width: 76px;
        height: 32px;
        color: #fff;
        background: #3670c9;
        border-radius: 32px;
      }
    }
  }
`;
