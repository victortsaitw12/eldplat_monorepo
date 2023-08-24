import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  height: calc(100% - 20px);
  margin: 10px;
  div.infoBox__label {
    flex: 1 !important;
    height: 32px;
    align-self: flex-start;
    span {
      line-height: 32px;
    }
  }
  div.infoBox__value {
    flex: 2 !important;
    select {
      height: 32px;
    }
  }
`;
