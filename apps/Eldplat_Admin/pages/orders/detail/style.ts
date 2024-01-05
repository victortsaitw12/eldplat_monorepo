import styled from "styled-components";

export const BodySTY = styled.div`
  .header {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  table {
    background-color: pink !important;
    border: 1px solid red;
  }

  @media (max-width: 1280px) {
    .info-wrapper {
      flex-direction: row;
    }
    .header {
      grid-template-rows: auto auto; /* Two rows of auto height */
      grid-template-columns: 2fr 1fr; /* One column that takes up the available space */
      gap: 10px;
    }

    .item:nth-child(2) {
      grid-column: 1;
    }
    .item:nth-child(3) {
      grid-row: 1;
      grid-column: 2;
    }
  }
`;
