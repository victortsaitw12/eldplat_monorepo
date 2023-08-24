import styled from "styled-components";

const FormSTY = styled.form`
  /* border: 1px solid #ccc; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  div {
    /* margin-bottom: unset; */
  }
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
  button {
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.B400};
  }
  .info-box {
    background: #f1f6fd;
    border-radius: 10px;
    padding: 12px 20px;
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
