import styled from "styled-components";
// 包裹整個表格的容器
const TableContainerSTY = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-x: auto;
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 100%;
    color: ${({ theme }) => theme.color.N700};
    .container-header-left {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 16px;
      font-weight: 600;
    }
    button {
      background-color: ${({ theme }) => theme.color.B400};
      padding: 8px 16px;
    }
  }
  .container-pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 8px;
    span {
      font-size: ${({ theme }) => theme.fontSize.Paragraph100};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph100};
    }
    .actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 4px;
      button {
        cursor: pointer;
        padding: 10px;
        border: none;
        background: none;
      }
    }
  }
  & > .container-table {
    height: 100%;
    overflow-y: auto;
    overflow-x: auto;
    & > table {
      width: 100%;
    }
  }
`;

// 表格本身
const TableSTY = styled.table`
  border: 1px solid ${({ theme }) => theme.color.N300};
  border-top: 0;
  border-spacing: 0px;
  thead {
    position: sticky;
    top: 0;
    z-index: 13;
  }
  thead tr {
    background-color: ${({ theme }) => theme.color.N50};
    text-align: left;
    color: ${({ theme }) => theme.color.N700};
    &:first-child {
      & > th {
        border-top: 1px solid ${({ theme }) => theme.color.N300};
      }
    }
  }

  td,
  th {
    text-align: left;
    white-space: nowrap;
    vertical-align: middle;
    border-bottom: 1px solid ${({ theme }) => theme.color.N300};
    padding: 4px;
    & > span,
    & > div {
      margin: 0.5rem 0;
    }
    span,
    div:not(.table-action) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    label > div:not(:first-child) {
      justify-content: center;
    }
    &:first-child {
      padding-left: 24px;
    }
    &:last-child {
      padding-right: 24px;
    }
  }
  tr:last-child td {
    border-bottom: none;
  }
  tr:hover {
    background-color: #f9fafc;
  }
  td {
    a {
      text-decoration: dotted underline;
    }

    .no-data div {
      width: 20px;
      height: 1px;
      background: #e3e3e3;
    }
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
  .data-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
  .handle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: green;
  }
  .noDataShown {
    text-align: center;
    padding: 15px 0;
  }
  /* .noDataShown {
    min-height: 32px;
    display: flex;
    justify-content: center;
    column-span: all;
    div {
      width: 100%;
      height: 32px;
      vertical-align: middle;
      line-height: 32px;
      position: absolute;
      text-align: center;
    }
  } */
`;

const StyledDot = styled.div<{ value: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ value, theme }) => {
    if (value === "01") {
      // 活躍中
      return theme.color.G400;
    }
    if (value === "02") {
      // 閒置中
      return theme.color.B400;
    }
    if (value === "03") {
      // 在維修廠
      return theme.color.Y400;
    }
    if (value === "04") {
      // 已售出
      return theme.color.N500;
    }
    // 終止服務
    return theme.color.R400;
  }};
`;

export { TableContainerSTY, TableSTY, StyledDot };
