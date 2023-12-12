import styled from "styled-components";

export const DivSTY = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.N40};
  background: ${({ theme }) => theme.color.N0};
  box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
  .shadowElem {
    position: absolute;
  }
  /* .disabled {
    background: ${({ theme }) => theme.color.N40};
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
    svg {
      display: none;
    }
  } */
  .mask {
    width: 100%;
    height: 50px;
    position: absolute;
    background: ${({ theme }) => theme.color.N40};

    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
    svg {
      display: none;
    }
    z-index: 1;
  }
  .labelSty {
    display: flex;
    padding: 4px 8px;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    &__1 {
      font-size: ${({ theme }) => theme.fontSize.Paragraph300};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};
      color: ${({ theme }) => theme.color.G600};
      background: ${({ theme }) => theme.color.G200};
    }
    &__2 {
      font-size: ${({ theme }) => theme.fontSize.Paragraph300};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};
      color: ${({ theme }) => theme.color.O600};
      background: ${({ theme }) => theme.color.O100};
    }
    &__3 {
      font-size: ${({ theme }) => theme.fontSize.Paragraph300};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};
      color: ${({ theme }) => theme.color.Y600};
      background: ${({ theme }) => theme.color.Y100};
    }
    &__4 {
      font-size: ${({ theme }) => theme.fontSize.Paragraph300};
      font-weight: ${({ theme }) => theme.fontWeight.Paragraph300};
      color: ${({ theme }) => theme.color.V500};
      background: ${({ theme }) => theme.color.V100};
    }
    &__0 {
      background: ${({ theme }) => theme.color.P100};
    }
  }
  .placeholder {
    pointer-events: none;
  }
  .title {
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    background: ${({ theme }) => theme.color.N20};
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
      button {
        border: none;
        background: inherit;
        cursor: pointer;
        :hover {
          background: ${({ theme }) => theme.color.N40};
        }
      }
      svg {
        fill: ${({ theme }) => theme.color.N200};
      }
    }
  }
`;
