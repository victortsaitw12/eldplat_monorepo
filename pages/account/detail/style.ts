import styled from "styled-components";

export const BodySTY = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr;
  height: calc(100% - 20px);
  width: 100%;
  .basic {
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    &__photo {
      width: 120px;
      height: 150px;
    }
    &__data {
    }
    ul {
      display: grid;
      grid-template-columns: 120px 1fr;
      grid-template-rows: repeat(3, 1fr);
      column-gap: 40px;
    }
    ul :first-child {
      grid-column: 1 / 2;
      grid-row: 1 / -1;
    }
    ul :not(:first-child) {
      grid-column: 2/ 4;
    }
  }
  .employee {
    grid-column: 2 / -1;
    grid-row: 1/2;
  }

  .role {
    grid-column: 1 / -1;
    grid-row: 2/-1;
    width: 100%;
  }
`;
