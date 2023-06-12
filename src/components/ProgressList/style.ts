import styled from "styled-components";

export const ItemSTY = styled.div<{ status: "ok" | "pending" | "error" }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 4px;
  height: 60px;
  width: 80px;
  z-index: 2;
  .item-label {
    color: ${({ theme, status }) =>
      status === "error" ? theme.color.R400 : theme.color.B400};
    font-weight: 600;
  }
  .item-icon {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme, status }) =>
      status === "error"
        ? theme.color.R400
        : status === "ok"
        ? theme.color.B400
        : theme.color.N0};
    color: ${({ theme }) => theme.color.N0};
    border: ${({ theme, status }) =>
      (status === "pending" && `2px solid ${theme.color.B400}`) ||
      (status === "disabled" && `2px solid ${theme.color.N300}`)};
  }
  .item-date {
    color: ${({ theme }) => theme.color.N500};
    font-size: 12px;
  }
`;

export const ListSTY = styled.div`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 80px;
`;

export const LineSTY = styled.div`
  position: absolute;
  top: 50%;
  left: 40px;
  border: 1px solid ${({ theme }) => theme.color.B400};
  width: calc(100% - 80px);
`;
export const GrayLineSTY = styled.div<{ grayWidth?: number }>`
  position: absolute;
  top: 50%;
  right: 40px;
  border: 1px solid ${({ theme }) => theme.color.N300};
  width: ${({ grayWidth }) => "calc(" + grayWidth + " * (100% - 80px))"};
`;
