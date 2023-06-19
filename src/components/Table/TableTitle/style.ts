import styled from "styled-components";

export const TableTitleSTY = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
  .container-header {
    font-family:"Noto Sans";
    font-weight:${({theme})=>theme.fontWeight.Heading500};
    font-size:${({theme})=>theme.fontSize.Heading500};
    line-height:22px;
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
        margin-right: 16px;
      }
    }
    .container-header-right {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }
  }
  .container-sub {
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .subTitle {
      max-width: calc(75%);
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      max-width: calc(70% -180px);
      &:nth-child(n) {
        max-width: calc(100% / 7);
      }
    }
    .container-pagination {
      max-width: calc(25%);
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;
      padding: 0px;
      gap: 8px;
      position: relative;
      span {
        max-width: calc(100%);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
  }
`;
