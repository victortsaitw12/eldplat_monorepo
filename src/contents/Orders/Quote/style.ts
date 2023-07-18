import styled from "styled-components";

export const DivSTY = styled.div`
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
      &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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
