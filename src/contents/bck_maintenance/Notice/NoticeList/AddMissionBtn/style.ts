import styled from "styled-components";

export const BodySTY = styled.div`
  button {
    cursor: pointer;
    width: 102px;
    height: 24px;
    padding: 4px 12px;
    color: ${({ theme }) => theme.color.N0};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.fontWeight.Heading400};
    border: none;
    border-radius: 32px;
    gap: 8px;
    background: ${({ theme }) => theme.color.B300};
    transition: all 0.3s;
    &:hover {
      background: ${({ theme }) => theme.color.B400};
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
