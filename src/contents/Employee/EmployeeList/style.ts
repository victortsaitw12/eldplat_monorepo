import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  overflow-x: auto;
  height: 100%;

  table {
    tbody {
      td {
        .login_count {
          justify-content: flex-end;
        }
        .user_status {
          justify-content: center;
        }
      }
    }

    thead {
      tr {
        .login_count {
          justify-content: flex-end;
        }
        .user_status {
          justify-content: center;
        }
      }
    }
  }
`;
