import styled from "styled-components";

export const BodySTY = styled.div`
  width: 275px;
  padding: 1rem;
  .disabled {
    select {
      background: ${({ theme }) => theme.color.N20};
      color: ${({ theme }) => theme.color.N80};
    }
  }

  /* infoBox */
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
        input {
          width: 100%;
        }
        textarea {
          font-size: ${({ theme }) => theme.fontSize.Paragraph300};
        }
      }
    }
  }
`;
