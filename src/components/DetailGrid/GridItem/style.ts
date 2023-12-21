import styled from "styled-components";

const BodySTY = styled.li`
  display: grid;
  grid-template-columns: 135px 1fr;

  .item {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 20px;
    border-top: 1px solid ${({ theme }) => theme.color.N40};

    &:nth-child(odd) {
      border-right: 1px solid ${({ theme }) => theme.color.N40};
    }
  }
`;

export { BodySTY };
