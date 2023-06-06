import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  .left {
    /* width: 820px; */
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .right {
    /* width: 400px; */
    flex: 1;
  }
  .collapse {
    &_title {
      /* border-radius: 10px 10px 0px 0px; */
      padding-left: 20px;
    }
    &_content {
      /* Pane */
      & > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        /* border-radius: 0px 0px 10px 10px; */
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
