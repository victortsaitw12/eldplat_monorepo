import styled from "styled-components";

export const SectionSTY = styled.section`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .addon {
    li {
      span:first-child {
        min-width: 360px;
      }
    }
  }
  .collapse:not(:first-child) {
    .collapse_title {
      border-radius: 0px;
    }
  }
`;
