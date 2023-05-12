import styled from "styled-components";
import { ShiftSTY } from "../style";

export const ViewIdSTY = styled(ShiftSTY)<{ isOpenDrawer?: boolean }>`
  .wrapMain {
    width: ${(props) => (props.isOpenDrawer ? "calc(100% - 300px)" : "100%")};
    transition: width 0.2s ease-in-out;
  }
  .pageContent {
    display: flex;
    flex-direction: column;
    .container-header-left {
      .red {
        color: ${({ theme }) => theme.color.R400};
      }
    }
  }
  .drawer__container {
    height: calc(100vh - 60px - 10px * 2);
    position: sticky;
    top: 0;
    .drawer__content {
      overflow: hidden;
      padding: 20px;
      border-radius: 10px;
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
  }
`;
