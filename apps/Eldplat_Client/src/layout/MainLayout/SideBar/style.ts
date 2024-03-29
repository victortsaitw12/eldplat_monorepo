import styled from "styled-components";

export const BodySTY = styled.div`
  border-right: 1px solid #d6e2f0;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.N300};
  color: ${({ theme }) => theme.color.N0};
  padding: 20px;
  gap: 12px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 74px;
    gap: 12px;
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .divider {
    width: 100%;
    height: 0px;
    border-bottom: 1px solid ${({ theme }) => theme.color.N400};
    padding: 0 20px;
  }

  /* ---  --- */
  .footer {
    position: absolute;
    cursor: pointer;
    border-top: 1px solid #d6e2f0;
    bottom: 0;
    left: 0;
    transform: translateY(calc(100% - 54px));
    padding: 8px 20px;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    background: #fff;
    flex-shrink: 0;
    transition: all 0.3s;
    &:hover {
      transform: translateY(0);
      .close-button {
        display: block !important;
      }
      .open-button {
        display: none;
      }
    }
    .footer-button {
      border: none;
      cursor: pointer;
      display: flex;
      width: 200px;
      height: 38px;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      font-weight: 600;
      background: none;
      .icon-container {
        width: 40px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        .close-button {
          display: none;
        }
      }
      p {
        padding: 8px 12px;
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.color.N700};
      }
    }
  }

  .hide {
    display: none;
  }
`;
