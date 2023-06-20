import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  flex-direction: row;
  > .breadcrumbs-item {
    display: flex;
    align-items: center;

    > .breadcrumbs__separation {
      height: 2rem;
      margin: 0 11.75px;
    }
    > .breadcrumbs__route {
      line-height: 2rem;
      text-decoration: none;
      color: ${({ theme }) => theme.color.N700};
    }
  }
`;
