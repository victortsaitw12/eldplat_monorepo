import styled from "styled-components";

export const ZoombarSTY = styled.div<{ scale: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  .zoom-bar {
    height: 10px;
    box-sizing: border-box;
    width: 100px;
    height: 6px;
    background: #e2ecf7;
    border: 1px solid #d5e2f1;
    border-radius: 8px;
  }
  .zoom-controler {
    box-sizing: border-box;
    position: absolute;
    left: ${(props) =>
      props.scale === 100
        ? "calc(" + props.scale + "% - 8px)"
        : props.scale + "%"};
    width: 8px;
    height: 16px;
    background: #ffffff;
    border: 1.5px solid #d5e2f1;
    border-radius: 6px;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
  }
`;
