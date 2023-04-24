import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
        width: 400px;

        > span {
          margin-right: 80px;
        }
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
