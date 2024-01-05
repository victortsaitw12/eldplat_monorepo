import styled from "styled-components";

export const DivSTY = styled.div`
  box-shadow: 0px 4px 8px 0px #10184014;

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
    border-radius: 4px;
    overflow: hidden;
    background: ${({ theme }) => theme.color.N0};
    padding: 16px;

    .collapse {
      &__title {
        font-weight: 600;
        font-size: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      &__subTitle {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .amount {
        color: ${({ theme }) => theme.color.R300};
      }
    }

    .collapse_title {
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      padding: 0;
      padding-bottom: 16px;
    }

    .amend-btn {
      width: 100%;
      padding: 8px 0;
    }
  }
`;
