import styled from "styled-components";

export const BtnSTY = styled.button<{ color: string }>`
  /* max-width: calc(100% / 7); */
  background-color: ${({ theme, color }) => theme.color[color]};
  color: ${({ theme }) => theme.color.N0};
  padding: 4px 8px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100% - 20px);
  }
`;
