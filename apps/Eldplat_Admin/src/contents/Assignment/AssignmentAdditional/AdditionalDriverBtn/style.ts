import styled from "styled-components";

export const BodySTY = styled.div`
  button {
    cursor: pointer;
    padding: 8px 16px;
    color: ${({ theme }) => theme.color.N0};
    font-weight: ${({ theme }) => theme.fontWeight.Heading400};
    border: none;
    border-radius: 32px;
    gap: 8px;
    background: ${({ theme }) => theme.color.B400};
    transition: all 0.3s;
    &:hover {
      background: ${({ theme }) => theme.color.B300};
    }
    &:active {
      background: ${({ theme }) => theme.color.B500};
    }
    /* &:focus {
    background: ${({ theme }) => theme.color.B400};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.B200};
  } */
    &:disabled {
      background: ${({ theme }) => theme.color.B200};
    }
  }
`;
