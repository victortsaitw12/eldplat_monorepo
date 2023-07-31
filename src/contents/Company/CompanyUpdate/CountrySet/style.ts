import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 8px auto;
      span {
        font-size: 14px;
        font-weight: 600;
        color: #567190;
        display: flex;
        align-items: flex-start;
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
