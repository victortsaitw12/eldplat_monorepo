import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  .roles {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .role {
      display: flex;
      gap: 8px;
      .roleName_m {
        font-weight: 800;
      }
      .roleName {
      }
    }
  }
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
          button {
            border: none;
          }
          span {
          }
        }
      }
    }
    /* align text in header and content */
    td,
    th {
      padding: 10px 20px;
      span {
        justify-content: flex-start;
      }
    }

    /* action buttons */
    .action {
      display: flex;
      justify-content: flex-start;
      button {
        cursor: pointer;
      }
    }
  }
`;
