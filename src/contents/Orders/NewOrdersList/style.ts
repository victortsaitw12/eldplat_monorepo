import styled from "styled-components";

export const OrdersListSTY = styled.div`
  height: 100%;
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
  th,
  td {
    > span {
      justify-content: flex-start;
    }

    :first-child {
      width: 5%;
    }

    :nth-child(2) {
      width: 10%;
    }

    :nth-child(3) {
      width: 20%;
    }

    :nth-child(4) {
      width: 10%;
    }

    :last-child {
      width: 5%;
    }
  }
  th {
    /* &:nth-child(7) > span {
      justify-content: flex-end !important;
    }
    &:nth-child(9) > span {
      justify-content: center !important;
    }
    &:last-child > span {
      justify-content: center !important;
    } */
  }
  td {
    /* &:nth-child(7) > div {
      justify-content: flex-end !important;
    }
    &:nth-child(9) > div {
      justify-content: center !important;
    } */
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
