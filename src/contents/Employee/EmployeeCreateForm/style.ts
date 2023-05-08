import styled from "styled-components";

const FormSTY = styled.form`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  input {
    height: 32px;
    border: 1px solid #afc3da;
    border-radius: 4px;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;
    background-color: #3670c9;
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
