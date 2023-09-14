import styled from "styled-components";

export const CellSTY = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px solid ${({ theme }) => theme.color.N300};
  &:nth-child(-n + 7) {
    border-top: none;
  }
  .cell__createEventBtn {
    flex-grow: 10;
  }
  .cell__date {
    width: 100%;
    max-width: 100%;
    min-height: ${({ theme }) =>
      "calc(" + theme.fontSize.Heading200 + " + 4px * 2)"};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    /* position: absolute;
    bottom: 0;
    left: 0; */
    .cell__date-info {
      flex-grow: 10;
      text-align: start;
      .cell__unfold-btn {
        width: 100%;
        border: none;
        border-radius: 4px;
        color: ${({ theme }) => theme.color.N500};
        background: none;
        padding: 4px 8px;
        margin-right: 4px;
        text-align: left;
        cursor: pointer;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-style: normal;
        font-weight: ${({ theme }) => theme.fontWeight.Heading200};
        font-size: ${({ theme }) => theme.fontSize.Heading200};
        &:hover {
          background: ${({ theme }) => theme.color.N300};
        }
      }
    }

    .cell__date-btn {
      color: ${({ theme }) => theme.color.N700};
      font-weight: ${({ theme }) => theme.fontWeight.Heading200};
      min-width: 20px;
      min-height: 20px;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.color.N200};
      }
    }
  }
`;
