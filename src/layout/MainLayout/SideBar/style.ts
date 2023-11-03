import styled from "styled-components";

export const BodySTY = styled.div`
  border-right: 1px solid #d6e2f0;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.N700};
  color: ${({ theme }) => theme.color.N0};
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    padding-bottom: 74px;
    gap: 12px;
    flex-grow: 1;
    border-top: 1px solid #d6e2f0;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    & > .header {
      cursor: pointer;
      width: 100%;
      padding: 8px 12px;
      font-size: 0.875rem;
      font-weight: 400;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      border-radius: 10px;
      font-size: ${({ theme }) => theme.fontSize.Heading600};
      &:hover {
        background-color: #e2edff;
        color: ${({ theme }) => theme.color.B400};
      }
    }
  }
  .divider {
    width: 200px;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 0.25;
    stroke: ${({ theme }) => theme.color.N0};
  }
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
