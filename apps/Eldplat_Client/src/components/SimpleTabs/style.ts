import styled from "styled-components";

export const GroupSTY = styled.g<{ className?: string }>`
  display: flex;
  flex-direction: row;
  background-color:  ${({ theme }) => theme.color.N0};
  padding: 15px 20px 0;
`;
export const UlSTY = styled.ul`
  &:not(.isActive) {
    display: none;  
  }
`;

export const DivSTY = styled.div`
  color: ${({ theme }) => theme.color.N700};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.Heading500};
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
    color: ${({ theme }) => theme.color.B400};
    position: relative;
    &:after {
      content: " ";
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid ${({ theme }) => theme.color.B400};
      border-radius: 2px 2px 0px 0px;
    }
    span {
      background-color: ${({ theme }) => theme.color.B200};
      color: ${({ theme }) => theme.color.B500};
    }
  }
`;
