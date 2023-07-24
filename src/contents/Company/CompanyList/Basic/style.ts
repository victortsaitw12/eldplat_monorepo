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
    }
    .required {
      &::before {
        content: "*";
        color: red;
        margin-right: 4px;
      }
    }

    .company-logo {
      margin: 0 auto;
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
