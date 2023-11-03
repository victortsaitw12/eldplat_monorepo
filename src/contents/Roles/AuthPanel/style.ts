import styled from "styled-components";

export const BodySTY = styled.div`
  padding: 1rem;
  flex: 10;
  /* Checkbox */
  .authCheckSet {
    display: flex;
    width: 100%;
    gap: 32px;
    label {
      width: 60px;
      font-size: ${({ theme }) => theme.fontSize.Paragraph300};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};
    }
  }
  .authCheckSet.isView {
    label {
      label {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
  /* infoBox */
  .info-title {
    width: 100%;
    background: ${({ theme }) => theme.color.N300};
    padding: 8px 16px;
  }
  ul {
    padding: 0;
    li {
      display: flex;
      flex-direction: row;
      align-items: flex-start !important; // TODO remove important after Sprint2
      padding: 8px 20px;
      border-bottom: 1px solid ${({ theme }) => theme.color.N300};

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
`;
