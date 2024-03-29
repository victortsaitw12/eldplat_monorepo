import styled from "styled-components";

export const StyleIdIcon = styled.div<{ status: string }>`
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  width: fit-content !important;
  background: ${({ theme }) => theme.color.B50};
  > .icon-dot {
    background-color: ${({ status, theme }) => {
      switch (status) {
        case "01":
          return theme.color.G400;
        case "02":
          return theme.color.B400;
        case "03":
          return theme.color.Y400;
        case "04":
          return theme.color.R400;
        default:
          return theme.color.N500;
      }
    }};
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
  > .icon-text {
    color: ${({ theme }) => theme.color.N700};
    font-size: 12px;
    font-weight: 500;
  }
`;
