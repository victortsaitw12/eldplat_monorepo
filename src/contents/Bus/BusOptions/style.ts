import styled from "styled-components";

const StyledButton = styled.button<{
  active: boolean;
  invalid: boolean;
}>`
  cursor: pointer;
  padding: 12px 16px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  color: ${({ active, invalid, theme }) =>
    invalid ? theme.color.R400 : active ? theme.color.N900 : theme.color.N600};
  box-shadow: ${({ active, invalid, theme }) =>
    `inset 3px 0 0 ${
      invalid ? theme.color.R400 : active ? theme.color.B600 : theme.color.N0
    }`};
  &:hover {
    color: ${({ invalid, theme }) =>
      invalid ? theme.color.R400 : theme.color.N900};
  }
  .option-label {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const BodySTY = styled.div`
  .option-card {
    padding: 8px 0;
    border-radius: 8px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.color.N0};
    display: flex;
    flex-direction: column;
  }
`;

export { StyledButton, BodySTY };
