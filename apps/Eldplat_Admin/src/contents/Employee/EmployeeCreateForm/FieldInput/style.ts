import styled from "styled-components";
const ItemSTY = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  input: focus {
    outline: none;
  }
  .field-title {
    display: flex;
    align-items: center;
    font-size: 14px;
    .requier-icon {
      font-weight: 700;
      color: ${({ theme }) => theme.color.R400};
    }
  }
  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.color.R400};
  }
`;

export { ItemSTY };
