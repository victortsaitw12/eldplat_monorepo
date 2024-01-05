import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      /* grid-template-columns: 2fr 3fr; */
      /* margin: 16px auto; */
      span {
        font-size: 14px;
        font-weight: 600;
        color: #567190;
      }

      .hours-checkbox {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 10px;

        label {
          margin: 8px 0;
        }
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
