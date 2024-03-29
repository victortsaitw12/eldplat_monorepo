import styled from "styled-components";

const BodySTY = styled.div`
  select {
    height: 32px;
    min-width: 74px;
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
    &[disabled] {
      opacity: 1;
      border-color: #d8dae5;
      color: #696f8c;
      background-color: #f4f5f9;
    }
  }
`;
export { BodySTY };
