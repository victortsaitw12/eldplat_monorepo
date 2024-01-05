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
    background-color: ${({ theme }) => theme.color.N400};
    color: ${({ theme }) => theme.color.N0};
  }
  &.active {
    background: ${({ theme }) => theme.color.N400};
    color: ${({ theme }) => theme.color.N0};
  }
  &.disable {
    color: ${({ theme }) => theme.color.N50};
    opacity: 50%;
    cursor: not-allowed;
  }
`;
