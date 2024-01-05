import styled from "styled-components";

export const EquipmentOverviewSTY = styled.div`
  display: flex;

  & > div {
    width: 100%;
  }

  .rightBar {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;

    .top,
    .bottom {
      /* he: 100%; */
    }

    .top {
      padding: 1rem;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

      .content {
        margin: 2rem 0;

        span {
          display: block;
          margin-bottom: 0.5rem;
        }

        .userBox {
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;

          .userInfoContainer,
          .userQRcodeContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
          }

          .userInfoContainer {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);

            .userInfo {
              display: flex;
            }

            button {
              cursor: pointer;
              background: transparent;
              border: 1px solid rgba(0, 0, 0, 0.1);
              border-radius: 5px;
              padding: 1rem;
            }
          }

          .userQRcodeContainer {
            .checkContainer {
              display: flex;
              align-items: baseline;
            }

            a {
              cursor: pointer;
            }
          }
        }
      }

      .footer {
        padding: 1rem;
        .content {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .userText {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    .bottom {
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

      & > div {
        margin: 10%;

        .icon {
          text-align: center;
          margin-bottom: 10%;
        }

        .description {
          a {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
