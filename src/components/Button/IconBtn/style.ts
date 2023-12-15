import styled from "styled-components";

export const DivSTY = styled.div`
  button {
    height: 36px;
    width: 36px;
    background: transparent !important;
    border: none;
    padding: 10px;
    svg {
      fill: ${({ theme }) => theme.color.N200};
    }
  }
`;
