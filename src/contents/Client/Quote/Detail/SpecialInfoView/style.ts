import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.color.N40};

  > ul {
    width: 100%;
  }
  .detail_list > .detail_item {
    & > span {
      &:first-child {
        max-width: 200px;
      }
    }
  }
  > .remark {
    > .remark-title {
      font-size: 14px;
      color: ${({ theme }) => theme.color.N700};
      font-weight: 600;
      line-height: 19px;
    }
    > .remark-content {
      font-size: 14px;
      line-height: 19px;
    }
  }


  .grid-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 130px 1fr;
        
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    }

    .grid-title {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.color.N20};
      border-right: 1px solid ${({ theme }) => theme.color.N40};
    }

    .grid-item, .grid-title {
      padding: 20px;
    }

    .multi-wrap {
      .multi-items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        .grid-item {
          &:not(:last-child) {
            border-right: 1px solid ${({ theme }) => theme.color.N40};
          }
        }

        &:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.color.N40};
        }
      }
    }
  }
`;

export { BodySTY };
/**
 *
 */
