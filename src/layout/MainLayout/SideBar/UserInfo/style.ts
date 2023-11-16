import styled from "styled-components";

export const BodySTY = styled.div`
  border-radius: 0.625rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.N400};
  }
  .user {
    &__popover {
      border: 3px dashed red;
      nav {
        width: 100%;
      }
      .item {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        gap: 12px;
      }
    }
    &__info {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
      background: inherit;
      color: inherit;
      border: none;
      padding: 8px 12px;
      cursor: pointer;

      img {
        border-radius: 16px;
      }
      &-desp {
        display: flex;
        flex-direction: column;
        gap: 12px;
        text-align: start;

        h4 {
          font-size: 16px;
          font-weight: 600;
        }
        p {
          font-weight: 400;
        }
      }
    }
  }
`;
