import styled from "styled-components";

export const BodySTY = styled.div`
  height: 100%;
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  &::-webkit-scrollbar {
    display: none;
  }
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
    }
  }
  .search-container {
    height: 100%;
    width: 280px;
    background-color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 10px;
    .search-field {
      width: 100%;
      border-radius: 100px;
    }
    .search-result {
      padding: 10px;
      padding-left: 0px;
      cursor: pointer;
      &:hover {
        background-color: #f1f6fd;
      }
      .red {
        color: red;
      }
    }
  }
`;
