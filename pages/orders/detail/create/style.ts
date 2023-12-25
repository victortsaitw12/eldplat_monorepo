import styled from "styled-components";

const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 16px;
  font-weight: 600;

  position: relative;
  margin: 20px;
  line-height: 19px;

  .main-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .content {
    padding: 20px;
    border-radius: 0 0 4px 4px;
    overflow: visible;
    .label {
      color: ${({ theme }) => theme.color.N300};
    }
    .value {
      color: ${({ theme }) => theme.color.N800};
      font-weight: ${({ theme }) => theme.fontWeight.Heading100};
    }
    .col {
      flex: 1;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      gap: 24px;

      .fb-100 {
        flex-basis: 100%;
      }
      .fb-50 {
        flex-basis: calc((100% - 24px) / 2);
      }
      .fb-25 {
        flex-basis: calc((100% - 72px) / 4);
      }
      .fb-75 {
        flex-basis: calc((100% - 72px) / 4 * 3);
      }
      .fb-66 {
        flex-basis: calc((100% - 24px) / 3 * 2);
      }
      .fb-33 {
        flex-basis: calc((100% - 24px) / 3);
      }

      .m-0 {
        margin: 0;
      }
      .mt-1 {
        margin-top: 14px;
      }
      .mt-2 {
        margin-top: 28px;
      }
      .mb-1 {
        margin-bottom: 14px;
      }
      .mb-1 {
        margin-bottom: 14px;
      }
      .mb-2 {
        margin-bottom: 28px;
      }
      .mb-3 {
        margin-bottom: 42px;
      }

      .gap-0 {
        gap: 0;
      }
    }
    hr {
      border-top: 1px solid ${({ theme }) => theme.color.N20};
    }
  }
`;

export { BodySTY };
