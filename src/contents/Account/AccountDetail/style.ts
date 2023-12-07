import styled from "styled-components";

export const FormSTY = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr;
  height: calc(100% - 20px);
  width: 100%;

  .role {
    grid-column: 1 / -1;
    grid-row: 2/-1;
    width: 100%;
  }
`;
