import styled from "styled-components";
// import { ShiftSTY } from "../style";

export const ViewIdSTY =styled.div`
  line-height: 16px;
  width: 100%;
  height: calc(100vh - 56px);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  .pageContent {
    height: 100%;
    width: 100%;
    position: relative;
    background: #FFFFFF;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`;
