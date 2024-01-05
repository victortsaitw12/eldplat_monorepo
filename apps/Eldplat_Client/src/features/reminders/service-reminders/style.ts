import styled from "styled-components";

export const PopoverSTY = styled.div`
  &.fast-search-popover {
    width: 400px;
    padding: 15px;

    .search-result-list {
      width: 100%;
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button-wrap {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 10px;

      .button {
        &.cancel {
          cursor: pointer;
        }
      }
    }
  }

  &.view-mode {
    box-shadow: 0 0 1px rgb(67 90 111 / 30%),
      0 8px 10px -4px rgb(67 90 111 / 47%);

    .view-mode-list {
      display: flex;
      flex-direction: column;

      .item {
        height: 40px;
        padding: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:not(:last-child) {
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
`;

interface I_NextDuo {
  status?: "success" | "error" | "warning";
}
export const NextDuoSTY = styled.a<I_NextDuo>`
  color: ${(props) => {
    switch (props.status) {
      case "success":
        return "#52bd94";
      case "error":
        return "#d14343 ";
      case "warning":
        return "#ffb020";
      default:
        return "#636f73";
    }
  }};
`;

// Table_START
export const StatusGuideBarSTY = styled.div`
  padding: 10px 10px 0;
  display: flex;

  .item {
    padding: 10px;
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    height: 40px;
    border-bottom: 4px solid rgba(0, 0, 0, 0);
    cursor: pointer;

    &.active {
      color: #006cb8;
      border-color: #006cb8;
    }

    &:not(.active) {
      &:hover {
        border-color: #eee;
      }
    }
  }
`;

export const OperateBarSTY = styled.div`
  padding: 10px 15px;
  margin: 0 0 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  .left-wrap,
  .right-wrap {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .left-wrap {
    .search-bar {
      border-radius: 100px;
      font-size: 14px;
      max-width: 200px;
    }

    > .button {
      border-radius: 100px;
    }
  }

  .right-wrap {
    float: right;

    .guide-wrap {
      .page {
        margin-right: 5px;
      }

      .button-wrap {
        button {
          &:first-child {
            border-top-right-radius: unset;
            border-bottom-right-radius: unset;
            border-right: unset;
          }
          &:last-child {
            border-top-left-radius: unset;
            border-bottom-left-radius: unset;
          }
        }
      }
    }
  }
`;

export const TableSTY = styled.div`
  a {
    cursor: pointer;
  }

  .sv-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .sv-time {
      font-size: 12px;
      color: #aaa;
    }
  }

  .next-duo {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .last-completed-date {
    color: #006cb8;
  }
`;
// Table_END

// DetailsOverview_START
export const BoxItemSTY = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px #0000001a, 0 1px 2px #0000000f, 0 2px 4px #00000008;
  margin: 10px;

  .head {
    padding: 20px 20px 0;
    display: flex;
    justify-content: space-between;

    .title {
      color: #3a5779;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .more-info {
      font-size: 12px;
      display: flex;
      gap: 5px;

      .remark {
        color: #bbb;
      }

      .href-text {
        text-decoration: unset;
        color: #006cb8;
      }
    }
  }

  .content {
    .detail-table {
      padding-top: unset;
    }

    .table {
      border-top: unset;
      padding-bottom: 10px;

      &.next-duo-table {
        .tbody {
          .tr {
            height: 30px;

            &:first-child {
              height: 40px;
            }

            &.interval {
              .td {
                span {
                  font-size: 16px;
                }

                &.warning {
                  span {
                    color: #f2aa2a;
                  }
                }
              }
            }

            .td {
              span {
                line-height: initial;
              }

              .icon {
                vertical-align: bottom;
                margin-right: 5px;
              }
            }
          }
        }
      }

      &.history-table {
        .thead {
          span {
            font-weight: bold;
          }
        }
      }

      .tbody,
      .thead {
        padding: 0 10px;
      }

      .thead {
        background-color: unset;
        height: 40px;
      }

      .tbody {
        .tr {
          border: unset;
        }
      }
    }
  }
`;

export const DetailsOverviewSTY = styled.div`
  display: flex;
  height: 100%;

  .box-wrap {
    flex-grow: 1;

    &.right-wrap {
      flex-grow: 2;
    }
  }
`;
// DetailsOverview_END

// Add_START
export const AddSTY = styled.div`
  height: 100%;
`;
// Add_END

// DetailsHistory_START
export const DetailsHistorySTY = styled.div`
  background-color: #f6f7f7;
  padding: 20px;

  .formCard_wrapper {
    > div {
      &:not(:first-child, .no-line) {
        border-top: 1px solid #eee;
        padding-top: 10px;
      }
    }

    .input-wrap {
      align-items: center;
    }

    .step-control {
      padding-bottom: unset;
    }

    .checkbox {
      .remark {
        color: #bbb;
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }

  .checkbox {
    span {
      font-size: 14px;
    }
  }
`;
// DetailsHistory_END
