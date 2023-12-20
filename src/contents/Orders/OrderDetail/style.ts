import styled from "styled-components";

export const MainSTY = styled.section`
  // border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .addon {
    li {
      span:first-child {
        min-width: 360px;
      }
    }
  }

  .section {
    box-shadow: 0px 4px 8px 0px #10184014;
    border-radius: 4px;

    .quote {
      color: ${({ theme }) => theme.color.B400};
    }
  }

  // & > div {
  //   background: ${({ theme }) => theme.color.N0};
  //   border-radius: 4px;
  //   overflow: hidden;
  //   display: flex;
  //   flex-direction: column;
  //   gap: 12px;
  // }
  // .collapse {
  //   &_title {
  //     align-items: center;
  //   }
  //   &__title {
  //     font-weight: 600;
  //     font-size: 18px;
  //     line-height: 25px;
  //     margin-right: 10px;
  //   }
  //   &__subTitle {
  //     font-weight: 400;
  //     font-size: 14px;
  //     line-height: 19px;
  //   }
  // }

  .tabs-wrap {
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
  }

  .tab.notice {
    position: relative;

    &::before {
      position: absolute;
      top: -4px;
      right: -8px;
      content: "";
      height: 8px;
      width: 8px;
      background-color: ${({ theme }) => theme.color.R400};
      border-radius: 50%;
    }
  }
`;

export const CustomTableSTY = styled.div` 
  .detail_grid {
    .grid_item {
      .item:first-child {
        background-color: ${({ theme }) => theme.color.N20};
        font-weight: 600;
      }
    }
  }
`

export const SectionSTY = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.N0};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;

`