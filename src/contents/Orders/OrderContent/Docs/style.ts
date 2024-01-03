import styled from "styled-components";

export const DivSTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  
  table {
    tr {
      td {
        a {
          text-decoration: none;
          color: #3670C9;
        }
        :first-child {
          width: 10%;
        }
        :nth-child(2) {
          width: 70%;
        }
        :nth-child(3) {
          width: 10%;
        }
        :nth-child(3) {
          width: 10%;
        }
      }
    }
  }
`;
