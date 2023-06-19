import styled from "styled-components";

export const AlertSTY = styled.div`
  width: 488px;
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;
  h4 {
    font-weight: ${({ theme }) => theme.fontWeight.Heading400};
  }
  p {
    line-height: 1.5;
  }
`;
