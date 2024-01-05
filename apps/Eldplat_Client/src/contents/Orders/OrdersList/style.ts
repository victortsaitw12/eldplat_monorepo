import styled from "styled-components";

export const BodySTY = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
  > .list-item {
    border-radius: 10px;
    overflow: hidden;
  }
  a {
    text-decoration: none;
  }
  .collapse {
    &_title {
      border-radius: 10px 10px 0px 0px;
    }
    &_content {
      padding: 20px;
      display: flex !important;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
