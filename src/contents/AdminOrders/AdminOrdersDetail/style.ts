import styled from "styled-components";

const BodySTY = styled.div`
  form {
    display: flex;
    gap: 20px;
    & > div {
      &:first-child {
        flex: 1;
      }
    }
  }
  .special_content {
    .detail_list > .detail_item {
      & > span {
        &:first-child {
          max-width: 200px;
        }
      }
    }
  }
`;

export { BodySTY };
