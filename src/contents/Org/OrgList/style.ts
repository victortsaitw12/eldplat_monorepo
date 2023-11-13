import styled from "styled-components";

export const DivSTY = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.N300};
  background: var(--neutral-n-0, #fff);
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
  .title {
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    background: ${({ theme }) => theme.color.N300};
    color: ${({ theme }) => theme.color.N700};
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .accordion {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__label {
    }
    &__btns {
      display: flex;
      padding: 8px 16px;
      align-items: center;
      gap: 8px;
      align-self: stretch;
      svg {
        fill: ${({ theme }) => theme.color.N600};
      }
    }
  }
`;
