import styled from "styled-components";

export const AssistRowSTY = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  .asstRow {
    &__storeAcct {
      display: flex;
      gap: 12px;
      label {
        gap: 0px;
        label {
          gap: 12px;
        }
      }
    }
    &__forgetPw {
      color: ${({ theme }) => theme.color.B400};
      font-size: ${({ theme }) => theme.fontSize.Paragraph300};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
