import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 1fr 8fr;
      margin: 16px auto;
      span {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        color: #567190;
      }
    }
    .required {
      &::before {
        content: "*";
        color: red;
        margin-right: 4px;
      }
    }
  }
`;
