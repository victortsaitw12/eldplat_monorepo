import styled from "styled-components";

const checkboxWidth = 36;
const freezeColWidth = 72;

export const TableSTY = styled.div<{ isExpand: boolean }>`
  ${({ isExpand }) => `
    --cellWidth: ${isExpand ? "140px" : "72px"};
  `}
  height: 100%;
  width: fit-content;
  .reminder {
    animation: 200ms ease-out 200ms infinite alternate reminder;
    /* animation-delay: 200ms;
    animation-timing-function: ease-out;
    animation-duration: 200msr; */
  }
  .eg-table {
    width: fit-content;
    height: calc(100% - 32px);
    position: relative;
    text-align: center;
    white-space: nowrap;
    border: none; //overwrite evergreen-ui default
    .eg-head {
      width: fit-content;
      border: 1px solid ${({ theme }) => theme.color.N300};
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      .eg-th {
        border-left: 1px solid ${({ theme }) => theme.color.N300};
        &:first-child {
          border-left: none;
          border-top-left-radius: 10px;
        }
        span {
          padding: 0px 4px;
        }
      }
      .weekend {
        color: ${({ theme }) => theme.color.R300};
        background-color: ${({ theme }) => theme.color.R50};
      }
    }
    .eg-body {
      height: 100%;
      &::-webkit-scrollbar {
        display: none;
      }
      .eg-bodyRow {
        border: 1px solid ${({ theme }) => theme.color.N300};
        border-top: none;
        background-color: transparent; //overwrite evergreen-ui
        &:last-child {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        &:hover {
          background-color: ${({ theme }) => theme.color.N100};
        }
        .eg-td {
          flex: unset !important;
          border-left: 1px solid ${({ theme }) => theme.color.N300};
          &:first-child {
            border-left: none;
            border-bottom-left-radius: 10px;
          }
          span {
            .eventTag-container {
              display: flex;
              flex-direction: row;
              justify-content: center;
              flex-wrap: nowrap;
              flex-grow: 1;
              button {
                width: 100%;
                margin-right: 2px;
                padding: 4px 0px;
              }
              svg {
                min-width: 16px;
              }
            }
          }
        }
      }
      .hidden {
        display: none;
      }
    }

    /* -----row height----- */
    .eg-head,
    .eg-bodyRow {
      height: 32px;
    }
    /* -----align head and body cells----- */
    .eg-td,
    .eg-th {
      width: var(--cellWidth);
      min-width: var(--cellWidth);
      padding: 4px;
      display: flex;
      flex-direction: row;
      div {
        /* <Checkbox /> */
        align-self: center;
        margin: 0 auto;
      }

      &:nth-child(-n + 2) {
        /* position: sticky; */
        left: ${checkboxWidth + "px"};
        min-width: ${freezeColWidth + "px"};
        background: inherit;
        z-index: 99;
      }
      &:nth-child(1) {
        /* position: sticky; */
        left: 0;
        max-width: ${checkboxWidth + "px"};
        min-width: ${checkboxWidth + "px"};
        height: 100%;
      }
    }
  }
  .shift-btn {
    width: ${({ isExpand }) => (isExpand ? "100%" : "unset")};
    max-width: 100%;
    max-height: 100%;
    min-width: calc((100% - 2px * 2) / 3);
    flex-grow: 1;
    svg {
      fill: #fff;
    }
    span {
      display: ${({ isExpand }) => (isExpand ? "inline" : "none")};
    }
  }
  .noResultMsg {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
