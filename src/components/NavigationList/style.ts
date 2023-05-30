import styled from "styled-components";

export const IconSTY = styled.div<{ status: "done" | "current" | "next" }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, status }) =>
    status === "done"
      ? theme.color.G200
      : status === "current"
      ? theme.color.B200
      : theme.color.N200};
  color: ${({ theme, status }) =>
    status === "done"
      ? theme.color.G400
      : status === "current"
      ? theme.color.B500
      : theme.color.N700};
`;

export const ItemSTY = styled.div<{ status: "done" | "current" | "next" }>`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 8px;
  height: 16px;
  color: ${({ theme, status }) => status === "current" && theme.color.B400};
  font-weight: 500;
`;

export const ListSTY = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
