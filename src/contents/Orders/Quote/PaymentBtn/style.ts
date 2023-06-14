import styled from "styled-components";

export const DivSTY = styled.div`
  button {
    width: 100%;
    border-radius: 50rem;
    margin-bottom: 12px;
    /* primary */
    background: ${({ theme }) => theme.color.B400};
    transition: all 0.3s;
    &:hover {
      background: ${({ theme }) => theme.color.B400};
    }
    &:active {
      background: ${({ theme }) => theme.color.B500};
    }
    &:focus {
      background: ${({ theme }) => theme.color.B400};
    }
    &:disabled {
      background: ${({ theme }) => theme.color.B200};
    }
  }
  .secondaryBtn {
    /* secondary */
    background: ${({ theme }) => theme.color.N0};
    transition: all 0.3s;
  }
`;
