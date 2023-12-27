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
  .two-column {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  span.normal {
    font-size: ${({ theme }) => theme.fontSize.Paragraph100};
    font-weight: ${({ theme }) => theme.fontWeight.Paragraph100};
  }
  .content {
    padding: 20px;
    border-radius: 0 0 4px 4px;
    overflow: visible;
    .value {
      color: ${({ theme }) => theme.color.N800};
      font-weight: ${({ theme }) => theme.fontWeight.Heading100};
      width: 100%;
    }
    .row-container {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: flex-start;
      .label {
        color: ${({ theme }) => theme.color.N300};
        flex: 0 0 auto;
        width: 90px;
        text-align: right;

        &.bold {
          font-weight: 600;
          color: ${({ theme }) => theme.color.N700};
        }

        .required {
          color: ${({ theme }) => theme.color.R400};
        }
      }
    }
    .checkbox {
      margin: 14px 0;
    }

    .col {
      flex: 1;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: center;
      gap: 20px;

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

      .icon {
        position: absolute;
        left: 290px;
        color: ${({ theme }) => theme.color.N300};
      }
      .outer-icon {
        color: ${({ theme }) => theme.color.N300};
        margin-left: 5px;
      }
    }
    .m-0 {
      margin: 0;
    }
    .my-1 {
      margin: 14px 0;
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
    hr {
      border-top: 1px solid ${({ theme }) => theme.color.N20};
    }
  }
  .travel-column {
    .row .label {
      width: 120px;
      text-align: left;
      margin-right: 40px;
    }
    .col {
      flex-direction: column;
    }
  }
  .other-column {
    span.instruction-text {
      margin-left: 25px;
      font-size: ${({ theme }) => theme.fontSize.Paragraph200};
    }
    .col {
      gap: 0;
    }
    .checkbox span {
      color: ${({ theme }) => theme.color.N800};
      font-weight: ${({ theme }) => theme.fontWeight.Heading600};
    }
  }
  .checkbox span {
    font-size: ${({ theme }) => theme.fontSize.Paragraph200};
  }

  .price-column {
    input {
      text-align: right;
    }
    .content .row .label {
      text-align: left;
    }
    ul:nth-child(1) .item {
      font-size: ${({ theme }) => theme.fontSize.Heading600};
    }
  }
  .nowrap {
    white-space: nowrap;
  }
`;

export { BodySTY };
