import styled from "styled-components";

export const BodySTY = styled.div`
  background: ${({ theme }) => theme.color.N0};
  font-family: "Noto Sans";
  width: 100%;
  min-height: 224px;
  background: #ffffff;
  border-radius: 10px;
  overflow: auto;
  padding: 35px 20px;
  h4 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.color.N700};
  }
  .language-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      padding: 0;
      margin-right: 10px;
      &:hover {
        border: none;
      }
    }
  }

  .input-line {
    display: grid;
    grid-template-columns: 1fr 6fr;
    margin: 16px auto;

    span {
      font-size: 14px;
      font-weight: 700;
      color: #567190;
    }

    .description {
      span {
        margin-right: 16px;
      }
    }
  }

  .add-language {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div {
      width: 100px;
      margin: 0 1px;

      input {
        height: 28px;
        padding: 4px;
        text-align: center;
      }
      button {
        div {
          display: flex;
          justify-content: center;
        }
      }
    }

    .trash-btn {
      border: none;
      margin-left: 10px;
    }
  }
`;
