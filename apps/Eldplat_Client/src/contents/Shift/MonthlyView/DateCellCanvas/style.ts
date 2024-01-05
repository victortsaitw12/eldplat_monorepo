import styled from "styled-components";

export const CellSTY = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-left: 1px solid ${({ theme }) => theme.color.N300};
  &:nth-child(7n + 1) {
    border-left: none;
  }
  &.highlight {
    background: ${({ theme }) => theme.color.N100};
    position: relative;
    z-index: 0;
  }
`;
