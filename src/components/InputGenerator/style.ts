import styled from "styled-components";

export const BodySTY = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;

  .input-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
      cursor: pointer;
      border: none;
      background-color: #fff;
      color: ${({ theme }) => theme.color.N200};
    }

    input{
      color: ${({ theme }) => theme.color.N300};
    }
  }

`;
