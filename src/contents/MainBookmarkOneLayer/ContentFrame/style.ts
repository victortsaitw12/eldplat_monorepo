import styled from "styled-components";

export const BodySTY = styled.div`
  .sub-bookmark-background {
    display: flex;
    align-items: center;
    background-color: #f1f6fc;
    border-radius: 10px 10px 0 0;
    height: 50px;
    padding: 0 14px;

    .subBookmark {
      margin-right: 16px;
      display: flex;
      align-items: center;

      .select {
        position: relative;
        span {
          font-size: 14px;
          font-weight: 600;
          color: #59728e;
          padding: 6px;
          cursor: pointer;
        }

        // 第一個以外的下拉式卡牌
        .options-card {
          position: absolute;
          top: 36px;
          width: 200px;
          height: fit-content;
          background-color: #ffffff;

          .tag-input {
            height: 30px;
            display: flex;
            margin: 8px 7px;
            background-color: #ffffff;
            border-radius: 10px;

            strong {
              margin: 0 4px;
              padding: 6px 16px;
              font-size: 12px;
              color: #1952a8;
              background-color: #e2edff;
            }

            input {
              display: none;
            }
          }

          option {
            display: flex;
            margin: 14px;
            background-color: #f1f6fd;
            padding: 8px 16px;
            border-radius: 32px;
            font-size: 12px;
            font-weight: 400;
            color: #3a5779;
            cursor: pointer;
          }

          .buttons {
            margin: 12px;
            display: flex;
            justify-content: flex-end;

            button {
              margin: 0 2px;
              padding: 4px 12px;
              border-radius: 32px;
              border: none;
            }
            .cancel {
              color: #567190;
              background-color: #e2ecf7;
            }
            .confirm {
              color: #ffffff;
              background-color: #679def;
            }
          }
        }

        // 第一個下拉式卡牌
        .form-card {
          .form-card-first {
            position: absolute;
            top: 36px;
            width: 260px;
            height: fit-content;
            padding: 10px;
            border-radius: 16px;
          }

          /* 點了下拉式選單某個可以展開細節的樣式 */
          .form-card-second {
            position: absolute;
            top: 36px;
            left: 260px;
            width: 260px;
            height: fit-content;
            padding: 10px;
            border-radius: 16px;
            background-color: #ffffff;

            .second-level-options {
              color: #567190;
              font-weight: 600;
              font-size: 14px;
              line-height: 19px;
              padding: 12px 16px;
              cursor: pointer;

              &:not(:last-child) {
                border-bottom: 1px solid #d5e2f1;
              }
              &:hover {
                background-color: #e2ecf7;
                border-radius: 10px;
              }

              p {
                font-size: 12px;
                font-weight: 400;
                color: #567190;
              }
            }
          }
        }
      }
    }
  }
`;

export const OptionSTY = styled.div<{ index?: number }>`
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: ${({ index }) =>
    index === 0 || index === 2 || index === 4 ? "1px solid #d5e2f1" : "none"};

  option {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #567190;
  }

  &:hover {
    background-color: #e2ecf7;
    border-radius: 10px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #567190;
  }
`;
