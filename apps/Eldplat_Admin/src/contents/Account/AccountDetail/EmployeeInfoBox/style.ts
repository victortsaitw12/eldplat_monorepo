import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  grid-column: 2 / -1;
  grid-row: 1/2;

  .org {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    position: relative;
    &__select {
      select {
        width: 240px;
      }
      .basic-multi-select {
        height: 32px;
      }
    }
    &__value {
      width: 100%;
      margin-top: 8px;
      color: ${({ theme }) => theme.color.N300};
      font-size: ${({ theme }) => theme.fontSize.Paragraph200};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
      white-space: nowrap;
      overflow: visible;
      padding: 8px 12px;
    }
  }

  /* infoBox */
  .infoBox__container {
    height: 100% !important;

    .info-title {
      width: 100%;
      padding: 8px 16px;
    }
    ul {
      padding: 20px;
      height: 100% !important;

      li {
        display: flex;
        flex-direction: column;
        align-items: flex-start !important;
        gap: 8px;
        margin-bottom: 19px;

        .infoBox__label {
          width: 100%;
          max-height: 19px;
          flex: unset;
          color: ${({ theme }) => theme.color.N300};
          font-size: ${({ theme }) => theme.fontSize.Paragraph200};
          font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
        }
        .infoBox__value {
          width: 100%;
          max-width: 280px;
          /* max-height: 38px; */
          flex: unset;
          color: ${({ theme }) => theme.color.N800};
          font-size: ${({ theme }) => theme.fontSize.Paragraph300};
          font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};

          input {
            font-size: ${({ theme }) => theme.fontSize.Paragraph300};
            color: ${({ theme }) => theme.color.N300};
          }
        }
      }
    }
  }
`;
