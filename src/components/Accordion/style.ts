import styled from "styled-components";

export const DivSTY = styled.div`
  width: 100%;
  &.container {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.N300};
    background: ${({ theme }) => theme.color.N40};
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
  }
  .acc {
    &__btns {
      display: flex;
      padding: 8px 16px;
      gap: 8px;
    }
    &__items {
      display: flex;
    }
    &__item {
      display: flex;
      gap: 8px;
      align-items: center;
      align-self: stretch;
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      cursor: pointer;
      :hover {
        background: ${({ theme }) => theme.color.N10};
      }
    }
  }
  .padStart {
    width: 16px;
  }
  .hide {
    display: none;
  }
`;
