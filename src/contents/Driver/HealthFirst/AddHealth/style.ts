import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      /* display: flex;
      justify-content: space-between;
      align-items: center; */
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      margin: 16px auto;
      z-index: 100;
      span {
        font-size: 14px;
        font-weight: 700;
        color: #567190;
      }
      input {
        border: 1px solid #afc3da;
      }
      button {
        text-align: left;
      }
    }
    .health-upload {
      button {
        width: 100px;
        height: 32px;
        color: #ffffff;
        background-color: #3670c9;
        border-radius: 32px;
        &:hover {
          background-color: #1952a8;
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;

      button {
        border-radius: 32px;
      }
      .cancel {
      }
      .confirm {
        color: white;
        background-color: #3670c9;
        &:hover {
          background-color: #1952a8;
        }
      }
    }
  }
`;
