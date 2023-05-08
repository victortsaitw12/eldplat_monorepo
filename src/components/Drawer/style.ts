import styled from "styled-components";

export const DrawerSTY = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-left: 10px;
  &::-webkit-scrollbar {
    display: none;
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
  }
`;
