import styled from "styled-components";

export const BodySTY = styled.div`
  display: grid;
  grid-template-columns: calc((100% - 20px) * 2 / 3) calc((100% - 20px) * 1 / 3);
  gap: 20px;
  .breadcrumbs {
    grid-column: 1/-1;
  }
  .collapse {
    grid-column: 1/2;
    &_title {
      border-radius: 10px 10px 0px 0px;
      padding-left: 20px;
    }
    &_content {
      /* Pane */
      & > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 0px 0px 10px 10px;
        padding: 20px;
        /* DetailItem */
        & > li {
          height: 32px;
          align-items: center;
        }
        /* ProgressList */
        & > div {
          min-height: 32px;
        }
      }
    }
  }
  .condiiton {
    grid-column: 1/2;
  }
  .cost {
    grid-row: 1/2;
    grid-column: 2/-1;
  }
`;
export const SectionSTY = styled.section`
  border-radius: 10px;
  grid-column: 1/2;
  .collapse:not(:first-child) {
    &_title {
      border-radius: 0px 0px 0px 0px;
    }
  }
`;
