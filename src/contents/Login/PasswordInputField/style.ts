import styled from "styled-components";

export const DivSTY = styled.div`
  position: relative;
  input {
    letter-spacing: 2px;
  }
  .icon {
    position: absolute;
    transform: translateY(calc(9px + 8px + 16px));
    right: 12px;
    z-index: 999;
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.color.N100};
    }
  }
`;
