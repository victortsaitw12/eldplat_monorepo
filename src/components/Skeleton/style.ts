import styled from "styled-components";

export const DivSTY = styled.div`
  min-width: 140px;
  width: 100%;
  min-height: 2rem;
  height: 1em;
  gap: 0.5rem;
  background: linear-gradient(
    45deg,
    rgba(240, 240, 240, 0.5) 25%,
    rgba(240, 240, 240, 0.5) 50%,
    rgba(240, 240, 240, 0.5) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5ms infinite;
  border-radius: 4px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
