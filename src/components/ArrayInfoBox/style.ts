import styled from "styled-components";

export const InfoBoxSTY = styled.div`
  width: 100%;
  min-height: 224px;
  background: #ffffff;
  border-radius: 10px;
  overflow: auto;
  padding: 35px 20px;
  & > .info-title {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    color: #567190;
    margin-bottom: 30px;
  }
  & ul li {
    list-style: none;
  }
  //純文字
  & > ul.info_content.type_text {
    > li {
      display: flex;
      font-size: 14px;
      margin-bottom: 20px;
      align-items: center;
      .req {
        color: #d14343;
      }
      span:first-child {
        flex: 1;
      }
      span:last-child {
        flex: 3;
      }
      & > div {
        display: flex;
        flex: 3;
        margin-bottom: 0;
        gap: 10px;
        & > div {
          flex-direction: column;
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
      /* flex: 1; */
      width: 50%;
      margin: 6px 0;
      > label {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }
`;
