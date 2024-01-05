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
  .content {
    flex-grow: 1;
    padding: 24px 100px;
  }
  overflow: auto;
`;

export { BodySTY, ContainerSTY };
