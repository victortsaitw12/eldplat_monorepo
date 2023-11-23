import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  flex: 10;
  .disabled {
    background: ${({ theme }) => theme.color.N40};
  }
  .hide {
    display: none;
  }
  .authFunc {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .label {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .toggleBtn {
        cursor: pointer;
        padding: 10px;
        /* svg {
          height: 16px;
          width: 16px;
        } */
      }
    }
    &__contents {
      display: flex;
      flex-direction: column;
      .authFunc__element {
        display: flex;
        .label {
          padding-left: 100px;
        }
        .value {
        }
        .value > div {
          gap: 32px;
          display: flex;
        }
      }
    }
    &__item {
      height: 52px;
      align-items: center;
      display: flex;
      padding: 8px 16px;
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      .label {
        flex: 1;
      }
      .value {
        flex: 2;
        display: flex;
        justify-content: flex-end;
      }
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
