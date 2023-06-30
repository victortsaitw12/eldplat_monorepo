import styled from "styled-components";

const FormSTY = styled.form`
  /* border: 1px solid #ccc; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  .info-box {
    background: #f1f6fd;
    border-radius: 10px;
    padding: 12px 20px;

    .date-area {
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      span {
        width: 33%;
      }
    }
  }

  .anchorBtn {
    button {
      justify-content: center;
      background-color: #fff;
      border-radius: 4px;
      color: ${({ theme }) => theme.color.N700};
    }
  }

  button {
    color: white;
    background-color: #3670c9;
    border-radius: 32px;
    font-size: 12px;
    font-weight: 600;
    justify-content: center;

    &:hover {
      background: #679def;
    }
  }

  select {
    height: 34px;
    & + svg {
      margin-top: -10px;
      height: 20px;
      width: 20px;
      border-radius: 4px;
      background: ${({ theme }) => theme.color.N100};
      & path {
        transform: scale(0.8) translateX(2px) translateY(2px);
      }
    }
  }
`;

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #3670c9;
  border: none;
  /* width: 240px; */
`;

export { FormSTY, StyledButton };
