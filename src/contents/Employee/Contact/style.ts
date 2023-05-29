import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 1fr 3fr;
      margin: 16px auto;
      align-items: center;

      span {
        font-size: 14px;
        font-weight: 700;
        color: #567190;
      }
      input {
        border: 1px solid #afc3da;
      }

      .required {
        &::before {
          content: "*";
          color: red;
          margin-right: 4px;
        }
      }

      // 手機號碼 和 緊急連絡人手機樣式
      .phone-input {
        width: 280px;
        display: flex;

        .country-number {
          width: 20%;
          margin-right: 6px;
        }
        .phone-number {
          width: 80%;
        }
      }
    }

    // 地址區域樣式
    .address-frame {
      align-items: flex-start;

      .address {
        .first-address,
        .second-address {
          p {
            font-weight: 400;
            font-size: 12px;
          }
        }
      }

      .city-and-district {
        display: grid;
        grid-template-columns: 1fr 1fr;

        p {
          font-weight: 400;
          font-size: 12px;
        }
        .ub-mb_24px {
          margin-bottom: 0px;
        }

        .city,
        .district {
          /* margin-top: -10px; */
          /* margin-bottom: 0px !important; */
          /* margin-bottom: 36px; */
        }
      }

      .zip-and-country {
        display: grid;
        grid-template-columns: 1fr 1fr;

        p {
          font-weight: 400;
          font-size: 12px;
        }
        .country {
          /* margin-top: -8px; */
        }
        input {
          width: 100%;
        }
      }
    }
  }
`;
