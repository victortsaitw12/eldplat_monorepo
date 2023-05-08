import styled from "styled-components";
import { ShiftSTY } from "../style";

export const ViewSTY = styled(ShiftSTY)<{ isOpenDrawer?: boolean }>`
  .wrap {
    width: ${(props) => (props.isOpenDrawer ? "calc(100% - 300px)" : "100%")};
    transition: width 0.2s ease-in-out;
  }
  .pageContent {
    display: flex;
    flex-direction: column;
  }
  .drawer__content {
    overflow: hidden;
    padding: 20px;
    .drawer__btn {
      height: 32px;
      width: 100%;
      background: ${({ theme }) => theme.color.B400};
      color: ${({ theme }) => theme.color.N0};
      border: none;
      border-radius: 32px;
      cursor: pointer;
    }
    .startRow__time,
    .endRow__time {
      display: flex;
      flex-direction: row;
      gap: 8px;
      span {
        line-height: 32px;
      }
    }
    .typeRows {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    section {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      gap: 12px;

      label {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 8px;
        svg {
          fill: ${({ theme }) => theme.color.N700};
        }
      }
      input {
        width: 100%;
        height: 32px;
      }
      select {
        width: 100%;
        height: 32px;
      }
      span {
        min-width: 4px;
      }
    }
  }
`;
