import styled from "styled-components";

export const LoadingSpinnerSTY = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 100px 0;

  .spinning {
    width: 40px;
    height: 40px;
    /* border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%; */
    animation: spinner 1.5s linear infinite;
  }
  .msg {
    overflow: hidden;
    color: var(--neutral-n-500, #8ea8c7);
    text-align: center;
    text-overflow: ellipsis;

    /* Headline/H-500 */
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
