import styled from "styled-components";

export const BodySTY = styled.div`
  // 密碼input大區塊
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
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
