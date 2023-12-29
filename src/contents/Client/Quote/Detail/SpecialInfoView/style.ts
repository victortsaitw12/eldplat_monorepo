import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.color.N40};
  border-radius: 4px;

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
    > .remark_title {
      font-size: 14px;
      color: ${({ theme }) => theme.color.N700};
      font-weight: 600;
      line-height: 19px;
    }
    > .remark_content {
      font-size: 14px;
      line-height: 19px;
    }
  }


  .grid_wrap {
    width: 100%;
    display: grid;
    grid-template-columns: 130px 1fr;
        
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    }

    .grid_title {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.color.N20};
      border-right: 1px solid ${({ theme }) => theme.color.N40};
    }

    .grid_item, .grid_title {
      padding: 20px;
    }

    .multi_wrap {
      .multi_items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        .grid_item {
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
