import styled from "styled-components";

export const DivSTY = styled.div`
  .address__view {
    display: flex;
    margin-bottom: 6px;
  }

  .address__form {
    max-width: 270px;
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
