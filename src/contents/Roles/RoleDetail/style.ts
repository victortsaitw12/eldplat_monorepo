import styled from "styled-components";

export const FormSTY = styled.form`
  display: flex;
  /* width: 600px; */
  height: calc(100% - 20px);
  margin: 10px;
  input {
    font-size: ${({ theme }) => theme.fontSize.Paragraph300};
  }
  select {
    font-size: ${({ theme }) => theme.fontSize.Paragraph300};
  }
  .input-error {
    color: red;
  }
`;
