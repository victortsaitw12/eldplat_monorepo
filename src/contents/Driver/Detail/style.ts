import styled from "styled-components";

// DetailsOverview
export const BoxItemSTY = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px #0000001a, 0 1px 2px #0000000f, 0 2px 4px #00000008;
  margin-bottom: 10px;
  .head {
    padding: 20px 20px 0;
    display: flex;
    justify-content: space-between;

    .title {
      font-weight: bold;
      margin-bottom: 15px;
      h3 {
        color: #567190;
        font-family: "Noto Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
      }
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
    background-color: #fff;
    border-radius: 10px;
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
  table {
    tbody {
      tr {
        th {
          border-bottom: none;
        }
      }
    }
  }
`;

export const DetailsOverviewSTY = styled.div`
  display: flex;
  height: 100%;
  gap: 10px;
  .box-wrap {
    flex-grow: 1;
    &.right-wrap {
      flex-grow: 2;
    }
  }
`;

// Basic
export const BasicSTY = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  img {
    margin: 10px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #ccc;
  }
`;
