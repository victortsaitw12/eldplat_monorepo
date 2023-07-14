import styled from "styled-components";

export const DriverListSTY = styled.div`
  height: 100%;
  padding: 1rem;
  .TableContainerSTY {
    overflow: visible;
    &::-webkit-scrollbar {
      display: none;
    }
    .container-header {
      position: sticky;
      left: 0;
    }
  }
  tr > th {
    &:nth-child(-n + 2),
    &:nth-child(-n + 3),
    &:nth-child(-n + 5),
    &:nth-child(-n + 6) > span {
      justify-content: flex-start;
    }
  }
  tr > td {
    &:nth-child(-n + 2),
    &:nth-child(-n + 3),
    &:nth-child(-n + 5),
    &:nth-child(-n + 6) > div {
      justify-content: flex-start;
      span {
        justify-content: center;
      }
    }
    &:nth-child(-n + 6) {
      .data-row > div {
        max-width: 220px;
        white-space: break-spaces;
        line-height: 1.5;
      }
    }
    /* 駕駛列表頁確認全部顯示，過長折行
    .data-row {
      width: 6rem;
      overflow: hidden;
      div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      }
    } */
  }
`;
