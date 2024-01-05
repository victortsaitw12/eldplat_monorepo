import styled from "styled-components";

const BodySTY = styled.div`
  margin: 20px 0;

  .tabs-wrapper {
    display: flex;
    border: 1px solid ${({ theme }) => theme.color.N60};
    border-radius: 4px;
    width: fit-content;
  }
`;

const TagSTY = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.N300};
  font-size: 12px;
  font-weight: 500;

  border-right: 1px solid ${({ theme }) => theme.color.N60};

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-right: none;
    border-radius: 0 4px 4px 0;
  }

  &.active {
    background-color: ${({ theme }) => theme.color.B100};
    color: ${({ theme }) => theme.color.B400};
  }
`;

export { BodySTY, TagSTY };
