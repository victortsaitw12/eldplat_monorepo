import styled from "styled-components";

export const BodySTY = styled.div`
  .form {
    .email {
      text-decoration: none;
      color: ${({ theme }) => theme.color.B400};
    }
    .input-line {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      margin: 16px auto;
      span {
        font-size: 14px;
        font-weight: 400;
        color: #567190;
      }
    }
  }
`;
