import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  margin: 10px;
  gap: 10px;
  .title-bar {
    margin-bottom: -1rem;
  }
  .filter-header {
    width: calc(100% - 317px);
  }
  & > div {
    border: none;
    &:first-child {
      flex: 1;
    }
  }
`;
