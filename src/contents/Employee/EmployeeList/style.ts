import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  overflow-x: auto;
  height: 100%;

  table {
    tbody {
      td {
        .login_Times {
          justify-content: flex-end;
        }
      }
    }

    thead {
      tr {
        .login_Times {
          justify-content: flex-end;
        }
      }
    }
  }
`;
