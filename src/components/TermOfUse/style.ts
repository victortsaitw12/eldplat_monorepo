import styled from "styled-components";

export const DivSTY = styled.div<{ type: "checkbox" | "view" }>`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: ${({ type }) => (type === "view" ? "flex-start" : "center")};
  gap: 12px;
  padding: 0px;
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
