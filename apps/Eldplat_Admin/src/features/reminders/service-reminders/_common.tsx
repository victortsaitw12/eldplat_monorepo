/**
 * service-reminders各頁面共通組件
 * TODO: 此內的code待決定是否要做成共用component
 */

import React from "react";

import styled from "styled-components";

/**
 * @name StatusCount
 * @description 車輛各狀態統計Bar
 */
interface I_StatusCount {
  children: React.ReactNode;
}
const StatusCountSTY = styled.ul`
  display: flex;
  list-style: none;
  margin: 10px 15px;
  min-height: 80px;

  .item {
    flex-grow: 1;
    padding: 10px 20px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    position: relative;

    &:not(:last-child) {
      border-right: unset;

      &::after {
        content: "";
        height: 80%;
        width: 1px;
        position: absolute;
        background-color: #eee;
        right: 0;
      }
    }

    &:not(:first-child) {
      border-left: unset;
    }

    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .title {
      text-decoration: underline dashed;
      cursor: default;
    }

    .value {
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;

      &.error {
        color: #d14343;
      }

      &.warning,
      .num.warning {
        color: #ffb020;
      }

      .unit {
        font-size: 14px;
        font-weight: initial;
        margin-left: 5px;
      }
    }
  }
`;
export function StatusCount({ children }: I_StatusCount) {
  return <StatusCountSTY className="status-count">{children}</StatusCountSTY>;
}
