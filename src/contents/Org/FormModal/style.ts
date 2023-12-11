import styled from "styled-components";

export const FormSTY = styled.form`
  .input-error {
    color: red;
    font-size: ${({ theme }) => theme.fontSize.Paragraph100};
  }
  p {
    color: ${({ theme }) => theme.color.R400} !important;
  }
`;
