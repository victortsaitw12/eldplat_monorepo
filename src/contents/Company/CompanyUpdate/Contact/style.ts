import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin: 16px auto;
      span {
        font-size: 14px;
        font-weight: 600;
        color: #567190;
      }

      .phone-input {
        display: flex;
        .country-number {
          width: 20%;
          margin-right: 10px;
        }
        .tel,
        .contact-tel,
        .contact-phone {
          width: 60%;
        }
        p {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }
      }

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
        .city,
        .company_area {
          margin-top: -10px;
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
          margin-top: -10px;
        }
        input {
          width: 100%;
        }
      }

      .contact-first {
        button {
          width: fit-content;
          background-color: transparent;
          border: none;
          margin-left: 6px;

          &:hover {
            background-color: transparent !important;
            border: none !important;
          }
        }
      }
    }
    .required {
      &::before {
        content: "*";
        color: red;
        margin-right: 4px;
      }
    }

    button {
      width: 112px;
      height: 32px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #ffffff;
      background: #3670c9;
      border-radius: 32px;

      &:hover {
        background: #1952a8 !important;
      }
    }
  }
`;
