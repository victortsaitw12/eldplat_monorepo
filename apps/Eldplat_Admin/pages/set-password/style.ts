import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.screen.laptop};
  height: 100vh;
  margin: 0 auto;
  .wrapper {
    width: 454px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  select {
    margin: 10px;
  }
`;
