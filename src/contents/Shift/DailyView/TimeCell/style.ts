import styled from "styled-components";

export const TimeCellSTY = styled.div`
  min-width: 70px;
  position: relative;
  button {
    cursor: pointer;
    &:hover {
      opacity: 1;
      margin-left: 5px;
      margin-right: 5px;
      border-radius: 4px;
    }
    &.start {
      opacity: 1;
      margin-left: 5px;
      border-radius: 4px 0 0 4px;
    }
    &.through {
      opacity: 1;
      border-radius: 0;
      svg {
        opacity: 0;
      }
    }
    &.end {
      opacity: 1;
      margin-right: 5px;
      border-radius: 0 4px 4px 0;
      svg {
        opacity: 0;
      }
    }
    &.selected {
      opacity: 1;
      margin-left: 5px;
      margin-right: 5px;
      border-radius: 4px;
    }
  }
`;
