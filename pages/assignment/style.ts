import styled from "styled-components";

export const BodySTY = styled.div`
  height: calc(100vh - 56px);
  .pageContent {
    height: 100%;
    width: 100%;
    position: relative;
    background: #ffffff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
    .tabs_wrapper {
      margin: 0 -20px;
    }
    .overviewContainer {
      overflow: scroll;
    }
  }
`;
