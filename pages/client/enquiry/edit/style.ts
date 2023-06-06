import styled from "styled-components";

export const BodySTY = styled.div`
  width: 100%;
  > .body-container {
    display: flex;
    gap: 20px;
    > .content-container {
      flex: 2 0 0;
      display: flex;
      flex-direction: column;
      gap: 50px;
      > .content-actions-container {
        display: flex;
        gap: 20px;
      }
    }
    .charge-container {
      flex: 1 0 0;
    }
  }
`;
