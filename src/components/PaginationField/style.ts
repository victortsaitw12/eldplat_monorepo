import styled from "styled-components";

export const BodySTY = styled.div`
  align-items: center;
  display: flex;
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
    svg {
      color: ${({ theme }) => theme.color.N600};
    }
  }
`;
