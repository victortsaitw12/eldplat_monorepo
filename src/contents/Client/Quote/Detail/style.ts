import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 40px;
  gap: 12px;
  background-color: ${({ theme }) => theme.color.N0};
  border-radius: 10px;
  overflow: hidden;
  .special_content {
    .detail_list > .detail_item {
      & > span {
        &:first-child {
          max-width: 200px;
        }
      }
    }
  }

  // FIXME: 下面是因為collapse裡有collaspe ，css是為了互相覆，可找一下有沒有更好的css selector或寫法
  .collapse {
    .collapse_title {
      background-color: ${({ theme }) => theme.color.N0};

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
  }
`;

export { BodySTY };
