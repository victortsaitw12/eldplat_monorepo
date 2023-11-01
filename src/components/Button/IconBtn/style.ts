import styled from "styled-components";

export const DivSTY = styled.div`
  button {
    height: 36px;
    width: 36px;
    background: ${({ theme }) => theme.color.N100};
    border: none;
    padding: 10px;
    svg {
      fill: ${({ theme }) => theme.color.N700};
    }
  }
`;
