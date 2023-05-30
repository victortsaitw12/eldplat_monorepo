import styled from "styled-components";

export const ItemSTY = styled.div<{ status: "ok" | "pending" | "error" }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 4px;
  height: 60px;
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
      status === "pending" && `2px solid ${theme.color.B400}`};
  }
  .item-date {
    color: ${({ theme }) => theme.color.N500};
  }
`;

export const ListSTY = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 86px;
`;
