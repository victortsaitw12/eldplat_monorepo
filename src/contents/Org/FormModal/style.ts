import styled from "styled-components";

export const FormSTY = styled.form`
  .evergreenInput {
    font-size: ${({ theme }) => theme.fontSize.Paragraph300};
    .input-error {
      color: red;
      font-size: ${({ theme }) => theme.fontSize.Paragraph100};
    }
    p {
      color: ${({ theme }) => theme.color.R400} !important;
    }
  }
`;
