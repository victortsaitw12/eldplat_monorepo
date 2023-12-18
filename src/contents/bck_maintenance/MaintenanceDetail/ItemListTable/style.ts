import styled from "styled-components";
// 包裹整個表格的容器
const TableContainerSTY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .add-invoice {
    display: flex;
    justify-content: flex-end;

    button {
      background: transparent;
      color: #567190;
      font-weight: 600;
      font-size: 16px;
      &:hover {
        background-color: #567190;
        color: #ffffff;
        opacity: 0.6;
      }
    }
  }
`;

// 表格本身
const TableSTY = styled.table`
  /* min-width: 100%; */
  border: 1px solid ${({ theme }) => theme.color.N300};
  /* border-collapse: collapse; */
  border-radius: 4px;
  border-spacing: 0px;
  min-height: 100px;

  thead tr {
    background-color: ${({ theme }) => theme.color.N50};
    th .invoice,
    th .remark {
      display: flex;
      justify-content: flex-start;
    }

    th .file,
    th .delete {
      display: flex;
      justify-content: center;
    }

    th .price {
      display: flex;
      justify-content: flex-end;
    }
  }

  tbody {
    position: relative;

    // 僅為維保編輯發票部分
    .invoice {
      .delete {
        svg {
          display: flex;
          align-items: center;
          width: 30px;
        }
      }
    }

    tr td .receipt_number,
    tr td .service_remark {
      display: flex;
      justify-content: flex-start;
    }
    tr td .price {
      display: flex;
      justify-content: flex-end;
    }

    tr td .receipt_url > div > div > div {
      height: 50px;
    }
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
  }
  tr:last-child td {
    border-bottom: none;
  }
  td {
    .no-data div {
      width: 20px;
      height: 1px;
      background: #e3e3e3;
    }
    .delete {
      color: ${({ theme }) => theme.color.N600};
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
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
  }
`;

const ItemSTY = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  list-style: none;
  .content {
    display: grid;
    grid-template-columns: minmax(160px, 1fr) 2fr;
    column-gap: 8px;
    .content-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .content-item {
      display: flex;
      gap: 8px;
    }
  }
  .delete {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 10px;
    border: none;
    background: none;
  }
`;

export { TableContainerSTY, TableSTY, ItemSTY };
