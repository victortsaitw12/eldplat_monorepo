import styled from "styled-components";

export const BodySTY = styled.div`
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
`