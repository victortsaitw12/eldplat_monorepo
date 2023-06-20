import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  .left {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .collapse {
    &_title {
      padding-left: 20px;
    }
    &_content {
      /* Pane */
      & > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
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
`;
