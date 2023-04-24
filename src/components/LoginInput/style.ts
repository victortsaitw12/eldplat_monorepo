import styled from "styled-components";

export const BodySTY = styled.div<{ className?: string }>`
  .input-box {
    display: flex;
    width: ${({ theme }) => `calc(${theme.screen.laptop} /3)`};
    border: 1px solid;
    border-radius: 4px;
    padding: 6px;
    margin: 8px 0;
    label {
      width: 25%;
      border-right: 1px solid #000000;
      padding: 0 4px;
    }
    input {
      border: none;
      width: 100%;
      padding: 0 6px;

      &:focus {
        outline: none;
      }
    }
  }
`;
