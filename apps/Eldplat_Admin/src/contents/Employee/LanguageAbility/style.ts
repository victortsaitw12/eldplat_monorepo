import styled from "styled-components";

export const BodySTY = styled.div`
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
    grid-template-columns: 1fr 2fr;
    margin: 16px auto;

    span {
      font-size: 14px;
      font-weight: 400;
      color: #567190;
    }

    .content-line {
      display: flex;
      justify-content: space-between;
      .description {
        span {
          margin-right: 16px;
        }
      }
      button {
        border: none;
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

    .trash-btn,
    .tick-btn {
      border: none;

      > div {
        margin: 0;
        width: 14px;
      }
    }
  }
  & > .empty-msg {
    font-size: ${({ theme }) => theme.fontSize.Paragraph200};
    color: ${({ theme }) => theme.color.N700};
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1.25rem;
    line-height: 2rem;
  }
`;
