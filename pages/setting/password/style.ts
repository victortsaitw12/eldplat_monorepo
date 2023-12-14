import { InlineAlert } from "evergreen-ui";
import styled from "styled-components";

export const BodySTY = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr;
  height: calc(100% - 20px);
  width: 100%;
  .inlineAlert {
    grid-row: 2/3;
    align-self: start;
    padding: 0 20px;
  }
`;
