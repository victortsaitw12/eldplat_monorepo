import styled from "styled-components";

const BodySTY = styled.li`
  display: flex;
  align-items: center;
  & > * {
    flex: 1;
    color: ${({ theme }) => theme.color.N700};
    font-size: 14px;
    font-weight: 400px;
    &:first-child {
      max-width: 115px;
    }
  }
`;

export { BodySTY };
