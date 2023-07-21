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
      input {
        width: auto;
      }
    }
    .required {
      &::before {
        content: "*";
        color: red;
        margin-right: 4px;
      }
    }

    .upload-file-frame {
      display: flex;
      justify-content: center;
      .upload-file {
        width: 200px;
        height: 200px;
        p {
          /* color: ${({ theme }) => theme.color.N700} !important; */
        }
      }
    }
  }
`;
