import styled from "styled-components";
const StyledInput = styled.input`
  width: 216px;
  height: 32px;
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
    font-weight: 600;
    width: 160px;
    color: ${({ theme }) => theme.color.N800};
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
  .title {
    font-weight: 600;
    color: ${({ theme }) => theme.color.N800};
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

export { StyledInput, HorizatalLabelSTY, VerticalLabelSTY };
