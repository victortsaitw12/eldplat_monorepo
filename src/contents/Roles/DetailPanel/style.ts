import styled from "styled-components";

export const BodySTY = styled.div`
  width: 275px;
  padding: 1rem;

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
      align-items: flex-start !important; // TODO remove important after Sprint2
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
      .required {
        &::before {
          content: "*";
          color: red;
          margin-right: 4px;
        }
      }
    }
  }
`;
