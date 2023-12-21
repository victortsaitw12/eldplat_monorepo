import styled from "styled-components";

export const BodySTY = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;

  .item-wrapper {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.color.N40};
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .row {
        display: flex;
        gap: 10px;
      }
    }

    .button-wrapper {
      display: flex;
      gap: 10px;

      button {
        cursor: pointer;
        border: none;
        background-color: #fff;
        color: ${({ theme }) => theme.color.N200};
      }
    }

    input {
      color: ${({ theme }) => theme.color.N300};
    }
  }
`;
