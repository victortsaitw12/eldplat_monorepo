import styled from "styled-components";

export const BodySTY = styled.div`
  select {
    height: 34px;
    & + svg {
      margin-top: -10px;
      height: 20px;
      width: 20px;
      border-radius: 4px;
      background: ${({ theme }) => theme.color.N100};
      & path {
        transform: scale(0.8) translateX(2px) translateY(2px);
      }
    }
  }
  .type_label > li {
    padding: 0 !important;
    background: transparent !important;
  }
`;
