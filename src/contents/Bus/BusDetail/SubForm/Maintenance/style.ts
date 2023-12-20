import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  table {
    width: 100%;
  }

  tr {
    padding: 0 20px;
    display: flex;
    gap: 10px;

    th,
    td {
      flex-grow: 1;
      padding: 0;

      display: flex;

      &:first-child {
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:nth-child(2) {
        width: 80px;
      }

      &:nth-child(3) {
        width: 60px;
      }

      &:nth-child(4) {
        width: 80px;
      }

      &:nth-child(5) {
        width: 50px;
      }

      &:nth-child(6) {
        width: 50px;
      }

      &:nth-child(7) {
        width: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
