import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 5fr 8fr;
      margin: 16px auto;
      span {
        font-size: 14px;
        font-weight: 700;
        color: #567190;
      }
      input {
        border: 1px solid #afc3da;
      }
      button {
        text-align: left;
      }
      .gender-radio {
        display: flex;
        align-items: center;

        label {
          margin-right: 24px;
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

    .nation-select-parent {
      > div {
        margin-bottom: 0px;
        width: 280px;
      }
    }
  }
`;
