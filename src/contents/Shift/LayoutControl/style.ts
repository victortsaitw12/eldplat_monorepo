import styled from "styled-components";

export const LayoutControlSTY = styled.div`
  &:hover {
    background: ${({ theme }) => theme.color.N100};
  }
  &:active {
    background: ${({ theme }) => theme.color.N200};
  }
  svg {
    color: ${({ theme }) => theme.color.N600};
    fill: ${({ theme }) => theme.color.N600};
  }
`;
