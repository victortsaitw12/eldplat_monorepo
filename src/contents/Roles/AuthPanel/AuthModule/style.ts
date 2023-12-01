import styled from "styled-components";

export const DivSTY = styled.div`
  .authFunc {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .label {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .toggleBtn {
        cursor: pointer;
        padding: 10px;
        /* svg {
          height: 16px;
          width: 16px;
        } */
      }
    }
    &__contents {
      display: flex;
      flex-direction: column;
      .authFunc__element {
        display: flex;
        .label {
          padding-left: 100px;
        }
        .value {
        }
        .value > div {
          gap: 32px;
          display: flex;
        }
      }
    }
    &__item {
      height: 52px;
      align-items: center;
      display: flex;
      padding: 8px 16px;
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
      .label {
        flex: 1;
      }
      .value {
        flex: 2;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .disabled {
    background: ${({ theme }) => theme.color.N40};
  }
  .hide {
    display: none !important;
  }
`;
