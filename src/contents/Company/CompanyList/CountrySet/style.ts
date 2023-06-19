import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 16px auto;
      span {
        font-size: 14px;
        font-weight: 600;
        color: #567190;
      }

      .option-tags {
        display: flex;
        flex-wrap: wrap;
        .tags {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 600;
          color: #1952a8;
          background-color: #e2edff;
          height: 20px;
          border-radius: 8px;
          margin: 4px 4px 4px 0px;
          padding: 6px;

          span {
            font-size: 12px;
          }

          button {
            color: #1952a8;
            background: transparent;
            border: none;
            width: 6px;
            margin: 0;
            padding: 0;
          }
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
