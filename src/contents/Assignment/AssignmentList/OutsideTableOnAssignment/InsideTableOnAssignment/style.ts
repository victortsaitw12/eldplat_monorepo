import styled from "styled-components";
// 包裹整個表格的容器
const TableContainerSTY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 100%;
    .container-header-left {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: ${({ theme }) => theme.fontSize.Heading500};
      font-weight: ${({ theme }) => theme.fontWeight.Heading500};
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
`;

// 表格本身
const TableSTY = styled.table`
  min-width: 100%;
  border: 1px solid ${({ theme }) => theme.color.N300};
  /* border-collapse: collapse; */
  border-radius: 4px;
  border-spacing: 0px;
  thead {
    tr {
      background: ${({ theme }) => theme.color.N100};
      text-align: left;
    }
  }

  tbody {
    background-color: ${({ theme }) => theme.color.N400};
  }

  td,
  th {
    padding: 8px 10px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-bottom: 1px solid ${({ theme }) => theme.color.N300};

    span,
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    position: relative;
    .table-row-option {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 10px;
      overflow: hidden;
      transform: translateX(-50%);
      background-color: ${({ theme }) => theme.color.N0};
      border: 1px solid ${({ theme }) => theme.color.N300};
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      .option-item {
        width: 100px;
        height: 32px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        padding: 0 10px;
        gap: 5px;
        border-bottom: 1px solid ${({ theme }) => theme.color.N300};
      }
    }
  }
  tr:last-child td {
    border-bottom: none;
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
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: green;
  }
  .noDataShown {
    min-height: 32px;
    div {
      width: 100%;
      height: 32px;
      vertical-align: middle;
      line-height: 32px;
      position: absolute;
      text-align: center;
    }
  }
  .busDayCol {
    border-right: 1px solid ${({ theme }) => theme.color.N300};
    border-left: 1px solid ${({ theme }) => theme.color.N300};
  }
`;

export { TableContainerSTY, TableSTY };
