import styled from "styled-components";

export const BodySTY = styled.div<{ inCenter?: boolean }>`
  padding: 1rem;
  overflow-x: auto;
  min-height: 100vh;

  table {
    tbody {
      td {
        .completion_time {
          justify-content: center;
        }
      }
    }

    thead {
      tr {
        .completion_time {
          justify-content: center;
        }
      }
    }
  }
`;
