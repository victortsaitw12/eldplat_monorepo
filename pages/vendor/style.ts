import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  margin: 10px;
  &>div{
    border: none;
  }
  & .vendor-label{
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 8px;
    background:  ${({ theme }) => theme.color.B100};
    color: ${({ theme }) => theme.color.B500};
  }
`;
