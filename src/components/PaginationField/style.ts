import styled from "styled-components";

export const BodySTY = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 0px 8px;

  .pageTotal {
    font-size: ${({ theme }) => theme.fontSize.Paragraph100};
    font-weight: ${({ theme }) => theme.fontWeight.Paragraph100};
  }
  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 4px;
    &__page {
      padding: 8px 12px 8px 12px;
      border-radius: 3px;
      background: ${({ theme }) => theme.color.B100};
    }
    button {
      cursor: pointer;
      padding: 10px;
      border: none;
      background: none;
    }
    svg {
      color: ${({ theme }) => theme.color.N600};
    }
  }
`;
