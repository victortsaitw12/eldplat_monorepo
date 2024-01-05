import styled from "styled-components";

export const BodySTY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  tr {
    display: flex;
    flex-direction: row;

    td, th {
      height: 46px;
      display: flex;
      flex-grow: 1;

      &:nth-child(3) {
        width: 500px;
        div {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      &:nth-child(4) {
        width: 100px;
      }
    }
  }
`;
