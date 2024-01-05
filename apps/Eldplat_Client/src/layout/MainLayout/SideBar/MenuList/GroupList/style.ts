import styled from "styled-components";

const BodySTY = styled.div`
  width: 100%;
  padding: 0;
`;

const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  background: none;
  border: none;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.N0};
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  gap: 8px;
  .btn__name {
    display: flex;
    justify-content: flex-start;
    gap: 12px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.N400};
    color: ${({ theme }) => theme.color.N0};
  }
  &.active {
    background-color: ${({ theme }) => theme.color.N400};
    color: ${({ theme }) => theme.color.N0};
  }
  /* &.disable {
    background-color: ${({ theme }) => theme.color.N700};
    color: ${({ theme }) => theme.color.N600};
    opacity: 50%;
    cursor: default;
  } */
`;

export { BodySTY, StyledButton };
