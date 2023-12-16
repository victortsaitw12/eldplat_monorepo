import styled from "styled-components";

export const FormSTY = styled.form`
  padding: 1rem;

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
        margin-bottom: 0 !important;

        .infoBox__label {
          width: 100%;
          max-height: 19px;
          flex: unset;
          font-size: ${({ theme }) => theme.fontSize.Heading400};
          font-weight: ${({ theme }) => theme.fontWeight.Heading400};
        }
        .infoBox__value {
          width: 100%;
          max-width: 240px;
          flex: unset;
        }
      }
    }
  }
`;
