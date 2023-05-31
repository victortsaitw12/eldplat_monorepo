import styled from "styled-components";

export const GroupSTY = styled.g`
  display: flex;
  flex-direction: row;
`;
export const UlSTY = styled.ul`
  &:not(.isActive) {
    display: none;
  }
`;

export const DivSTY = styled.div`
  color: ${({ theme }) => theme.color.N700};
  font-size: ${({ theme }) => theme.fontSize.Heading500};
  font-weight: ${({ theme }) => theme.fontWeight.Heading500};
  margin-bottom: ${({ theme }) => theme.fontSize.Heading500};
  padding-bottom: 11px;
  cursor: pointer;
  span {
    min-height: 18px;
    min-width: 18px;
    border-radius: 50rem;
    background-color: ${({ theme }) => theme.color.N0};
    color: ${({ theme }) => theme.color.N800};
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.Heading100};
    padding: 0 6px;
    margin-left: 4px;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
  &.isActive {
    border-bottom: solid ${({ theme }) => theme.color.B400};
    color: ${({ theme }) => theme.color.B400};
    span {
      background-color: ${({ theme }) => theme.color.B200};
      color: ${({ theme }) => theme.color.B500};
    }
  }
`;
