import styled from "styled-components";

export const InfoCardSTY = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 177px;
  padding: 0;
  background: ${({ theme }) => theme.color.N0};
  border: 1px solid ${({ theme }) => theme.color.N40};
  border-radius: 4px;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);

  .title {
    display: inline-block;
    width: 100%;
    padding: 8px 16px;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.N300};
    background: ${({ theme }) => theme.color.N20};
  }

  ul {
    margin: 0;
    li {
      list-style: none;
    }
  }

  .content {
    padding: 20px;
    border-radius: 0 0 4px 4px;

    display: flex;
    gap: 40px;

    .user__photo {
    }

    .col {
      flex-grow: 1;

      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .item {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 8px;

          font-size: 14px;
          margin-bottom: 20px;
          color: ${({ theme }) => theme.color.N800};

          .label {
            color: ${({ theme }) => theme.color.N300};

            &.bold {
              font-weight: 600;
              color: ${({ theme }) => theme.color.N700};
            }

            .req {
              color: ${({ theme }) => theme.color.R400};
            }
          }
          .value {
            color: ${({ theme }) => theme.color.N300};

            .select-wrapper {
              width: 90%;
              max-width: 240px;
              select {
                font-size: 16px;
              }
            }

            .create-button {
              padding: 4px 8px;
            }

            .inline-alert {
              div {
                margin-right: 4px;
              }
            }

            .upload-button {
              gap: 8px;
            }

            .comment-textarea {
              textarea {
                font-size: 14px;
              }

              .hint {
                text-align: right;
                font-size: 12px;
              }
            }
          }
        }

        .fb-100 {
          flex-basis: 100%;
        }
        .fb-50 {
          flex-basis: 50%;
        }
        .fb-33 {
          flex-basis: 100% / 3;
        }
        .fb-25 {
          flex-basis: 25%;
        }

        .m-0 {
          margin: 0;
        }

        .gap-0 {
          gap: 0;
        }
      }
    }
  }
`;
