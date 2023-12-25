import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  header {
    padding: 0;
  }
  .headNode {
    display: table-header;
    width: 100%;
    padding: none;
    .btns {
      padding: 8px 16px;
      display: flex;
      gap: 8px;
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      button {
        color: ${({ theme }) => theme.color.N300};
        font-weight: ${({ theme }) => theme.fontWeight.Headline400};
        font-size: ${({ theme }) => theme.fontSize.Headline400};
      }
    }
    .paginationField {
      padding: 8px 16px;
    }
  }
  .roles {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: flex-start;
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
