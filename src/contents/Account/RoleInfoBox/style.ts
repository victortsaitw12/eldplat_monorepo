import styled from "styled-components";

export const BodySTY = styled.div`
  width: 275px;
  padding: 1rem;
  .acc {
    &__btns {
      display: none;
    }
  }
  .acc {
    &__item {
      padding: 8px 0px;
    }
  }
  .accordion {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    label {
      margin: 0;
    }
    &__label {
    }
    &__btns {
    }
  }

  .role--view {
    padding: 6px 16px;
    .module {
      font-size: ${({ theme }) => theme.fontSize.Headline500};
      font-weight: ${({ theme }) => theme.fontWeight.Headline500};
    }
    .role {
    }
  }

  /* infoBox */
  .info_content {
    padding: 0;
  }
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
      margin-bottom: 20px;
      .infoBox__label {
        width: 100%;
        flex: unset;
        font-size: ${({ theme }) => theme.fontSize.Heading400};
        font-weight: ${({ theme }) => theme.fontWeight.Heading400};
      }
      .infoBox__value {
        width: 100%;
        flex: unset;
      }
    }
  }
`;
