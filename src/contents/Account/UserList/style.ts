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
        td {
          span {
          }
        }
      }
    }
    /* align text in header and content */
    td,
    th {
      padding-inline-start: 10px;
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
