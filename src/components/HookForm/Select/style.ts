import styled from "styled-components";
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.B300};
  }
  .title {
    font-weight: 700;
  }
  .select {
    &:disabled {
      color: black;
      font-weight: 700;
      border: none;
      background: transparent;
      appearance: none;
    }
  }
  .error {
    color: red;
  }
  .hint {
  }
  .description {
  }
`;
export { StyledLabel };
