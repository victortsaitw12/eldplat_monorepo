import styled from "styled-components";

export const InfoBoxSTY = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 35px 20px;

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
  /* --- wait until the end of sprint2, */
  /* --- we'll know if a similar <InfoBoxWrapper/> is needed */

  width: 100%;
  height: fit-content;
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-radius: 4px;
  padding: 0;

  .info-title {
    width: 100%;
    background: ${({ theme }) => theme.color.N300};
    padding: 8px 16px;
  }
  ul {
    padding: 20px;
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start !important; // TODO remove important after Sprint2
      .infoBox__label {
        width: 100%;
        flex: unset;
        font-size: ${({ theme }) => theme.fontSize.Heading400};
        font-weight: ${({ theme }) => theme.fontWeight.Heading400};
      }
      .infoBox__value {
        width: 100%;
        flex: unset;
      }
      .required {
        &::before {
          content: "*";
          color: red;
          margin-right: 4px;
        }
      }
    }
  }

  /* --- V2 --- */
`;
