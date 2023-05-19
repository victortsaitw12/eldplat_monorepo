import styled from "styled-components";

export const BodySTY = styled.div`
  .form {
    .input-line {
      min-height: 32px;
      display: grid;
      grid-template-columns: 2fr 3fr;
      margin: 16px auto;
      align-items: center;
      position: relative;

      span {
        font-size: 14px;
        font-weight: 500;
        color: #567190;
      }
      input {
        border: 1px solid #afc3da;
        width: 100%;
      }

      .license-file-btn {
        display: flex;
        justify-content: flex-start;
        color: #ffffff;
        background-color: #3670c9;
        width: 124px;
        height: 32px;
        border-radius: 32px;
      }
      .licnFileBox {
        min-height: 75px;
        width: 270px;
        padding: 19.5px 10px;
        border: 1px solid #afc3da;
        border-radius: 5px;
        margin-top: 10px;
        display: grid;
        grid-template-columns: 36px 1fr;
        gap: 20px;
        .mediaIcon {
          grid-column: 0/1;
          grid-row: 1/-1;
          width: 36px;
          height: 36px;
          background: ${({ theme }) => theme.color.N200};
          border: none;
          border-radius: 5px;
          svg {
            fill: ${({ theme }) => theme.color.N500};
          }
        }
        .licnFileInfo {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .fileSize {
            color: ${({ theme }) => theme.color.N500};
          }
        }
      }
    }
  }
`;
