import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  table {
    /* basic structure */
    thead {
      tr {
        th {
          span {
          }
        }
      }
    }

    tbody {
      tr {
        position: relative;
        td {
          max-width: 24ch;
          span {
          }
          div {
            max-width: 24ch;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    /* align text in header and content */
    td,
    th {
      span {
        justify-content: flex-start;
      }
    }

    /* action buttons */
    .action {
      display: flex;
      justify-content: flex-end;
      button {
        cursor: pointer;
      }
    }
  }
`;
