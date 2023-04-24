import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.screen.laptop};
  height: 100vh;
  margin: 0 auto;

  select {
    margin: 10px;
  }
`;
