import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.N300};
`;

const ContainerSTY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  overflow: auto;
`;

export { BodySTY, ContainerSTY };
