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
        max-width: 270px;
        display: flex;
        gap: 8px;
        margin: 6px 0;
        .prefix {
          width: 60px;
        }
        .tel,
        .contact-tel,
        .contact-phone,
        .zipcode,
        .country,
        .city,
        .addressArea {
          flex: 10;
        }
        p {
          display: flex;
          align-items: center;
          margin-right: 10px;
        }
      }

      .address {
        label {
          font-weight: 400;
          font-size: 12px;
          transform: translateY(6px);
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
