import styled from "styled-components";

export const BodySTY = styled.div`
  .wrapper {
    padding: 0 20px;
    display: flex;
    gap: 20px;

    .main-column {
      flex: 1;

      .no-data {
        padding: 0;
      }

      .list-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;

        font-size: 16px;
      }
    }
  }
`;
