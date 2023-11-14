import styled from "styled-components";

export const DivSTY = styled.div`
  width: 100%;
  &.container {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.color.N300};
    background: var(--neutral-n-0, #fff);
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
  }

  .acc {
    &__btns {
      padding: 8px 16px;
    }
    &__items {
      display: flex;
    }
    &__item {
      display: flex;
      gap: 8px;
      padding: 4px 16px;
      align-items: center;
      align-self: stretch;
      cursor: pointer;
      :hover {
        background: ${({ theme }) => theme.color.N100};
      }
    }
  }
  .padStart {
    padding-left: 24px;
  }
  .hide {
    display: none;
  }
`;
