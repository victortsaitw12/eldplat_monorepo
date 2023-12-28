import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  background-color: #fff;
  overflow-x: auto;
  height: 100%;

  table {
    width: 100%;
  }

  tr {
    padding: 0 20px;
    display: flex;

    th,
    td {
      flex-grow: 1;
      padding: 0 ;


      display: flex;

      &:first-child {
        width: 90px;
      }

      &:nth-child(2) {
        width: 60px;
      }

      &:nth-child(3) {
        width: 60px;
      }

      &:nth-child(4) {
        width: 40px;
        justify-content: center;
      }

      &:nth-child(5) {
        width: 30px;
        justify-content: center;
      }

      &:nth-child(6) {
        width: 80px;
      }

      &:nth-child(7) {
        width: 60px;
      }

      &:nth-child(8) {
        width: 80px;
      }

      &:nth-child(9) {
        width: 60px;
      }

      &:nth-child(10) {
        width: 70px;

        div {
          display: flex;
          flex-wrap: nowrap;
          gap: 3px;

          svg {
            flex-shrink: 0;
          }
        }
      }

      &:nth-child(11) {
        width: 40px;
        justify-content: flex-end;
      }
    }

    .green {
      color: ${({ theme }) => theme.color.G400};
    }

    .teal {
      color: ${({ theme }) => theme.color.T400};
    }

    .blue {
      color: ${({ theme }) => theme.color.B400};
    }

    .yellow {
      color: ${({ theme }) => theme.color.Y400};
    }

    .disable {
      color: ${({ theme }) => theme.color.N80};
    }

    .authorized {
      color: ${({ theme }) => theme.color.N60};
    }
  }
`;
