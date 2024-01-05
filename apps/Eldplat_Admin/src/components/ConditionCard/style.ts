import { Heading } from "evergreen-ui";
import styled from "styled-components";

export const DivSTY = styled.div<{ type: "checkbox" | "view" }>`
  width: 100%;
  background-color: ${({ theme, type }) =>
    type === "view" ? theme.color.N0 : "transparent"};
  box-shadow: ${({ type }) =>
    type === "view" ? "0px 4px 8px rgba(16, 24, 64, 0.08)" : "none"};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${({ type }) => (type === "view" ? "flex-start" : "center")};
  gap: 12px;
  margin-bottom: 28px;
  .condiiton__cardContent {
    display: flex;
    flex-direction: row;
    .condition__checkbox {
      align-self: center;
    }
    .condiiton__textBtn {
      color: ${({ theme }) => theme.color.B400};
      padding-inline-start: 0.5rem;
      margin: 16px 0;
      cursor: pointer;
    }
  }
`;

export const ModalContentSTY = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  .condiiton__textBtn {
    font-size: ${({ theme }) => theme.fontSize.Heading500};
    font-weight: ${({ theme }) => theme.fontWeight.Heading500};
    margin-bottom: ${({ theme }) => theme.fontSize.Heading500};
  }
  .condition__article {
    p {
      font-size: ${({ theme }) => theme.fontSize.Paragraph200};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph200};
      margin-bottom: ${({ theme }) => theme.fontSize.Paragraph200};
      line-height: 1.5;
    }
  }
  .condition__confirmBtn {
    margin: 1rem;
  }
`;
