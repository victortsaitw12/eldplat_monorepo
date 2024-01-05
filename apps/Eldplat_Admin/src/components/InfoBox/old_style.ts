import styled from "styled-components";

export const InfoBoxSTY = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.N0};
  border-radius: 10px;
  padding: 35px 20px;
  border: 1px solid ${({ theme }) => theme.color.N40};

  h4 {
    color: ${({ theme }) => theme.color.N700};
  }
  & > .info-title {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    color: #567190;
    margin-bottom: 30px;
  }
  & ul {
    margin: 0;
  }
  & ul li {
    list-style: none;
  }
  //純文字
  & > ul.info_content.type_text {
    > li {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-bottom: 20px;
      .req {
        color: #d14343;
      }
      & > span:first-child {
        flex: 1;
      }
      & > span:last-child {
        flex: 3;
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
    }
  }
  //標籤
  & > ul.info_content.type_label {
    display: flex;
    gap: 4px;
    > li {
      padding: 4px 8px;
      background: #e2edff;
      border-radius: 8px;
    }
  }
  //checkbox
  & > ul.info_content.type_checkbox {
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
  /* --- V2 --- */
  width: 100%;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-radius: 4px;
  padding: 0;
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);

  .info-title {
    width: 100%;
    background: ${({ theme }) => theme.color.N20};
    padding: 8px 16px;
    margin-bottom: 0;
  }
  ul {
    li {
      .infoBox__label {
      }
      .infoBox__value {
      }
    }
  }

  /* --- V2 --- */
`;
