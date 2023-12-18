import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  /* width: 600px; */
  height: calc(100% - 20px);
  margin: 10px;
  .title-bar {
    margin-bottom: -1rem;
  }
  & > div {
    border: none;
  }
  .infoBox__label {
    flex: 1 !important;
    height: 32px;
    align-self: flex-start;
    span {
      line-height: 32px;
    }
  }
  .infoBox__value {
    flex: 2 !important;
    flex-direction: column;
    div,
    input {
      max-width: 270px;
    }
    select {
      height: 32px;
    }
  }
`;
