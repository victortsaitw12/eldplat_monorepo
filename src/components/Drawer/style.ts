import styled from "styled-components";

export const DrawerSTY = styled.div`
  min-width: 280px;
  /* height: 100%; */
  height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll; */
  margin-left: 10px;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  &.fullscreen {
    width: 100%;
  }
  .drawer__content {
    width: 100%;
    position: relative;
    background-color: #fff;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    border-radius: 10px 10px 0 0;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
