import styled from "styled-components";
const StyledInput = styled.input`
  width: 270px;
  height: 32px;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.color.N400};
  &:disabled {
    border: none;
    background: transparent;
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.B300};
    box-shadow: 0px 0px 0px 2px #d6e0ff;
  }
`;
const StyledTextArea = styled.textarea`
  width: 270px;
  height: 64px;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 12px;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.color.N400};
  &:disabled {
    border: none;
    background: transparent;
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.B300};
    box-shadow: 0px 0px 0px 2px #d6e0ff;
  }
`;

const HorizatalLabelSTY = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .title {
    display: flex;
    align-items: center;
    font-size: 14px;
    width: 160px;
    gap: 4px;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.N800};
    .required {
      color: ${({ theme }) => theme.color.R400};
    }
    .title-content {
      font-weight: 400;
    }
  }
  .error {
    margin-top: 8px;
    color: ${({ theme }) => theme.color.R400};
  }
  .description {
    margin-top: 4px;
    color: ${({ theme }) => theme.color.N700};
  }
`;
const VerticalLabelSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .title {
    font-weight: 400;
    font-size: 14px;
    width: 160px;
    color: ${({ theme }) => theme.color.N800};
    .required {
      color: ${({ theme }) => theme.color.R400};
    }
    .title-content {
      font-weight: 400;
    }
  }
  .error {
    margin-top: 8px;
    color: ${({ theme }) => theme.color.R400};
  }
  .hint {
  }
  .description {
    margin-top: 4px;
    color: ${({ theme }) => theme.color.N700};
  }
`;

export { StyledInput, StyledTextArea, HorizatalLabelSTY, VerticalLabelSTY };
