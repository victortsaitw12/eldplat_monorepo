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
    }
    &__title {
      display: flex;
      padding: 8px 16px;
      align-items: center;
      gap: 16px;
      align-self: stretch;
      background: ${({ theme }) => theme.color.N300};
      color: ${({ theme }) => theme.color.N700};
      font-family: Noto Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    &__items {
      display: flex;
    }
    &__item {
      display: flex;
      padding: 8px 32px 8px 16px;
      align-items: center;
      align-self: stretch;
      cursor: pointer;
      :hover {
        background: ${({ theme }) => theme.color.N100};
      }
    }
  }
  .padStart {
    padding-left: 16px;
  }
  .hide {
    display: none;
  }
`;
