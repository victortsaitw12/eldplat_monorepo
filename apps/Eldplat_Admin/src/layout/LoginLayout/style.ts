import styled from "styled-components";

const BodySTY = styled.div`
  display: grid;
  height: 100vh;
`;

const ContainerSTY = styled.div`
  background: ${({ theme }) => theme.color.N20};
  display: flex;
  flex-direction: column;
  z-index: 2;
  .content {
    flex-grow: 1;
    overflow: auto;
  }
  overflow: auto;
  overflow: hidden;
`;

export { BodySTY, ContainerSTY };
