import styled from "styled-components";

// 表格本身
export const TableSTY = styled.table`
  /* width: 100%; */
  min-width: 100%;
  border: 1px solid ${({ theme }) => theme.color.N300};
  /* border-collapse: collapse; */
  border-radius: 4px;
  border-spacing: 0px;
  overflow: hidden;
  thead tr {
    background-color: ${({ theme }) => theme.color.N50};
    text-align: left;
  }
  td,
  th {
    padding: 8px 10px;
    text-align: left;
    white-space: nowrap;
    vertical-align: middle;
    border-bottom: 1px solid ${({ theme }) => theme.color.N300};
    span {
      display: flex;
      justify-content: center;
      align-items: center;
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
  

  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 50px);

    .content {
      flex-grow: 0;
      width: 50%;
      text-align: center;

      .icon {
        display: inline-block;
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
      }

      p:nth-of-type(1) {
        margin-bottom: 15px;
      }

      p:nth-of-type(2) {
        margin-bottom: 8px;
      }

      a {
        text-decoration: none;
      }
    }
  }
`;

// 各列Style（<tr>）
interface I_TrSTY {
  statusBar?: "success" | "warning" | "error";
}
export const TrSTY = styled.tr<I_TrSTY>`
  position: relative;

  /* <tr> Status Bar Style */
  &.status-bar {
    &::after {
      content: "";
      height: 60%;
      width: 5px;
      display: inline-block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 10px;
      background-color: ${(props) => {
    switch (props.statusBar) {
      case "success":
        return "#52bd94";
      case "error":
        return "#d14343";
      case "warning":
        return "#ffb020";
      default:
        return "unset";
    }
  }};
    }
  }
`;
