import styled from "styled-components";

const BodySTY = styled.div`
  .detail-with-icon {
    display: inline-block;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    & > svg {
      position: absolute;
      left: 2px;
      top: 10px;
    }
    .detail_item {
      padding-left: 23px;
      & > span {
        line-height: 32px;
      }
    }
  }
  .add_day_container {
    color: ${({ theme }) => theme.color.N700};
    padding: 17.5px;
    button {
      width: 100%;
      border: none;
      background: transparent;
      justify-content: flex-start;
      gap: 9.5px;
      &:hover {
        border: none;
        background: transparent;
      }
    }
  }
`;


export const DoubleCollapseWrap = styled.div`
  // FIXME: 下面是因為collapse裡有collaspe ，css是為了互相覆，可找一下有沒有更好的css selector或寫法
  .collapse {
    .collapse_title {
      background-color: ${({ theme }) => theme.color.N0};
      padding: 5px 12px;
      
      > span {
        margin-left: 20px;
      }

      > svg {
        right: auto;
        left: 0;
        margin-left: 10px;
      }
    }

    .collapse_content {
      padding-top: 12px;
    }
  }

  .detail_grid {
    .collapse {
      .collapse_title {
        background-color: ${({ theme }) => theme.color.N20};

        > span {
          margin-left: 0px;
        }

        > svg {
          right: 10px;
          left: auto;
          margin-left: 0;
        }
      }

      .collapse_content {
        padding-top: 0px;
      }
    }

    .grid_content {
      padding: 0;
    }
  }
`


export { BodySTY };
