import styled from "styled-components";

export const BodySTY = styled.div`
  form {
    .input-line {
      display: grid;
      grid-template-columns: 1fr 1fr 5fr;
      margin: 16px auto;
      span {
        font-size: 14px;
        font-weight: 600;
        color: #567190;
        display: flex;
        align-items: center;
      }
      button {
        width: 76px;
        height: 32px;
        color: #fff;
        background: #3670c9;
        border-radius: 32px;
        margin-left: 32px;
        &:hover {
          background-color: #1952a8;
        }
      }
    }
  }
`;
