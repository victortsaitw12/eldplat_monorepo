import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 1fr 3fr;
      margin: 16px auto;
      align-items: center;

      span,
      p {
        font-size: 14px;
        font-weight: 400;
        color: #567190;
      }
      input {
        border: 1px solid #afc3da;
      }

      label {
        margin: auto 16px;
      }

      .invite-btn {
        color: #ffffff;
        background-color: #679def;
        padding: 4px 12px;
        width: 48px;
        height: 24px;
        border-radius: 32px;
      }
    }
  }
`;
