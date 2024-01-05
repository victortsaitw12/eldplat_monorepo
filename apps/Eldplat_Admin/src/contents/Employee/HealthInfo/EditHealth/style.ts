import styled from "styled-components";

export const BodySTY = styled.div`
  border-top: 0.0625rem solid ${({ theme }) => theme.color.N300};
  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    .input-line {
      width: 100%;
      /* display: flex;
      justify-content: space-between;
      align-items: center; */
      display: flex;
      gap: 1.25rem;
      span {
        flex: 1;
        font-size: 14px;
        font-weight: 700;
        color: #567190;
      }
      & > div {
        width: 16.875rem;
      }
      input,
      textarea {
        width: 100%;
        border: 1px solid #afc3da;
      }
      textarea {
        max-width: 16.875rem;
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
