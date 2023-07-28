import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 16px auto;
      span,
      div {
        font-size: 14px;
        font-weight: 600;
        color: #567190;
        margin: auto 0;
      }

      .time-format {
        color: ${({ theme }) => theme.color.N700};
        font-weight: 400;
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
