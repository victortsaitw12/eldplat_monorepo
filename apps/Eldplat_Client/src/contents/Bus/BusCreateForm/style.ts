import styled from "styled-components";

const FormSTY = styled.form`
  > * {
    margin-bottom: 0px !important;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  select {
    height: 34px;
    & + svg {
      margin-top: -10px;
      height: 20px;
      width: 20px;
      border-radius: 4px;
      background: ${({ theme }) => theme.color.N100};
      & path {
        transform: scale(0.8) translateX(2px) translateY(2px);
      }
    }
  }
`;
const ItemSTY = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
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

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #3670c9;
  border: none;
  /* width: 240px; */
`;

export { FormSTY, ItemSTY, StyledButton };
