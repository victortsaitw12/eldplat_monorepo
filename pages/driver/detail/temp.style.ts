import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 600px; */
  height: calc(100% - 20px);
  margin: 10px;
  // 最上面標題欄
  .title-bar {
    .tab {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 12px;
      color: #567190;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      &:nth-child(1) {
        margin-left: 24px;
      }
    }
    .current {
      background-color: #ffffff;
      border-radius: 10px 10px 0px 0px;
      gap: 4px;
      &:after {
        content: "›";
        transform: rotate(90deg);
        margin-left: 4px;
      }
    }
    .right-function {
      color: #718baa;
      button {
        background-color: transparent;
        border: none;
      }
      .save {
        &:hover {
          background-color: #ffffff;
        }
      }
    }
  }

  // pane
  .pane {
    display: none;
  }
  .pane.current {
    display: block;
  }
  div {
    .left-wrap {
      div {
        &:nth-child(1) {
          margin-top: 0;
        }
      }
    }
    .right-wrap {
      div {
        &:nth-child(1) {
          margin-top: 0;
        }
      }
    }
  }

  // 下方所有新增區塊 (TEMP FOR REF)
  .content-blocks {
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
