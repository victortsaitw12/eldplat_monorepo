import styled from "styled-components";

export const DivSTY = styled.div`
  padding: 1rem;
  background-color: #fff;
  overflow-x: auto;
  /* height: 100%;
  min-height: 100vh; */
  .mr-1 {
    margin-right: 10px;
  }
  .mr-2 {
    margin-right: 20px;
  }
  .mr-3 {
    margin-right: 30px;
  }
  .table-wrap {
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
  
  }
`;
