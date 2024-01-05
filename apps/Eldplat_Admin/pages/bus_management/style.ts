import styled from "styled-components";

export const BodySTY = styled.div`
  .wrapper {
    padding: 0 20px;

    .main-column {
      display: flex;
      gap: 20px;

      .fb-33 {
        flex-basis: calc((100% - 40px) / 3);
      }

      .fb-66 {
        flex-basis: calc((100% - 40px) / 3 * 2);
      }
    }

    .no-data {
      padding: 0;
    }

    .list-wrapper {
      display: flex;
      flex-direction: column;
      gap: 24px;

      font-size: 16px;

      .list-item {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .list-title {
          color: ${({ theme }) => theme.color.N800};
        }

        .list-content {
          font-size: 14px;
          color: ${({ theme }) => theme.color.N300};
        }
      }
    }
  }
`;
