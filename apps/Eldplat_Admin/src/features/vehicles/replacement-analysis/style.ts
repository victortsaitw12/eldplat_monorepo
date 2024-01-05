import styled from "styled-components";

interface I_boxStyleOption {
  minHeight?: boolean;
}

// 各區塊共用樣式
const boxStyle = (options: I_boxStyleOption) => {
  return `
        background-color: #fff;
        ${options.minHeight ? "min-height: 430px;" : ""}
        box-shadow: 0 1px 2px #0000001a, 0 1px 2px #0000000f, 0 2px 4px #00000008;
        border-radius: 8px;
    `;
};

const ReplacementAnalysisSTY = styled.div`
  height: 100%;
  padding: 15px;
  background: #f6f7f7;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .analysis-chart {
    ${boxStyle}

    /* TODO：暫時設置 */
        padding: 15px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
      &::after {
        /* TODO：暫時設置 */
        content: "此為示意圖片";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 2rem;
      }
    }

    .sample-img {
      /* TODO：暫時設置 */
      width: 100%;
      height: 100%;
    }
  }

  .input-group {
    display: flex;
    gap: 10px;
  }
`;

export const InputBoxSTY = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: start;
  ${boxStyle}

  &.row {
    flex-direction: row;
    gap: 30px;
  }

  > .box-item {
    flex-grow: 1;

    > .title {
      font-size: 16px;
      font-weight: 600;
    }

    > .input-wrap {
      margin: 10px 0;
      width: 100%;
      display: flex;
      gap: 10px;
      align-items: center;

      &.radio {
        .input {
          > div[role="group"] {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
          }
        }
      }

      .title {
        width: 35%;
        text-align: right;
      }

      .input {
        width: 65%;
        position: relative;

        &:not(:hover) {
          .arrow-button {
            > button {
              display: none;
            }
          }
        }

        .input-dom {
          font-size: 14px;

          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }

        .arrow-button {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 2px 0;
          padding-right: 5px;

          > button {
            background-color: #eee;
            color: #aaa;
            border: unset;
            cursor: pointer;

            &:hover {
              background-color: #ddd;
            }

            > svg {
              width: 15px;
              height: 10px;
            }
          }
        }

        .unit {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: default;
        }

        .currency {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          cursor: default;
        }
      }
    }
  }
`;

export default ReplacementAnalysisSTY;
