import styled from "styled-components";

const BodySTY = styled.div`
  width: 200px;
  padding: 0;
`;

const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  background: none;
  border: none;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.N0};
  width: 200px;
  height: 40px;
  padding: 8px 12px;
  gap: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.color.B100};
    color: ${({ theme }) => theme.color.B400};
  }
  &.active {
    background-color: ${({ theme }) => theme.color.B100};
    color: ${({ theme }) => theme.color.B400};
  }
  &.disable {
    background-color: ${({ theme }) => theme.color.N700};
    color: ${({ theme }) => theme.color.N600};
    opacity: 50%;
    cursor: default;
  }
`;

export { BodySTY, StyledButton };
