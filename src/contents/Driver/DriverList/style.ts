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
  th {
    &:nth-child(7) > span {
      justify-content: flex-end !important;
    }
    &:nth-child(9) > span {
      justify-content: center !important;
    }
    &:last-child > span {
      justify-content: center !important;
    }
  }
  td {
    &:nth-child(7) > div {
      justify-content: flex-end !important;
    }
    &:nth-child(9) > div {
      justify-content: center !important;
    }
    /* 駕駛列表頁確認全部顯示，過長折行(先不用)
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
