import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 16px auto;
      span {
        font-size: 14px;
        font-weight: 600;
        color: #567190;
      }

      .address {
        .company_area_city,
        .company_country_code {
          display: flex;
          span {
            margin: 4px 12px 0px 0;
          }
        }
      }

      // 主要聯絡人電話那邊
      .contact-phone-detail {
        display: flex;
        flex-wrap: wrap;
        span {
          width: 100%;
          margin-bottom: 6px;
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
  }
`;