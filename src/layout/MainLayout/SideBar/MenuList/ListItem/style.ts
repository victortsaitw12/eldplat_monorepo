import styled from "styled-components";
export const BodySTY = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.N0};
  font-size: 14px;
  padding: 8px 12px;
  /* background: "none"; */
  &:hover {
    background-color: #e2edff;
    color: ${({ theme }) => theme.color.B400};
  }
  &.active {
    background: #e2edff;
    color: ${({ theme }) => theme.color.B400};
  }
  &.disable {
    background: ${({ theme }) => theme.color.N700};
    color: ${({ theme }) => theme.color.N600};
    opacity: 50%;
    cursor: default;
  }
`;
