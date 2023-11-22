import styled from "styled-components";

// container
export const DivSTY = styled.div`
  border: 1px solid ${({ theme }) => theme.color.N40};
  border-radius: 4px;
  header {
    padding: 6px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
  }
  footer {
    padding: 6px 20px;
  }
`;

// 表格本身
export const TableSTY = styled.table`
  /* width: 100%; */
  min-width: 100%;
  border-collapse: collapse;
  /* border-radius: 4px; */
  border-spacing: 0px;
  overflow: hidden;
  /* action buttons */
  .action {
    div {
      button {
        border-radius: 4px;
        background: ${({ theme }) => theme.color.N20};
        svg {
        }
      }
    }
  }
  thead tr {
    background-color: ${({ theme }) => theme.color.N0};
    text-align: left;
    color: ${({ theme }) => theme.color.N200};
    font-weight: ${({ theme }) => theme.fontWeight.Heading400};
    font-size: ${({ theme }) => theme.fontSize.Headline400};
    pointer-events: none;
    /* border-bottom: 1px solid ${({ theme }) => theme.color.N40}; */
  }
  tbody tr {
    cursor: pointer;
    &:hover {
      background-color: #f9fafc;
    }
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    :first-child {
      border-top: 1px solid ${({ theme }) => theme.color.N40};
    }
    :last-child {
      border-bottom: none;
    }
  }

  td,
  th {
    text-align: left;
    white-space: nowrap;
    vertical-align: middle;
    span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  th {
    padding: 12px 20px 9px 20px;
  }
  td {
    padding: 5px 20px;
    color: ${({ theme }) => theme.color.N500};
    font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};
    /* font-size: ${({ theme }) => theme.fontSize.Paragraph300}; */
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
        border-radius: 4px;
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
