import styled from "styled-components";

export const BodySTY = styled.div`
  margin: 10px;

  // 最上面標題欄
  .title-bar {
    .title-label {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      color: #567190;
      background-color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      border-radius: 10px 10px 0px 0px;
      margin-left: 24px;
      gap: 4px;
      &:before {
        content: "*";
        color: red;
      }
      &:after {
        content: "›";
        transform: rotate(90deg);
        margin-left: 4px;
      }
    }
    .right-function {
      color: #718baa;
      button {
        color: ${({ theme }) => theme.color.N700};
        background-color: transparent;
        border: none;
      }

      .save {
        &:hover {
          background-color: transparent;
        }
      }
    }
  }

  // 下方所有新增區塊
  .add-blocks {
    display: grid;
    grid-template-columns: 4fr 5fr;
    gap: 6px;
    .left-blocks,
    .right-blocks {
      > div {
        background-color: #ffffff;
        margin-bottom: 6px;
        padding: 30px 20px;
        gap: 20px;
        /* border: 1px solid #f1f6fd; */
        border-radius: 10px;

        h4 {
          color: #567190;
        }
      }
    }
  }
`;
