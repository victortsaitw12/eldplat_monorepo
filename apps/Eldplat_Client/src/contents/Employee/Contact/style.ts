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
      .address__form {
        max-width: 280px;
        display: flex;
        gap: 6px;
        margin: 6px 0;
        &:first-child {
          margin-top: 0;
        }
        .label {
          width: 20%;
          font-weight: 400;
          font-size: 12px;
          transform: translateY(6px);
        }
        .input {
          flex: 10;
        }
      }
    }
  }
`;
