import styled from "styled-components";

export const StyledTr = styled.tr`
  .detailTable {
    padding: 0;
    background: ${({ theme }) => theme.color.N300};
    border: none;
    .additionalBtns {
      gap: 8px;
      justify-content: flex-end;
      padding: 8px 20px;
    }
  }
`;
