import styled from "styled-components";

export const DivSTY = styled.div`
  height: 100%;
  /* 全部input欄位寬度 */
  .infoBox {
    .infoBox__label {
      flex: 1 !important;
    }
    .infoBox__value {
      flex: 2 !important;
      input {
        width: 100%;
      }
      span > label {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }

  /* 駕駛履歷標籤 <TagSelect/> */
  .view-tags {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    gap: 8px;
    div {
      color: #1952a8;
      background-color: ${({ theme }) => theme.color.B100};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 8px 4px 8px;
      border-radius: 8px;
    }
  }
  .option-tags {
    position: absolute;
  }

  /* 駕駛證照上傳檔案 */
  .license-file-container {
    .license-file-btn {
      display: flex;
      justify-content: flex-start;
      color: #ffffff;
      background-color: #3670c9;
      width: 124px;
      height: 32px;
      border-radius: 32px;
    }
    .drop-field {
      border: 1px solid ${({ theme }) => theme.color.N400};
      border-radius: 4px;
    }
  }

  .licnFileBox {
    min-height: 75px;
    width: 270px;
    padding: 19.5px 10px;
    border: 1px solid #afc3da !important;
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
`;
