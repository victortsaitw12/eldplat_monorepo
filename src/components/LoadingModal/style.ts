import styled from "styled-components";

export const BackDropSTY = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const ModalSTY = styled.div`
  position: fixed;
  background: transparent;
  top: 50%;
  left: 50%;
  /* overflow-y: scroll; */
  transform: translate(-50%, -50%);
  z-index: 10;
`;
