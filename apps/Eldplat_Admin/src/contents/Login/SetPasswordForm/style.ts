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
`;
