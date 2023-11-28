import styled from "styled-components";

export const BodySTY = styled.div`
  > div {
    margin: 0;
    .input {
      width: 90%;
      max-width: 240px;
      font-size: 16px;
      color: ${({ theme }) => theme.color.N100};
    }
    > div {
      margin: 0;
      > div {
        display: none;
      }
    }
  }
`;
