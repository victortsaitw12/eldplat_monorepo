import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;

  &.min-height{
    min-height: calc(177px - 35px - 40px);
  }

  .tag {
    height: 27px;
    border-radius: 4px;
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.color.B100};
    color: ${({ theme }) => theme.color.N200};
    text-align: center;

    display: flex;
    align-items: center;
    gap: 8px;

    .text {
    }

    .button {
      display: flex;
      text-align: center;

      transition: all 0.1s;
      border-radius: 50%;
    }

    &:hover .button {
      background-color: ${({ theme }) => theme.color.N200};
      color: #fff;
    }
  }

  .create-button {
    padding: 4px 8px;
    width: fit-content;
    height: 27px;
  }

  .input {
    cursor: pointer;
    width: 95px;
    height: 27px;

    display: flex;
    align-items: center;
    padding: 4px 8px;
    color: ${({ theme }) => theme.color.N300};
    font-weight: ${({ theme }) => theme.fontWeight.Paragraph100};
    border: 1px solid ${({ theme }) => theme.color.N60};
    border-radius: 4px;
    gap: 2px;
    background: ${({ theme }) => theme.color.N0};

    p {
      line-height: 16px;
    }

    &:focus {
      outline: none;
    }
  }
`;
