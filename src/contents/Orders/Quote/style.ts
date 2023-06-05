import styled from "styled-components";

export const DivSTY = styled.div`
  button {
    width: 100%;
    border-radius: 50rem;
    background-color: ${({ theme }) => theme.color.B400};
    margin-bottom: 12px;
    &:hover {
      background-color: ${({ theme }) => theme.color.B500};
    }

    &:focus {
      background-color: ${({ theme }) => theme.color.R500};
    }

    &:active {
      background-color: ${({ theme }) => theme.color.B500};
    }
  }
  .inlineAlert {
    align-items: flex-start;
    margin-bottom: 12px;
    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
    }
  }
  .quote {
    border-radius: 10px;
    overflow: hidden;
    background: ${({ theme }) => theme.color.N0};
    .collapse {
      font-family: "Noto Sans";
      &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 33px;
      }
      &__subTitle {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;
