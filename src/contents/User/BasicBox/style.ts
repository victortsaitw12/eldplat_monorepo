import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  .basic__lastName {
    max-width: 92px;
  }
  .basic__firstName {
    max-width: 136px;
  }
  .basic__photo {
    max-height: 150px;
  }

  /* infoBox */
  .info-title {
    width: 100%;
    background: ${({ theme }) => theme.color.N300};
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
`;
