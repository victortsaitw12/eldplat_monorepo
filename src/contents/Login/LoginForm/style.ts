import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  width: 454px;
  padding: 48px;
  flex-direction: column;
  align-items: stretch;
  gap: 32px;
  background: ${({ theme }) => theme.color.N0};
  .asst {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    &__storePW {
      display: flex;
      .checkbox-title {
        flex: 10;
      }
    }
    &__forgetPW {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .all-password {
    position: relative;
    .forgot-password {
      width: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      left: 102%;
      top: 50%;
      transform: translateY(-50%);

      button {
        border: 0;
        background: transparent;
        font-weight: 600;
        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.color.N700};
          cursor: pointer;
        }
      }
    }
  }
`;
