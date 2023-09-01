import styled from "styled-components";

export const DivSTY = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.N100};
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  animation: 1.5s shine linear infinite;
  background-size: 200% 100%;
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
