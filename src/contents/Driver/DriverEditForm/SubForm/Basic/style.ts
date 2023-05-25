import styled from "styled-components";

export const BodySTY = styled.div`
  position: relative;

  .form {
    .email {
      text-decoration: none;
      color: ${({ theme }) => theme.color.B400};
    }
    .input-line {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      margin: 16px auto;
      .title {
        grid-column-start: 1;
        grid-column-end: 2;
        flex-grow: 1;
      }
      .spinner {
        grid-column-start: 2;
        grid-column-end: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        flex-grow: 2;
      }
      span {
        font-size: 14px;
        font-weight: 400;
        color: #567190;
      }
    }
  }
`;
