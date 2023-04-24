import styled from "styled-components";

const BodySTY = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  height: 100vh;
`;

const ContainerSTY = styled.div`
  background-color: #d6e2f0;
  display: flex;
  flex-direction: column;
  .content {
    flex-grow: 1;
    background-color: ${({ theme }) => theme.color.N300};
  }
  overflow: auto;
`;

export { BodySTY, ContainerSTY };
