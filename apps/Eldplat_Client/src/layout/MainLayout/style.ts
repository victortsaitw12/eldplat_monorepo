import styled from "styled-components";

const BodySTY = styled.div<{ showMenu: boolean }>`
  display: grid;
  /* grid-template-columns: 240px 1fr; */
  grid-template-columns: ${({ showMenu }) =>
    showMenu ? "240px 1fr" : "80px 1fr"};
  height: 100vh;
  .text {
    display: ${({ showMenu }) => (showMenu ? "unset" : "none")};
  }
  .user__info {
    padding: ${({ showMenu }) => (showMenu ? "0px 12px" : "0")};
  }
`;

const ContainerSTY = styled.div`
  background-color: #d6e2f0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  .content {
    flex-grow: 1;
    background-color: ${({ theme }) => theme.color.N0};
    overflow: auto;
  }
  overflow: auto;
  overflow: hidden;
`;

export { BodySTY, ContainerSTY };
