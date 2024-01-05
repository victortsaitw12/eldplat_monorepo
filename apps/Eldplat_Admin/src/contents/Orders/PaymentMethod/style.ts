import styled from "styled-components";

export const DivSTY = styled.div`
  box-shadow: 0px 4px 8px 0px #10184014;

  .collapse {
    &_title {
    }
    &_content {
      padding: 20px;
      .detail_list {
        gap: 14.5px;
        .detail_item {
          justify-content: space-between;
          &:first-child {
            font-weight: ${({ theme }) => theme.fontWeight.Heading400};
          }
          span {
            flex: unset;
            &:first-child {
              max-width: unset;
            }
          }
        }
      }
      .detail_list:not(:first-child) {
        margin-top: 26.5px;
      }

      .red {
        color: ${({ theme }) => theme.color.R400};
      }
    }
  }

  .detail_grid {
    margin-bottom: 20px;
    
    .grid_item {
      grid-template-columns: 80px 1fr;

      .item {
        
        &:first-child {
          padding: 10px 8px;
          background-color: ${({ theme }) => theme.color.N20};
        }
      }
    }
  }
`;

export const PaymentWrapSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  .payment-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    &:first-child {
      font-weight: 600;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.color.N300};

      &:nth-child(even) {
        text-align: right;
      }

      &.red {
        color: ${({ theme }) => theme.color.R400};
      }
    }
  }
`