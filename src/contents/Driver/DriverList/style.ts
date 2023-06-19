import styled from "styled-components";

export const DriverListSTY = styled.div`
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
    &:nth-child(-n + 2) > span {
      justify-content: flex-start;
    }
  }
  tr > td {
    &:nth-child(-n + 2) > div {
      justify-content: flex-start;
    }
  }
`;
