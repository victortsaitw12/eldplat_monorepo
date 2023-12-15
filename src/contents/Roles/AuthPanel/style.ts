import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  flex: 10;
  .authPanel__control {
    padding: 8px 16px;
    .group {
      width: fit-content;
      display: flex;
      gap: 8px;
    }
  }

  /* infoBox */
  .infoBox__container {
    .info-title {
      width: 100%;
      padding: 8px 16px;
    }
    ul {
      padding: 0;
      li {
        margin: 0;
        margin-bottom: 0 !important;
        display: flex;
        flex-direction: row;
        align-items: flex-start !important; // TODO remove important after Sprint2
        .infoBox__label {
          width: 100%;
          flex: unset;
          font-size: ${({ theme }) => theme.fontSize.Paragraph300};
          font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};
        }
        .infoBox__value {
          width: 100%;
          flex: unset;
          .checkbox-title {
            white-space: nowrap;
          }
          label {
            margin: 0px;
            gap: 12px;
          }
        }
      }
    }
  }
`;
