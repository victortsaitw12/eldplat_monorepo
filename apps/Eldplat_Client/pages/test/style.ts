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
    }
    .current {
      background-color: #ffffff;
      border-radius: 10px 10px 0px 0px;
      margin-left: 24px;
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

  // Pane
  .pane {
    display: none;
  }
  .pane.current {
    display: block;
  }
`;
