import styled from "styled-components";

export const InfoBoxSTY = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0;
  background: ${({ theme }) => theme.color.N0};
  border: 1px solid ${({ theme }) => theme.color.N40};
  border-radius: 4px;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);

  .info_title {
    display: inline-block;
    width: 100%;
    padding: 8px 16px;
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

  .info_content {
    //純文字
    &.type_text {
      > li {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-bottom: 20px;
        .req {
          color: ${({ theme }) => theme.color.R400};
        }

        & > div {
          display: flex;
          flex: 3;
          margin-bottom: 0;
          gap: 10px;
          & > div {
            width: 100%;
          }
        }
        .infoBox__label {
        }
        .infoBox__value {
        }
      }
    }

    //標籤
    &.type_label {
      display: flex;
      gap: 4px;
      > li {
        padding: 4px 8px;
        background: #e2edff;
        border-radius: 8px;
      }
    }

    //checkbox
    &.type_checkbox {
      display: flex;
      flex-wrap: wrap;
      > li {
        width: 50%;
        margin: 6px 0;
        > label {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    }
  }
`;
