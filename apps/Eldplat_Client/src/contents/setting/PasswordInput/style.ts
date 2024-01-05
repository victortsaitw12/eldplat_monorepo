import styled from "styled-components";

const gap = "8px";
const inputH = "32px";
const labelH = "18px";

export const DivSTY = styled.div<{ hasLabel: boolean }>`
  position: relative;
  input {
    letter-spacing: 2px;
  }
  .icon {
    position: absolute;
    transform: translateY(
      ${(props) => (props.hasLabel ? "calc(18px / 2 + 8px  + 16px)" : "16px")}
    );
    right: 12px;
    z-index: 999;
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.color.N100};
    }
  }
`;
