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
  .infoBox {
    .infoBox__label {
      flex: 1 !important;
    }
    .infoBox__value {
      flex: 2 !important;
    }
  }
  .address__view {
    display: flex;
    margin-bottom: 6px;
  }

  .address__form {
    max-width: 320px;
    display: flex;
    gap: 8px;
    margin: 6px 0;
    &:first-child {
      margin-top: 0;
    }
    .label {
      width: 60px;
      font-weight: 400;
      font-size: 12px;
      transform: translateY(6px);
    }
    .input {
      flex: 10;
    }
  }
`;
