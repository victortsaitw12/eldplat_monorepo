import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  .basic__lastName {
    flex: 1;
    max-width: 92px;
  }
  .basic__firstName {
    flex: 2;
    max-width: 136px;
  }
  .basic__photo {
    height: 150px;
    width: 120px;
    .basic__image {
      height: 150px;
      width: 120px;
      border: 1px solid ${({ theme }) => theme.color.N40};
      background: ${({ theme }) => theme.color.N60};
      svg {
        height: 100%;
        width: 100%;
        fill: ${({ theme }) => theme.color.N30};
        opacity: 0.5;
        transform: translateY(20px);
        path {
          align-self: baseline;
        }
      }
    }
  }

  /* infoBox */
  .infoBox__container {
    height: 100%;
    .info-title {
      width: 100%;
      padding: 8px 16px;
    }
    ul {
      padding: 20px;
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
          font-size: ${({ theme }) => theme.fontSize.Heading400};
          font-weight: ${({ theme }) => theme.fontWeight.Heading400};
        }
        .infoBox__value {
          width: 100%;
          max-width: 240px;
          max-height: 38px;
          flex: unset;
        }
      }
    }
  }
`;
