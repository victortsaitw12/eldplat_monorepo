import styled from "styled-components";
// 包裹整個表格的容器
const TableTitleSTY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
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
      span {
        font-size: ${({ theme }) => theme.fontSize.Heading500};
        font-weight: ${({ theme }) => theme.fontWeight.Heading500};
        color: ${({ theme }) => theme.color.N700};
        //styleName: Headline/H-500;
      }
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

export { TableTitleSTY };
