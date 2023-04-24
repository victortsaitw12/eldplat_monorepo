import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 1fr 3fr;
      margin: 16px auto;
      align-items: center;

      span {
        font-size: 14px;
        font-weight: 700;
        color: #567190;
      }
      input {
        border: 1px solid #afc3da;
      }

      .required {
        &::before {
          content: "*";
          color: red;
          margin-right: 4px;
        }
      }

      .address {
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
`;
