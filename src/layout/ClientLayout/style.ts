import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.N20};
`;

const ContainerSTY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  overflow: auto;

  .content {
    max-width: 1240x;
  }

  .breadcrumbs {
    padding: 20px 0;
  }
`;

export { BodySTY, ContainerSTY };
