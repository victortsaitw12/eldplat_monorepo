import styled from "styled-components";

export const DriverListSTY = styled.div`
  padding: 1rem;
  .TableContainerSTY {
    /* overflow: hidden;
    overflow-x: scroll; */
    overflow: visible;
    &::-webkit-scrollbar {
      display: none;
    }
    .container-header {
      position: sticky;
      left: 0;
    }
  }
  tr > td {
    &:first-child > div {
      justify-content: flex-start;
    }
  }
`;
