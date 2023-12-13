import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  width: 454px;
  padding: 48px;
  flex-direction: column;
  align-items: stretch;
  gap: 32px;
  background: ${({ theme }) => theme.color.N0};
  .inpitFields {
    label {
      font-size: ${({ theme }) => theme.fontSize.Headline400};
      font-weight: ${({ theme }) => theme.fontWeight.Headline400};
      color: ${({ theme }) => theme.color.N700};
    }
  }
  .asstRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    cursor: pointer;
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
